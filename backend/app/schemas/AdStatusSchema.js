const { z } = require('zod')

const AdStatusSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  unPublish: z.number().int(),
  publish: z.number().int(),
})

module.exports = AdStatusSchema
