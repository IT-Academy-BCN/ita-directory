const { z } = require('zod')
const UserSchema = require('./UserSchema')
const ConversationSchema = require('./ConversationSchema')

const MessageSchema = z.object({
  id: z.number().int(),
  sender: UserSchema,
  senderId: z.number().int(),
  conversation: ConversationSchema,
  conversationId: z.number().int(),
  text: z.string(),
  createdAt: z.date().optional(),
})

module.exports = MessageSchema
