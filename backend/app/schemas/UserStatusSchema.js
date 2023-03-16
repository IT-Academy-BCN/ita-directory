const { z } = require('zod')
const UserSchema = require('./UserSchema')

const UserStatusSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  active: z.boolean().optional(),
  pending: z.boolean().optional(),
  suspended: z.boolean().optional(),
  deleted: z.boolean().optional(),
  user: UserSchema.array(),
})

module.exports = UserStatusSchema
