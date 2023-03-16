const { z } = require('zod')
const UserStatusSchema = require('./UserStatusSchema')
const UserRoleSchema = require('./UserRoleSchema')
const AccesLogSchema = require('./AccesLogSchema')
const RecoverPasswordLogSchema = require('./RecoverPasswordLogSchema')
const MediaSchema = require('./MediaSchema')
const AdsSchema = require('./AdsSchema')
const MessageSchema = require('./MessageSchema')
const UserConversationSchema = require('./UserConversationSchema')
const InvoiceSchema = require('./InvoiceSchema')

// Helper schema for Json fields
const literalSchema = z.union([z.object().partial(), z.null(), z.undefined()])
const jsonSchema = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string().nullish(),
  lastnames: z.string().nullish(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date(),
  userStatus: UserStatusSchema,
  userStatusId: z.number().int(),
  userRole: UserRoleSchema,
  userRoleId: z.number().int(),
  accesLog: AccesLogSchema.array(),
  recoverPassword: RecoverPasswordLogSchema.array(),
  media: MediaSchema.array(),
  ads: AdsSchema.array(),
  avatar: MediaSchema.nullish(),
  avatarId: z.number().int().nullish(),
  developerData: jsonSchema,
  messagesSent: MessageSchema.array(),
  userConversations: UserConversationSchema.array(),
  userInvoices: InvoiceSchema.array(),
})

module.exports = UserSchema
