const { z } = require('zod')

const ConversationSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
})

module.exports = ConversationSchema
