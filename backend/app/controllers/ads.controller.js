const prisma = require('../../prisma/indexPrisma')
const { typeSw } = require('../utils/CONSTANTS')
const { formatLocation } = require('../utils/formatLocation')
const { apiResponse } = require('../utils/utils')
const {
  adsSchema,
  AdByIdParamSchema,
  getAdsByTypeSchema,
  getUserAdsSchema,
  patchAdSchema,
} = require('../utils/schemaValidation')
const { parseAdsFromCsvBuffer } = require('../utils/parseAdsFromCsvBuffer')

async function createAd(req, res, next) {
  const userId = { req }
  try {
    // fields -> userId, title, description, city, nRooms, price, squareMeters, nBathrooms, mapLat, mapLon
    const { ...fields } = req.body
    // @todo: userId might be removed from adsSchema and docs, for it is taken from the authenticateToken middleware and not sent by the client
    await adsSchema.validateAsync(fields)

    const ad = await prisma.ads.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        title: req.body.title,
        description: req.body.description,
        city: req.body.city,
        nRooms: parseInt(req.body.nRooms, 10),
        price: parseInt(req.body.price, 10),
        squareMeters: parseInt(req.body.squareMeters, 10),
        nBathrooms: parseInt(req.body.nBathrooms, 10),
        mapLat: parseFloat(req.body.mapLat),
        mapLon: parseFloat(req.body.mapLon),
        includedExpenses: req.body.includedExpenses === 'true',
        adType: {
          connect: {
            id: parseInt(req.body.adTypeId, 10),
          },
        },
      },
    })

    res.status(200).json(
      apiResponse({
        message: 'Ad created successfully.',
        data: ad,
        status: 200,
      })
    )
  } catch (err) {
    if (err && err.code === 'P2003') {
      res.status(422).json(
        apiResponse({
          message: 'This value for userId does not exist in users table.',
          errors: err.message,
          status: 422,
        })
      )
    } else {
      next(err)
    }
  }
}

async function createAdsFromCSVBuffer(req, res, next) {
  try {
    const adsArray = await parseAdsFromCsvBuffer(req)
    const userId = { req }

    // Append userId to each ad entry
    const adsArrayWithUserId = adsArray.map((ad) => ({ ...ad, userId: userId.toString() }))

    const promiseArray = adsArrayWithUserId.map((ad) => adsSchema.validateAsync(ad))
    const validatedAdsArray = await Promise.all(promiseArray)

    const createMany = await prisma.ads.createMany({
      data: validatedAdsArray,
      skipDuplicates: true,
    })

    res.status(200).json(
      apiResponse({
        message: `${createMany.count} records have been created successfully`,
        // createMany does not return created records. As a workaround, validatedAdsArray is returned. https://github.com/prisma/prisma/issues/8131
        data: validatedAdsArray,
        status: 200,
      })
    )
  } catch (err) {
    if (err.message === 'Invalid CSV Headers') {
      res.status(400).json(
        apiResponse({
          message: err.message,
          errors: err.message,
          status: 400,
        })
      )
    } else {
      next(err)
    }
  }
}

async function getUserAds(req, res) {
  const userId = { req }
  await getUserAdsSchema.validateAsync(userId)
  const ads = await prisma.ads.findMany({
    where: { userId },
  })
  return res.status(200).json(
    apiResponse({
      message: 'Data fetched correctly.',
      data: ads,
      status: 200,
    })
  )
}

async function getAllAds(req, res) {
  const ads = await prisma.ads.findMany()
  res.status(200).json(
    apiResponse({
      message: 'Data fetched correctly.',
      data: ads,
      status: 200,
    })
  )
}

async function getAdById(req, res) {
  const adId = parseInt(req.params.adId, 10)

  // Validates if integer.
  await AdByIdParamSchema.validateAsync(adId)

  const ad = await prisma.ads.findUnique({
    where: {
      id: adId,
    },
  })

  if (!ad) {
    res.status(404).json(
      apiResponse({
        message: 'This adId does not exist.',
        status: 404,
      })
    )
  }

  res.status(200).json({
    message: 'Ad fetched correctly.',
    data: ad,
    status: 200,
  })
}

async function getAdsByType(req, res) {
  const { type } = req.params
  await getAdsByTypeSchema.validateAsync(type)
  const typeId = typeSw(type)

  if (typeId === 0) {
    return res.status(404).json(
      apiResponse({
        message: 'Type not in the database',
        status: 404,
      })
    )
  }
  const { id } = await prisma.adType.findUnique({
    where: {
      id: typeId,
    },
  })

  const ads = await prisma.ads.findMany({
    where: {
      adTypeId: id,
    },
  })

  return res.status(200).json({
    message: 'Ad fetched correctly.',
    data: ads,
    status: 200,
  })
}

