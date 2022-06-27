const { z } = require('zod')

const UserConversationSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  conversationId: z.number().int(),
})

module.exports = UserConversationSchema
