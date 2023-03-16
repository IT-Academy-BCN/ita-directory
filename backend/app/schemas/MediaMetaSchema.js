const { z } = require('zod')
const MediaSchema = require('./MediaSchema')
const MediaTypeSchema = require('./MediaTypeSchema')

const MediaMetaSchema = z.object({
  id: z.number().int(),
  path: z.string(),
  mimeType: z.string(),
  fileSize: z.string(),
  media: MediaSchema,
  mediaId: z.number().int(),
  mediaType: MediaTypeSchema,
  mediaTypeId: z.number().int(),
})

module.exports = MediaMetaSchema
