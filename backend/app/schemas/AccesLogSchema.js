const { z } = require('zod')
const UserSchema = require('./UserSchema')

const AccesLogSchema = z.object({
  id: z.number().int(),
  login: z.date(),
  logout: z.date(),
  user: UserSchema,
  userId: z.number().int(),
})

module.exports = AccesLogSchema
