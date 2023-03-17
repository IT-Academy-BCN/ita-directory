const { z } = require('zod')
const { Status } = require('@prisma/client')
const UserSchema = require('./UserSchema')

const InvoiceSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
  userId: z.number().int(),
  billingAddress: z.string().nullish(),
  postalCode: z.string().nullish(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  vatId: z.string(),
  vatAmount: z.number().int(),
  secondTax: z.number().int(),
  createdAt: z.date().optional(),
  invoiceNumber: z.string(),
  status: z.nativeEnum(Status).optional(),
})

module.exports = InvoiceSchema
