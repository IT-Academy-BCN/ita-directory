const { z } = require('zod')

const MediaTypeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  thumnail: z.boolean(),
  medium: z.boolean(),
  large: z.boolean(),
  original: z.boolean(),
})

module.exports = MediaTypeSchema
