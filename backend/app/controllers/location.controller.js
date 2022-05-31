const prisma = require('../../prisma/indexPrisma')
const { apiResponse } = require('../utils/utils')
const { getRegionByLocationSchema } = require('../utils/schemaValidation')
const { formatLocation } = require('../utils/formatLocation')

async function getRegion(req, res) {
  const { name } = req.params
  await getRegionByLocationSchema.validateAsync(name)
  const formattedName = formatLocation(name)
  const data = []
  const location = await prisma.level.findMany({
    where: {
      name: {
        contains: formattedName,
      },
    },
    orderBy: [
      {
        level_type_id: 'desc',
      },
    ],
  })

  data.push(location[0])

  for (let i = location[0].level_type_id; i >= 3; i - 1) {
    const id = location[0].parent_id
    // eslint-disable-next-line no-await-in-loop
    const parent = await prisma.level.findUnique({
      where: {
        id,
      },
    })
    location[0] = parent
    if (parent.level_type_id === 2) {
      data.push(parent)
    }
  }

  if (location.length === 0) {
    res.status(404).json(
      apiResponse({
        message: 'The location is not in the database or you spelled it wrong',
      })
    )
  }

  res.status(200).json({
    message: 'Location fetched',
    data,
  })
}

async function getParentChild(req, res) {
  const { name } = req.params
  await getRegionByLocationSchema.validateAsync(name)
  const formattedName = formatLocation(name)
  const data = []
  const location = await prisma.level.findMany({
    where: {
      name: {
        contains: formattedName,
      },
    },
    orderBy: [
      {
        level_type_id: 'asc',
      },
    ],
  })

  for (let i = 0; i < location.length; i + 1) {
    data.push(location[i])
    const parent = prisma.level.findMany({
      where: {
        id: location[i].parent_id,
      },
    })

    data[i] = { ...data[i], parent }

    const children = prisma.level.findMany({
      where: {
        parent_id: location[i].id,
      },
    })

    data[i] = { ...data[i], children }
  }

  if (location.length === 0) {
    res.status(404).json(
      apiResponse({
        message: 'The location is not in the database or you spelled it wrong',
      })
    )
  } else {
    res.status(200).json({
      message: 'Location fetched',
      data,
    })
  }
}

module.exports = { getRegion, getParentChild }
