const { z } = require('zod')

const MediaMetaSchema = z.object({
  id: z.number().int(),
  path: z.string(),
  mimeType: z.string(),
  fileSize: z.string(),
  mediaId: z.number().int(),
  mediaTypeId: z.number().int(),
})

module.exports = MediaMetaSchema
