const { z } = require('zod')
const UserSchema = require('./UserSchema')
const ConversationSchema = require('./ConversationSchema')

const UserConversationSchema = z.object({
  id: z.number().int(),
  user: UserSchema,
  userId: z.number().int(),
  conversation: ConversationSchema,
  conversationId: z.number().int(),
})

module.exports = UserConversationSchema
