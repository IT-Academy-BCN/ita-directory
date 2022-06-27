const { z } = require('zod')

const UserRoleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  admin: z.boolean().optional(),
  developer: z.boolean().optional(),
  manager: z.boolean().optional(),
  registered: z.boolean().optional(),
})

module.exports = UserRoleSchema
