const { z } = require('zod')
const MessageSchema = require('./MessageSchema')
const UserConversationSchema = require('./UserConversationSchema')

const ConversationSchema = z.object({
  id: z.number().int(),
  messages: MessageSchema.array(),
  participants: UserConversationSchema.array(),
})

module.exports = ConversationSchema
