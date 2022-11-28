const prisma = require('../../prisma/indexPrisma')
const logger = require('../../logger')
const { apiResponse, tokenUser } = require('../utils/utils')
const client = require('../utils/initRedis')
const validate = require('../middleware/zodValidation')
const MessageSchema = require('../schemas/MessageSchema')

async function createConversation(req, res) {
  try {
    const { userId } = req
    const user1Id = userId
    const { user } = req.body
    const user2Id = user

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
  // try {
  const { userId } = req

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
  // } catch (err) {
  //   res.status(500).json(
  //     apiResponse({
  //       message: 'An error occurred with your query.',
  //       errors: [err.message],
  //       status: 500,
  //     })
  //   )
  // }
}

async function getConversationById(req, res) {
  try {
    const { userId } = req
    const conversationId = parseInt(req.params.id, 10)

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

async function chatSocket(io, socket) {
  const token = socket.handshake.headers.authorization.replace('Bearer ', '').trim()
  const validUser = tokenUser(token)
  if (!validUser) {
    logger.warn('No valid socket token. Disconnecting.')
    socket.disconnect()
    return
  }
  logger.info(`user ${validUser} connected`)

  try {
    await client.SADD('online_users', validUser.toString())
    const result = await client.SMEMBERS('online_users')
    // console.log('online_users:', result)
    const users = result.map((x) => parseInt(x, 10))
    socket.emit('online_users', users)
  } catch (err) {
    logger.error(err)
  }

  socket.on('choose_conversation', (conversationId) => {
    logger.info(`choose_conversation, ${conversationId}`)
    socket.join(conversationId)
  })

  socket.on('is_typing', (conversationId) => {
    logger.info(`user ${validUser} is typing on ${conversationId}`)
    io.to(conversationId).emit('is_typing_response', `user ${validUser} typing`)
  })

  socket.on('is_not_typing', (conversationId) => {
    logger.info(`user ${validUser} stop typing on ${conversationId}`)
    io.to(conversationId).emit('is_not_typing_response', `user ${validUser} stop typing`)
  })

  // middleware socket validation
  socket.use((next) => {
    validate(MessageSchema.pick({ text: true }))
    next()
  })

  socket.on('new_message', async (message) => {
    try {
      await prisma.message.create({
        data: {
          conversation: {
            connect: {
              id: message.conversationId,
            },
          },
          sender: {
            connect: {
              id: message.senderId,
            },
          },
          text: message.text,
        },
      })
      io.to(message.conversationId).emit('new_message_response', { success: true, data: message })
      logger.info('Message created successfully')
    } catch (err) {
      logger.error('Cannot save message')
      io.to(message.conversationId).emit('new_message_response', { success: false })
    }
  })

  socket.on('disconnect', async () => {
    try {
      await client.SREM('online_users', validUser.toString())
      const result = await client.SMEMBERS('online_users')
      // console.log('online_users:', result)
      const users = result.map((x) => parseInt(x, 10))
      io.emit('online_users', users)
    } catch (err) {
      logger.error(err)
    }
  })
}

module.exports = {
  getConversations,
  getConversationById,
  getMessages,
  createConversation,
  chatSocket,
}
