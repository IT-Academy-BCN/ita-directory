const { z } = require('zod')
const AdsSchema = require('./AdsSchema')

const AdStatusSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  unPublish: z.number().int(),
  publish: z.number().int(),
  ads: AdsSchema.array(),
})

module.exports = AdStatusSchema
