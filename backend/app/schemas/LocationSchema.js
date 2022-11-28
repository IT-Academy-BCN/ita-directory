const { z } = require('zod')

const LocationSchema = z.object({
  name: z.string(),
})

module.exports = LocationSchema
