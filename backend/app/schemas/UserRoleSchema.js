const { z } = require('zod')
const UserSchema = require('./UserSchema')

const UserRoleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  admin: z.boolean().optional(),
  developer: z.boolean().optional(),
  manager: z.boolean().optional(),
  registered: z.boolean().optional(),
  user: UserSchema.array(),
})

module.exports = UserRoleSchema
