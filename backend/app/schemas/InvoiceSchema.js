const { z } = require('zod')

const InvoiceSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  billingaddress: z.string().nullish(),
  postalCode: z.string().nullish(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  vatId: z.string(),
  vatAmount: z.number().int(),
  secondTax: z.number().int(),
  createdAt: z.date().optional(),
  invoiceNumber: z.string(),
})

module.exports = InvoiceSchema
