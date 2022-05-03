const prisma = require('../../prisma/indexPrisma')
const { apiResponse } = require('../utils/utils')

async function createConversation(req, res) {
  try {
    const { userId } = req
    const user1Id = userId
    const { user } = req.body
    const user2Id = user

    /* await adsSchema.validateAsync(fields) // TODO */

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
    } else if (err && err.code === 'P2003') {
      res.status(422).json(
        apiResponse({
          message: 'This value for user_id does not exist in conversation table.',
          errors: [err.message],
          status: 422,
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
    const conversationId = parseInt(req.params.id, 10)

    // Validates if integer.
    // await AdByIdParamSchema.validateAsync(adId) // TODO

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
      res.status(200).json({
        message: 'Conversation fetched correctly.',
        data: { conversation },
        status: 200,
      })
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
    const { conversation } = req.body
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

module.exports = {
  getConversations,
  getConversationById,
  getMessages,
  createConversation,
}
