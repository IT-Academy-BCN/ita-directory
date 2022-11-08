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
  userId: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  city: Joi.string().required(),
  nRooms: Joi.number().required(),
  price: Joi.number().required(),
  squareMeters: Joi.number().required(),
  nBathrooms: Joi.number().required(),
  mapLat: Joi.number().required(),
  mapLon: Joi.number().required(),
  adTypeId: Joi.number().required(),
})

const patchAdSchema = Joi.object({
  adId: Joi.number().integer().required(),
  title: Joi.string(),
  description: Joi.string(),
  city: Joi.string(),
  nRooms: Joi.number(),
  price: Joi.number(),
  squareMeters: Joi.number(),
  nBathrooms: Joi.number(),
  mapLat: Joi.number(),
  mapLon: Joi.number(),
  adTypeId: Joi.number(),
})

const getRegionByLocationSchema = Joi.string().required()

const getAdsByTypeSchema = Joi.string().required()

const getUserAdsSchema = Joi.number().required()

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

const logSchema = Joi.object().keys({
  msg: Joi.string().required(),
  level: Joi.string().valid('trace', 'debug', 'info', 'warn', 'error', 'fatal'),
})

const invoicesSchema = Joi.object({
  user_id: Joi.number().required(),
  billingaddress: Joi.string().required(),
  postalCode: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  vatId: Joi.string().required(),
  vatAmount: Joi.number().required(),
  secondTax: Joi.number().required(),
})

const getUserInvoicesSchema = Joi.object({
  user_id: Joi.number().required(),
})

const invoiceByIdParamSchema = Joi.number().required()

const patchInvoiceSchema = Joi.object({
  invoice_id: Joi.number().required(),
  billingaddress: Joi.string(),
  postalCode: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  country: Joi.string(),
  vatId: Joi.string(),
  vatAmount: Joi.number(),
  secondTax: Joi.number(),
})

module.exports = {
  contactSchema,
  registerSchema,
  adsSchema,
  AdByIdParamSchema,
  getRegionByLocationSchema,
  getAdsByTypeSchema,
  getUserAdsSchema,
  patchAdSchema,
  conversationUsersSchema,
  conversationUserSchema,
  conversationSchema,
  messageSchema,
  logSchema,
  invoicesSchema,
  getUserInvoicesSchema,
  invoiceByIdParamSchema,
  patchInvoiceSchema,
}
