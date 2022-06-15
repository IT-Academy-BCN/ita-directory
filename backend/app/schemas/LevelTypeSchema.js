const { z } = require('zod')

const LevelTypeSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  country: z.number().int(),
  state: z.number().int(),
  city: z.number().int(),
  town: z.number().int(),
  district: z.number().int(),
  neighborhood: z.number().int(),
})

export default LevelTypeSchema
