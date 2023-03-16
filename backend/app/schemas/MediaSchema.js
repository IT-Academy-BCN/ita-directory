const { z } = require('zod')
const UserSchema = require('./UserSchema')
const AdsSchema = require('./AdsSchema')
const MediaMetaSchema = require('./MediaMetaSchema')

const MediaSchema = z.object({
  id: z.number().int(),
  path: z.string(),
  mimeType: z.string(),
  fileSize: z.string(),
  user: UserSchema,
  userId: z.number().int(),
  avatar: UserSchema.nullish(),
  ad: AdsSchema.nullish(),
  adId: z.number().int().nullish(),
  MediaMeta: MediaMetaSchema.array(),
})

module.exports = MediaSchema
