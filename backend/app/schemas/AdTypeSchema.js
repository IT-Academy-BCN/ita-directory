const { z } = require('zod')
const AdsSchema = require('./AdsSchema')

const AdTypeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  house: z.number().int(),
  room: z.number().int(),
  garage: z.number().int(),
  storage: z.number().int(),
  office: z.number().int(),
  warehouse: z.number().int(),
  building: z.number().int(),
  newBuilding: z.number().int(),
  ads: AdsSchema.array(),
})

module.exports = AdTypeSchema
