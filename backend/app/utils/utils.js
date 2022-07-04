const JWT = require('jsonwebtoken')
const Hashids = require('hashids')
const argon2 = require('argon2')
const client = require('./initRedis')
const logger = require('../../logger')

const hashIds = new Hashids(process.env.HASH_ID_SECRET, 10)

const apiResponse = ({ message = '', data = {}, errors = [], status }) => {
  if (status >= 500) {
    logger.error(message)
  } else if (status > 400 && status < 500) {
    logger.warn(message)
  } else {
    logger.info(message)
  }
  return { message, data, errors }
}

const signToken = (userid, maxAge = '15m') => {
  const hashedId = hashIds.encode(userid)
  const payload = { iss: 'itacademy', sub: { userId: hashedId } }
  const secret = process.env.JWT_SECRET
  const options = { expiresIn: maxAge }
  return JWT.sign(payload, secret, options)
}

// maxAge = "1d" => 86400 must be a number for Redis expiration time
const signRefreshToken = async (userId, maxAge = 86400) => {
  try {
    const hashedId = hashIds.encode(userId)
    const payload = { iss: 'itacademy', sub: { userId: hashedId } }
    const secret = process.env.JWT_REFRESH_TOKEN_SECRET
    const options = { expiresIn: maxAge }
    const token = JWT.sign(payload, secret, options)

    await client.SET(userId.toString(), token, { EX: maxAge })
    return token
  } catch (err) {
    logger.error(err)
    throw new Error(err)
  }
}

const hashPassword = async (password) =>
  argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 15360,
    timeCost: 2,
    parallelism: 1,
  })

const decodeHash = (id) => hashIds.decode(id)

const tokenUser = (token) =>
  JWT.verify(token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      return false
    }
    const hashedId = authData.sub.userId
    const dehashedId = decodeHash(hashedId)
    const userId = dehashedId[0]
    return userId
  })

// Check password format and hash it if correct
const checkAndHashPass = async (pass) => {
  const regex = new RegExp(process.env.PASSWORD_REGEX)
  return regex.test(pass) ? hashPassword(pass) : null
}

module.exports = {
  apiResponse,
  signToken,
  signRefreshToken,
  hashPassword,
  decodeHash,
  tokenUser,
  checkAndHashPass,
}
