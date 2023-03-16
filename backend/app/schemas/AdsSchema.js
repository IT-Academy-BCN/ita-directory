const { z } = require('zod')
const UserSchema = require('./UserSchema')
const AdTypeSchema = require('./AdTypeSchema')
const AdStatusSchema = require('./AdStatusSchema')
const MediaSchema = require('./MediaSchema')

const AdsSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
  userId: z.number().int(),
  title: z.string(),
  description: z.string(),
  nRooms: z.number().int(),
  price: z.number().int(),
  includedExpenses: z.boolean().optional(),
  squareMeters: z.number().int(),
  nBathrooms: z.number().int(),
  city: z.string(),
  mapLat: z.number(),
  mapLon: z.number(),
  adType: AdTypeSchema,
  adTypeId: z.number().int(),
  adStatus: AdStatusSchema,
  adStatusId: z.number().int(),
  createdAt: z.date().optional(),
  updatedAt: z.date(),
  media: MediaSchema.array(),
})

module.exports = AdsSchema
