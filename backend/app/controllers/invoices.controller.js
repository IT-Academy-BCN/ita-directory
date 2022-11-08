const prisma = require('../../prisma/indexPrisma')
const { apiResponse } = require('../utils/utils')
const {
  invoicesSchema,
  invoiceByIdParamSchema,
  patchInvoiceSchema,
  getUserInvoicesSchema,
} = require('../utils/schemaValidation')

async function createInvoice(req, res, next) {
  const userId = { req }
  try {
    // fields -> userId, title, description, city, nRooms, price, squareMeters, nBathrooms, mapLat, mapLon
    const { ...fields } = req.body
    // @todo: userId might be removed from invoicesSchema and docs, for it is taken from the authenticateToken middleware and not sent by the client
    await invoicesSchema.validateAsync(fields)

    const invoice = await prisma.invoice.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        billingaddress: req.body.billingaddress,
        postalCode: req.body.postalCode,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        vatId: req.body.vatId,
        vatAmount: parseFloat(req.body.vatAmount),
        secondTax: parseFloat(req.body.secondTax),
      },
    })

    res.status(200).json(
      apiResponse({
        message: 'invoice created successfully.',
        data: invoice,
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

async function getUserInvoices(req, res) {
  const { userId } = req
  await getUserInvoicesSchema.validateAsync(userId)
  const invoices = await prisma.invoice.findMany({
    where: { userId },
  })
  return res.status(200).json(
    apiResponse({
      message: 'Data fetched correctly.',
      data: invoices,
      status: 200,
    })
  )
}

async function getAllInvoices(req, res) {
  const invoices = await prisma.invoice.findMany()
  res.status(200).json(
    apiResponse({
      message: 'Data fetched correctly.',
      data: invoices,
      status: 200,
    })
  )
}

async function getInvoiceById(req, res) {
  const invoiceId = parseInt(req.params.invoiceId, 10)
  // Validates if integer.
  await invoiceByIdParamSchema.validateAsync(invoiceId)

  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
  })

  if (!invoice) {
    res.status(404).json(
      apiResponse({
        message: 'This invoiceId does not exist.',
        status: 404,
      })
    )
  }

  res.status(200).json({
    message: 'Invoice fetched correctly.',
    data: invoice,
    status: 200,
  })
}

async function deleteInvoiceById(req, res, next) {
  try {
    const invoiceId = parseInt(req.params.invoiceId, 10)

    // Validates if integer.
    await invoiceByIdParamSchema.validateAsync(invoiceId)

    const deletedInvoice = await prisma.invoice.delete({
      where: {
        id: invoiceId,
      },
    })

    res.status(200).json(
      apiResponse({
        message: 'Invoice successfully deleted.',
        data: deletedInvoice,
        status: 200,
      })
    )
  } catch (err) {
    if (err.code === 'P2025') {
      res.status(404).json(
        apiResponse({
          message: 'This invoiceId does not exist.',
          errors: err.message,
          status: 404,
        })
      )
    } else {
      next(err)
    }
  }
}

async function updateInvoice(req, res, next) {
  try {
    const userId = { req }

    const { invoiceId } = req.params
    const { ...fields } = req.body
    const validatedFields = await patchInvoiceSchema.validateAsync({ invoiceId, ...fields })

    // This extra query is the only way I found to check that the invoice intended to be updated belongs to the user that is attempting to update it. Might me improved.
    const result = await prisma.invoice.findMany({
      where: {
        userId,
        id: validatedFields.invoiceId,
      },
    })

    if (result.length === 0) {
      res.sendStatus(403)
      res.status(403).json(
        apiResponse({
          message: 'Is not possible to update this Invoice.',
          status: 403,
        })
      )
    } else {
      const updatedInvoice = await prisma.invoice.update({
        where: {
          id: validatedFields.invoiceId,
        },
        data: {
          billingaddress: req.body.billingaddress || undefined,
          postalCode: req.body.postalCode || undefined,
          city: req.body.city || undefined,
          state: req.body.state || undefined,
          country: req.body.country || undefined,
          vatId: req.body.vatId || undefined,
          vatAmount: parseFloat(req.body.vatAmount) || undefined,
          secondTax: parseFloat(req.body.secondTax) || undefined,
        },
      })

      res.status(200).json(
        apiResponse({
          message: 'Invoice updated successfully.',
          data: updatedInvoice,
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

module.exports = {
  createInvoice,
  getUserInvoices,
  getAllInvoices,
  getInvoiceById,
  deleteInvoiceById,
  updateInvoice,
}
