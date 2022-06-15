const { z } = require('zod')

const LevelSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  parentId: z.number().int().nullish(),
  levelTypeId: z.number().int(),
})

export default LevelSchema
