const { z } = require('zod')

const AccesLogSchema = z.object({
  id: z.number().int(),
  login: z.date(),
  logout: z.date(),
  userId: z.number().int(),
})

module.exports = AccesLogSchema
