const router = require('express').Router()
const chatController = require('../controllers/chat.controller')
const { wrapAsync } = require('../middleware/handlerErrors')

/**
 * POST /chat/v1/conversation
 * @summary Create new conversation
 * @tags Conversation
 * @param {integer} request.userId.required - The user logged
 * @param {integer} request.body.user.required - The user to talk with
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.post('/v1/conversation', chatController.createConversation)

/**
 * GET /chat/v1/conversations
 * @summary Gets all conversations from the database for the actual user
 * @tags Conversation
 * @param {integer} request.userId.required - The user logged
 * @return {object} 200 - Success response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.get('/v1/conversations', wrapAsync(chatController.getConversations))

/**
 * GET /chat/v1/conversation/:id
 * @summary Gets all conversations from the database for the actual user
 * @tags Conversation
 * @param {integer} request.params.id.required - The conversation id
 * @param {integer} request.userId.required - The user logged
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad Request response - application/json
 * @return {object} 404 - Not Found response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.get('/v1/conversation/:id', chatController.getConversationById)

/**
 * GET /chat/v1/messages
 * @summary Gets all messages from the database for the conversation
 * @tags Messages
 * @param {integer} request.body.conversation.required - The conversation id
 * @param {integer} request.userId.required - The user logged
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad Request response - application/json
 * @return {object} 404 - Not Found response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.get('/v1/messages', chatController.getMessages)

module.exports = router
