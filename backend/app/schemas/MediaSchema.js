const { z } = require('zod')

const MediaSchema = z.object({
  id: z.number().int().optional(),
  path: z.string(),
  mimeType: z.string(),
  fileSize: z.string(),
  userId: z.number().int(),
})

module.exports = MediaSchema