async function getAdTypes(req, res) {
  const typeNames = await prisma.adType.findMany()
  const data = []
  typeNames.forEach((type) => {
    data.push(type.name)
  })
  res.status(200).json({
    message: 'Types fetched correctly.',
    data,
  })
}

async function getAdsByTypeAndLocation(req, res) {
  const { location, type } = req.params
  const formattedLocation = formatLocation(location)
  await getAdsByTypeSchema.validateAsync(type)
  const typeId = typeSw(type)

  if (typeId === 0) {
    return res.status(404).json(
      apiResponse({
        message: 'Type not in the database',
        status: 404,
      })
    )
  }
  const { id } = await prisma.adType.findUnique({
    where: {
      id: typeId,
    },
  })

  const ads = await prisma.ads.findMany({
    where: {
      city: formattedLocation,
      adTypeId: id,
    },
  })

  if (ads.length === 0) {
    return res.status(200).json({
      message: 'There are no ads for the city and type selected',
    })
  }

  return res.status(200).json({
    message: 'Ad fetched correctly.',
    data: ads,
  })
}

async function getAdsByLocation(req, res) {
  const { location } = req.params
  const formattedLocation = formatLocation(location)
  const data = await prisma.ads.findMany({ where: { city: formattedLocation } })
  res.status(200).json({ data })
}

async function deleteById(req, res, next) {
  try {
    const adId = parseInt(req.params.adId, 10)

    // Validates if integer.
    await AdByIdParamSchema.validateAsync(adId)

    const deletedAd = await prisma.ads.delete({
      where: {
        id: adId,
      },
    })

    res.status(200).json(
      apiResponse({
        message: 'Ad successfully deleted.',
        data: deletedAd,
        status: 200,
      })
    )
  } catch (err) {
    if (err.code === 'P2025') {
      res.status(404).json(
        apiResponse({
          message: 'This adId does not exist.',
          errors: err.message,
          status: 404,
        })
      )
    } else {
      next(err)
    }
  }
}

async function updateAd(req, res, next) {
  try {
    const userId = { req }

    const { adId } = req.params
    const { ...fields } = req.body
    const validatedFields = await patchAdSchema.validateAsync({ adId, ...fields })

    // This extra query is the only way I found to check that the ad intended to be updated belongs to the user that is attempting to update it. Might me improved.
    const result = await prisma.ads.findMany({
      where: {
        userId,
        id: validatedFields.adId,
      },
    })

    if (result.length === 0) {
      res.sendStatus(403)
      res.status(403).json(
        apiResponse({
          message: 'Is not possible to update this Ad.',
          status: 403,
        })
      )
    } else {
      const updatedAd = await prisma.ads.update({
        where: {
          id: validatedFields.adId,
        },
        data: {
          title: req.body.title || undefined,
          description: req.body.description || undefined,
          city: req.body.city || undefined,
          nRooms: parseInt(req.body.nRooms, 10) || undefined,
          price: parseInt(req.body.price, 10) || undefined,
          squareMeters: parseInt(req.body.squareMeters, 10) || undefined,
          nBathrooms: parseInt(req.body.nBathrooms, 10) || undefined,
          mapLat: parseFloat(req.body.mapLat) || undefined,
          mapLon: parseFloat(req.body.mapLon) || undefined,
          adType: {
            connect: {
              id: parseInt(req.body.adTypeId, 10) || undefined,
            },
          },
        },
      })

      res.status(200).json(
        apiResponse({
          message: 'Ad updated successfully.',
          data: updatedAd,
          status: 200,
        })
      )
    }
  } catch (err) {
    // P2025 Prisma error record not found
    if (err.code === 'P2025') {
      res.status(404).json(
        apiResponse({
          message: err.meta.cause,
          errors: err.message,
          status: 404,
        })
      )
    } else {
      next(err)
    }
  }
}

async function activeAdsByLocationAndDate(req, res) {
  const locationId = JSON.parse(req.body.location_id)
  const initialDate = new Date(req.body.initialDate)
  const finalDate = new Date(req.body.finalDate)
  const statusId = req.body.status_id
  const ads = await prisma.ads.findMany({
    where: {
      location: locationId,
      createdAt: {
        gt: initialDate,
        lt: finalDate,
      },
      AND: [
        {
          adStatusId: statusId,
        },
      ],
    },
  })
  res.status(200).send(ads)
  apiResponse({
    message: 'Ad fetched correctly.',
    status: 200,
  })
}

module.exports = {
  createAd,
  getAllAds,
  getAdById,
  getAdsByType,
  getAdTypes,
  getAdsByLocation,
  getAdsByTypeAndLocation,
  getUserAds,
  deleteById,
  updateAd,
  createAdsFromCSVBuffer,
  activeAdsByLocationAndDate,
}
