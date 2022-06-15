const { z } = require('zod')

const AdStatusSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  unPublish: z.number().int(),
  publish: z.number().int(),
})

export default AdStatusSchema
