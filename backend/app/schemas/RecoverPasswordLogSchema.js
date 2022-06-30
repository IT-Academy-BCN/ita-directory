const { z } = require('zod')

const RecoverPasswordLogSchema = z.object({
  id: z.number().int(),
  createdAt: z.date().optional(),
  password: z.string(),
  userId: z.number().int(),
})

module.exports = RecoverPasswordLogSchema
