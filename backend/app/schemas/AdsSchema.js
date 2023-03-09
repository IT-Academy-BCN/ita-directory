const { z } = require('zod')
const { registry } = require('../utils/openApiRegistry')

// TODO tambien hay opción `registry.register`, pero creo `registerParameter` crea referencia para poder recuperar y usar en docu de requests luego. Si no funciona, probar con `registry.register` a secas

const AdsSchema = registry
  .registerParameter(
    'Ads',
    z.object({
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
    })
  )

  // We can use `AdsSchema.openapi()` to specify metadata
  .openapi({ description: 'Example description for the AdsSchema' })

module.exports = AdsSchema
