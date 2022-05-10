const Joi = require('joi')
const JWT = require('jsonwebtoken')
const Hashids = require('hashids')
const argon2 = require('argon2')
const client = require('./initRedis')
const prisma = require('../../prisma/indexPrisma')
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

const AdByIdParamSchema = Joi.number().integer().required()

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(2).required(),
  privacy: Joi.boolean().valid(true).required(),
})

const adsSchema = Joi.object({
  user_id: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  city: Joi.string().required(),
  n_rooms: Joi.number().required(),
  price: Joi.number().required(),
  square_meters: Joi.number().required(),
  n_bathrooms: Joi.number().required(),
  map_lat: Joi.number().required(),
  map_lon: Joi.number().required(),
  ad_type_id: Joi.number().required(),
})

const patchAdSchema = Joi.object({
  adId: Joi.number().integer().required(),
  title: Joi.string(),
  description: Joi.string(),
  city: Joi.string(),
  n_rooms: Joi.number(),
  price: Joi.number(),
  square_meters: Joi.number(),
  n_bathrooms: Joi.number(),
  map_lat: Joi.number(),
  map_lon: Joi.number(),
  ad_type_id: Joi.number(),
})

const signToken = (userid, maxAge = '15m') => {
  const hashedId = hashIds.encode(userid)
  const payload = { iss: 'itacademy', sub: { user_id: hashedId } }
  const secret = process.env.JWT_SECRET
  const options = { expiresIn: maxAge }
  return JWT.sign(payload, secret, options)
}

// maxAge = "1d" => 86400 must be a number for Redis expiration time
const signRefreshToken = (userId, maxAge = 86400) => {
  const hashedId = hashIds.encode(userId)
  const payload = { iss: 'itacademy', sub: { user_id: hashedId } }
  const secret = process.env.JWT_REFRESH_TOKEN_SECRET
  const options = { expiresIn: maxAge }
  const token = JWT.sign(payload, secret, options)

  client.set(userId.toString(), token, { EX: maxAge })
  return token
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
    const hashedId = authData.sub.user_id
    const dehashedId = decodeHash(hashedId)
    const userId = dehashedId[0]
    return userId
  })

const getRegionByLocationSchema = Joi.string().required()

const getAdsByTypeSchema = Joi.string().required()

// Will test if provided password has already been used, if so, returns true.
const isRepeatedPassword = async (userId, password) => {
  const pwLog = await prisma.recover_password_log.findMany({ where: { user_id: userId } })

  const promiseArray = pwLog.map((log) => argon2.verify(log.password, password))

  const repeatedPass = await Promise.all(promiseArray)

  return repeatedPass.includes(true)
}

const conversationUsersSchema = Joi.object({
  user1Id: Joi.number().required(),
  user2Id: Joi.number().required(),
})
const conversationUserSchema = Joi.object({
  userId: Joi.number().required(),
})
const conversationSchema = Joi.object({
  userId: Joi.number().required(),
  conversationId: Joi.number().required(),
})

module.exports = {
  // generateBlob,
  apiResponse,
  registerSchema,
  adsSchema,
  AdByIdParamSchema,
  signToken,
  signRefreshToken,
  hashPassword,
  decodeHash,
  tokenUser,
  getRegionByLocationSchema,
  getAdsByTypeSchema,
  patchAdSchema,
  isRepeatedPassword,
  conversationUsersSchema,
  conversationUserSchema,
  conversationSchema,
}
