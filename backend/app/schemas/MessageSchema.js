const { z } = require('zod')

const MessageSchema = z.object({
  id: z.number().int(),
  senderId: z.number().int(),
  conversationId: z.number().int(),
  text: z.string(),
  createdAt: z.date().optional(),
})

module.exports = MessageSchema
