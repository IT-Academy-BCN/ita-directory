const { z } = require('zod')

const AdsSchema = z.object({
  id: z.number().int(),
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
  adTypeId: z.number().int(),
  adStatusId: z.number().int(),
  createdAt: z.date().optional(),
  updatedAt: z.date(),
  media: z
    .array(
      z.object({
        id: z.number().int(),
        path: z.string(),
        mimeType: z.string(),
        fileSize: z.string(),
        userId: z.number().int(),
        adId: z.number().int().optional(),
      })
    )
    .optional(),
})

module.exports = AdsSchema
