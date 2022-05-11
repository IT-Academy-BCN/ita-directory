const prisma = require('../../prisma/indexPrisma')
const logger = require('../../logger')
const { apiResponse, tokenUser } = require('../utils/utils')
const {
  conversationUsersSchema,
  conversationSchema,
  conversationUserSchema,
} = require('../utils/schemaValidation')

async function createConversation(req, res) {
  try {
    const { userId } = req
    const user1Id = userId
    const { user } = req.body
    const user2Id = user

    await conversationUsersSchema.validateAsync({ user1Id, user2Id })

    if (user1Id === user2Id) {
      // We want not to talk to ourself
      return res.status(400).json(
        apiResponse({
          message: 'Bad request.',
          errors: ['Bad request.'],
          status: 400,
        })
      )
    }
    // Assure the conversation does not exists
    const userConversations = await prisma.user_conversation.findMany({
      where: {
        user_id: {
          in: [user1Id, user2Id],
        },
      },
    })
    const conversationFound = userConversations.find((x) => {
      const found = userConversations.find(
        (y) => y.user_id !== x.user_id && y.conversation_id === x.conversation_id
      )
      return found !== undefined
    })
    if (!conversationFound) {
      // Insert conversation and user_conversations
      const conversation = await prisma.conversation.create({
        data: {
          participants: {
            create: [{ user_id: user1Id }, { user_id: user2Id }],
          },
        },
      })
      return res.status(200).json(
        apiResponse({
          message: 'Conversation created successfully.',
          data: { conversation },
          status: 200,
        })
      )
    }
    return res.status(409).json(
      apiResponse({
        message: 'This conversation already exists.',
        errors: ['This conversation already exists.'],
        status: 409,
      })
    )
  } catch (err) {
    if (err.isJoi && err.name === 'ValidationError') {
      res.status(400).json(
        apiResponse({
          message: 'At least one of the required values is not defined.',
          errors: [err.message],
          status: 400,
        })
      )
    }
    return res.status(500).json(
      apiResponse({
        message: 'An error occurred while creating conversation',
        errors: [err.message],
        status: 500,
      })
    )
  }
}

async function getConversations(req, res) {
  try {
    const { userId } = req
    await conversationUserSchema.validateAsync({ userId })

    const conversations = await prisma.conversation.findMany({
      select: {
        id: true,
      },
      // distinct: ['id'],
      where: {
        participants: {
          some: {
            user_id: userId,
          },
        },
      },
    })
    res.status(200).json(
      apiResponse({
        message: 'Data fetched correctly.',
        data: { conversations },
        status: 200,
      })
    )
  } catch (err) {
    res.status(500).json(
      apiResponse({
        message: 'An error occurred with your query.',
        errors: [err.message],
        status: 500,
      })
    )
  }
}

async function getConversationById(req, res) {
  try {
    const { userId } = req
    const conversationId = parseInt(req.params.id, 10)
    await conversationSchema.validateAsync({ userId, conversationId })

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        participants: {
          select: {
            user_id: true,
          },
        },
      },
    })

    if (!conversation) {
      res.status(404).json(
        apiResponse({
          message: 'This conversation does not exist.',
          status: 404,
          errors: ['This conversation does not exist.'],
        })
      )
    } else {
      const itsMyConversation =
        userId === conversation.participants[0].user_id ||
        userId === conversation.participants[1].user_id
      if (!itsMyConversation) {
        res.status(400).json(
          apiResponse({
            message: 'This conversation is not yours',
            errors: ['This conversation is not yours'],
            status: 400,
          })
        )
      } else {
        res.status(200).json({
          message: 'Conversation fetched correctly.',
          data: { conversation },
          status: 200,
        })
      }
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(
        apiResponse({
          message: 'conversationId param must be an integer.',
          errors: [err.message],
          status: 400,
        })
      )
    } else {
      res.status(500).json(
        apiResponse({
          message: 'Something wrong occurred with your query.',
          errors: [err.message],
          status: 500,
        })
      )
    }
  }
}

async function getMessages(req, res) {
  try {
    const { userId } = req
    const conversationId = req.body.conversation
    await conversationSchema.validateAsync({ userId, conversationId })

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        participants: {
          select: {
            user_id: true,
          },
        },
      },
    })
    if (!conversation) {
      res.status(404).json(
        apiResponse({
          message: 'This conversation does not exist.',
          status: 404,
          errors: ['This conversation does not exist.'],
        })
      )
    } else {
      const itsMyConversation =
        userId === conversation.participants[0].user_id ||
        userId === conversation.participants[1].user_id
      if (!itsMyConversation) {
        res.status(400).json(
          apiResponse({
            message: 'This conversation is not yours',
            errors: ['This conversation is not yours'],
            status: 400,
          })
        )
      } else {
        const convWithMessages = await prisma.conversation.findUnique({
          where: {
            id: conversation,
          },
          include: {
            messages: true,
          },
        })
        const { messages } = convWithMessages
        res.status(200).json(
          apiResponse({
            message: 'Data fetched correctly.',
            data: { messages },
            status: 200,
          })
        )
      }
    }
  } catch (err) {
    res.status(500).json(
      apiResponse({
        message: 'An error occurred with your query.',
        errors: [err.message],
        status: 500,
      })
    )
  }
}

function chatSocket(socket) {
  const token = socket.handshake.query['x-token']
  const validUser = tokenUser(token)
  if (!validUser) {
    logger.warn('No valid socket token. Disconnecting.')
    socket.disconnect()
  }

  // recoger las conversaciones donde esta el user
  // guardar el estado en redis!

  socket.on('online_users', () => {
    socket.emit('online_users_response')
  })

  socket.on('chooseConversation', () => {
    // join
  })

  socket.on('isTyping', (data) => {
    logger.info(`user ${validUser} is typing on ${data.conversationId}`)
    socket.to(data.conversationId).emit('isTypingResponse')
  })
  socket.on('isNotTyping', () => {
    socket.to().emit('isNotTypingResponse')
  })

  socket.on('newMessage', async (message) => {
    try {
      // await messageSchema.validateAsync(message)

      await prisma.message.create(message)
      socket.to().emit('newMessageResponse', { success: true, data: message })
    } catch (err) {
      socket.to().emit('newMessageResponse', { success: false })
    }
  })

  socket.on('disconnect', () => {
    // socket.to().emit('offline')
  })
}

module.exports = {
  getConversations,
  getConversationById,
  getMessages,
  createConversation,
  chatSocket,
}
