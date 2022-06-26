const { z } = require('zod')

const AdTypeSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  house: z.number().int(),
  room: z.number().int(),
  garage: z.number().int(),
  storage: z.number().int(),
  office: z.number().int(),
  warehouse: z.number().int(),
  building: z.number().int(),
  newBuilding: z.number().int(),
})

module.exports = AdTypeSchema
