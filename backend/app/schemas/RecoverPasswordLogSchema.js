const { z } = require('zod')

const RecoverPasswordLogSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  password: z.string(),
  userId: z.number().int(),
})

export default RecoverPasswordLogSchema
