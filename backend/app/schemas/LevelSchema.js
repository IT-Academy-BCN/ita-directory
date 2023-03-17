const { z } = require('zod')
const LevelTypeSchema = require('./LevelTypeSchema')

const LevelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  parent: z.lazy(() => LevelSchema).optional(),
  parentId: z.number().int().nullish(),
  child: z.lazy(() => LevelSchema).array(),
  levelType: LevelTypeSchema,
  levelTypeId: z.number().int(),
})

module.exports = LevelSchema
