const JWT = require('jsonwebtoken')
const argon2 = require('argon2')
const client = require('../utils/initRedis')
const { transporter, mailOptions } = require('../utils/transporterEmail')
const {
  apiResponse,
  signToken,
  signRefreshToken,
  hashPassword,
  decodeHash,
} = require('../utils/utils')
const prisma = require('../../prisma/indexPrisma')

// Refresh token
exports.getRefreshToken = (req, res, next) => {
  const refreshToken = req.headers.refresh
  if (!refreshToken) {
    next({
      code: 'error',
      message: 'refresh token missing',
      statusCode: 400,
    })
  } else {
    JWT.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { ignoreExpiration: true },
      async (err, payload) => {
        if (err) res.sendStatus(401)
        else {
          const hashedId = payload.sub.userId
          const dehashedId = decodeHash(hashedId)
          const userId = dehashedId[0]
          const result = await client.get(userId.toString())
          if (refreshToken !== result) {
            const counterKey = `C${userId}`
            await client.incr(counterKey)
            res.status(401).json(
              apiResponse({
                message: 'Refresh token does not match',
              })
            )
          } else {
            const accessToken = signToken(userId)
            res.status(200).json(
              apiResponse({
                data: { accessToken },
              })
            )
          }
        }
      }
    )
  }
}

// Get token //! This could be deleted. Not in use.
exports.getToken = async (req, res) => {
  const idUser = '100001'
  const accessToken = signToken(idUser)
  const refreshToken = await signRefreshToken(idUser)
  return res.status(200).json(
    apiResponse({
      message: 'Your token',
      data: { accessToken, refreshToken },
    })
  )
}

// Get User (/v1/get-me endPoint)
exports.getUser = async (req, res, next) => {
  // Check that the request isn't empty
  if (!req.userId) {
    next({
      code: 'error',
      message: 'Request is empty.',
      statusCode: 400,
    })
  } else {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.userId, 10) },
      include: { avatar: true },
    })
    if (user === null) {
      next({
        code: 'error',
        success: 'false',
        message: 'user not found',
        statusCode: 204,
      })
    } else {
      delete user.password
      res.status(200).json({
        ...user,
      })
    }
  }
}

// User signup
exports.registerUser = async (req, res, next) => {
  const { name, lastnames, email, password } = req.body

  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/

  if (!regex.test(password)) {
    return next({
      code: 'error',
      header: 'Invalid password',
      message: 'This password does not meet the requirements.',
      statusCode: 400,
    })
  }

  // Checking if valid email, password and privacy policy.
  const doesExist = await prisma.user.findUnique({ where: { email } })

  if (doesExist !== null) {
    return next({
      code: 'error',
      header: 'Invalid email',
      message: 'This email has already been registered.',
      statusCode: 400,
    })
  }

  // Creating user without name or lastnames
  const passwordHashed = await hashPassword(req.body.password)
  await prisma.user.create({
    data: {
      name,
      lastnames,
      email,
      password: passwordHashed,
      userStatusId: 1,
      userRoleId: 3,
    },
  })
  return res.status(200).json(
    apiResponse({
      message: 'User registered correctly.',
    })
  )
}

// get all users
exports.getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      lastnames: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      userStatusId: true,
      userRoleId: true,
      avatar: {
        select: {
          path: true,
        },
      },
    },
  })
  return res.status(200).json(users)
}

// Login
exports.login = async (req, res, next) => {
  const { body = {} } = req
  // Check that the request isn't empty
  if (!body.email || !body.password) {
    const message = 'Content can not be empty!'
    return next({
      code: 'error',
      message,
      statusCode: 400,
    })
  }

  const USER = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (!USER) {
    return next({
      code: 'error',
      header: "User doesn't exist",
      message: "There's no user with that email, please try again or get in touch.",
      statusCode: 400,
    })
  }

  try {
    const value = await argon2.verify(USER.password, body.password)
    if (value === false) {
      return next({
        code: 'error',
        header: 'Wrong password',
        message:
          'The password you introduced is incorrect, please try again or try to recover your password.',
        statusCode: 400,
      })
    }
  } catch (error) {
    return next({
      code: 'error',
      header: 'Verify passwords failed',
      message: 'The verify function from argon2 fails. Check arguments',
      statusCode: 400,
    })
  }

  const token = signToken(USER.id)
  const refreshToken = await signRefreshToken(USER.id)

  return res.status(200).json({
    code: 'success',
    header: 'Welcome back',
    message: 'We are redirecting you to your account.',
    token,
    refreshToken,
  })
}

