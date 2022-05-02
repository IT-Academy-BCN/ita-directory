const router = require('express').Router()
const chatController = require('../controllers/chat.controller')

/* 
getConversations: get user conversations
getConversation: get user conversation by id
getMessages: get user conversation messages by userId and conversationId
postConversation: create new conversation between 2 users
 */

router.get('/v1/conversations', chatController.getConversations)

router.get('/v1/conversation/:id', chatController.getConversation)

router.get('/v1/messages', chatController.getMessages)

router.post('/v1/conversation/:user1_id/:user2_id', chatController.createConversation)

module.exports = router
