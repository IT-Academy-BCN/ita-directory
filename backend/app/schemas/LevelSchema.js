const { z } = require('zod')
const LevelTypeSchema = require('./LevelTypeSchema')

const LevelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  parent: z.lazy(() => LevelSchema).nullish(),
  parentId: z.number().int().nullish(),
  child: z.array(z.lazy(() => LevelSchema)),
  levelType: LevelTypeSchema,
  levelTypeId: z.number().int(),
})

module.exports = LevelSchema
