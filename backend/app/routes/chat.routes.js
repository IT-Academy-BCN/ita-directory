const router = require('express').Router()
const chatController = require('../controllers/chat.controller')
const validate = require('../middleware/zodValidation')
const ConversationSchema = require('../schemas/ConversationSchema')

/**
 * POST /chat/conversations
 * @summary Create new conversation
 * @tags Chat
 * @param {integer} request.userId.required - The user logged
 * @param {integer} request.body.user.required - The user to talk with
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.post('/chat/conversations', validate(ConversationSchema), chatController.createConversation)

/**
 * GET /chat/conversations
 * @summary Gets all conversations from the database for the actual user
 * @tags Chat
 * @param {integer} request.userId.required - The user logged
 * @return {object} 200 - Success response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.get('/chat/conversations', chatController.getConversations)

/**
 * GET /chat/conversations/{id}
 * @summary Gets all conversations from the database for the actual user
 * @tags Chat
 * @param {integer} request.params.id.required - The conversation id
 * @param {integer} request.userId.required - The user logged
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad Request response - application/json
 * @return {object} 404 - Not Found response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.get(
  '/chat/conversations/:userId/:id',
  validate(ConversationSchema),
  chatController.getConversationById
)

/**
 * GET /chat/messages
 * @summary Gets all messages from the database for the conversation
 * @tags Chat
 * @param {integer} request.body.conversation.required - The conversation id
 * @param {integer} request.userId.required - The user logged
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad Request response - application/json
 * @return {object} 404 - Not Found response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.get('/chat/messages', chatController.getMessages)

module.exports = router
