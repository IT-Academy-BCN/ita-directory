const Joi = require('joi')

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  text: Joi.string().required(),
})

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

const getRegionByLocationSchema = Joi.string().required()

const getAdsByTypeSchema = Joi.string().required()

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
const messageSchema = Joi.object({
  senderId: Joi.number().required(),
  conversationId: Joi.number().required(),
  text: Joi.string().required(),
})

module.exports = {
  contactSchema,
  registerSchema,
  adsSchema,
  AdByIdParamSchema,
  getRegionByLocationSchema,
  getAdsByTypeSchema,
  patchAdSchema,
  conversationUsersSchema,
  conversationUserSchema,
  conversationSchema,
  messageSchema,
}
