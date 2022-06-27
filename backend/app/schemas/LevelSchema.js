const { z } = require('zod')

const LevelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  parentId: z.number().int().nullish(),
  levelTypeId: z.number().int(),
})

module.exports = LevelSchema
