const { z } = require('zod')

const UserStatusSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  active: z.boolean().optional(),
  pending: z.boolean().optional(),
  suspended: z.boolean().optional(),
  deleted: z.boolean().optional(),
})

module.exports = UserStatusSchema
