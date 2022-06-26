const { z } = require('zod')

const ConversationSchema = z.object({
  id: z.number().int().optional(),
})

module.exports = ConversationSchema
