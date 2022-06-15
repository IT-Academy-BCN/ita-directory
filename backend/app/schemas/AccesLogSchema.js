const { z } = require('zod')

const AccesLogSchema = z.object({
  id: z.number().int().optional(),
  login: z.date(),
  logout: z.date(),
  userId: z.number().int(),
})

export default AccesLogSchema
