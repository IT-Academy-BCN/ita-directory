const { z } = require('zod')
const UserSchema = require('./UserSchema')

const RecoverPasswordLogSchema = z.object({
  id: z.number().int(),
  createdAt: z.date().optional(),
  password: z.string(),
  user: UserSchema,
  userId: z.number().int(),
})

module.exports = RecoverPasswordLogSchema
