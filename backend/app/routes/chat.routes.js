const router = require('express').Router()
const chatController = require('../controllers/chat.controller')

// TODO document routes!!!

router.get('/v1/conversations', chatController.getConversations)

router.get('/v1/conversation/:id', chatController.getConversationById)

router.get('/v1/messages', chatController.getMessages)

router.post('/v1/conversation', chatController.createConversation)

module.exports = router
