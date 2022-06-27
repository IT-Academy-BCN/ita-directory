const { z } = require('zod')

const MediaSchema = z.object({
  id: z.number().int(),
  path: z.string(),
  mimeType: z.string(),
  fileSize: z.string(),
  userId: z.number().int(),
})

module.exports = MediaSchema