// Update user //TODO Improve error handling
exports.updateUser = async (req, res) => {
  const { email, name, lastnames, password, userRoleId, userStatusId, avatarId } = req.body
  const { userId } = req

  // @todo: req.body fields should be validated using joi
  if (!userId || !req.body) {
    return res.status(400).json({ message: `Enter correct values!, please` })
  }
  try {
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        lastnames,
        email,
        password,
        userRoleId,
        userStatusId,
        avatarId,
      },
    })
    return res.status(200).json({
      updateUser,
      message: `Data user updated successfully`,
    })
  } catch (err) {
    return res.status(500).json({ message: `Error updating user ${userId}` })
  }
}

// Delete user
exports.deleteUser = async (req, res) => {
  const { email } = req.body

  if (!email) return res.status(404).json({ message: 'Enter correct email!' })

  const deleteUser = await prisma.user.delete({
    where: { email },
  })
  return res.status(200).json({ user: deleteUser, msg: `User successfully deleted` })
}

// Update user avatar
// TODO: updateAvatar //////////////////////////////////////////
// eslint-disable-next-line no-unused-vars
exports.updateAvatar = async (req, res, next) => {
  /* const userId = { req }
  try {
    const { avatar } = req.body

    const { file } = req
    if (!file) {
      const err = new Error("S'ha de pujar una imatge")
      return res.status(400).send({ error: err.message })
    }
    console.log('Imatge pujada correctament')
    return res.send(file)
  } catch (err) {
    console.error(err)
    return false
  } */
}

exports.receiveEmailGetToken = async (req, res) => {
  const { email } = req.body
  const user = await prisma.user.findUnique({ where: { email } })

  // Will store the password at password_recovery_log, then this log will be use to forbid the user from using old passwords.
  // !This might not be the best place to call it.
  await prisma.recover_password_log.create({
    data: {
      password: user.password,
      userId: user.id,
    },
  })

  if (!user) {
    return res.status(404).json(
      apiResponse({
        code: 'error',
        message: 'Email not found',
      })
    )
  }
  const accessToken = signToken(user.id, '1h')
  mailOptions.to = email
  mailOptions.html = `${process.env.REACT_APP_URL}/change-password/${accessToken}`

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).json(error.message)
    } else {
      res.status(200).json({
        // id: info.messageId,
        msg: 'Email sent',
      })
    }
  })
  return res.sendStatus(204)
}

exports.changePassword = async (req, res, next) => {
  const { password1, password2 } = req.body
  const { token } = req.params
  const regex = new RegExp(process.env.PASSWORD_REGEX)

  if (password1 !== password2) {
    return res.status(200).json(
      apiResponse({
        code: 'error',
        message: 'The password does not match',
      })
    )
  }

  if (!regex.test(password1)) {
    return next({
      code: 'error',
      header: 'Invalid password',
      message: 'This password does not meet the requirements.',
      statusCode: 400,
    })
  }

  // Will test if provided password has already been used, if so, returns true.
  const isRepeatedPassword = async (userId, password) => {
    const pwLog = await prisma.recoverPasswordLog.findMany({ where: { userId } })
    const promiseArray = pwLog.map((log) => argon2.verify(log.password, password))
    const repeatedPass = await Promise.all(promiseArray)
    return repeatedPass.includes(true)
  }

  // @todo: This verification should be implemented using middleware
  // eslint-disable-next-line consistent-return
  JWT.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(200).json({
        code: 'error',
        message: 'Something is wrong with the token',
      })
    }

    const decodedId = decodeHash(decoded.sub.userId)
    if (await isRepeatedPassword(decodedId[0], password1)) {
      return res.status(200).json({
        code: 'error',
        message: "Can't repeat passwords",
      })
    }

    const hashedPassword = await hashPassword(password1)
    await prisma.user.update({
      where: {
        id: decodedId[0],
      },
      data: {
        password: hashedPassword,
      },
    })
  })

  return res.status(200).json(
    apiResponse({
      message: 'Your password has been successfully changed.',
    })
  )
}
