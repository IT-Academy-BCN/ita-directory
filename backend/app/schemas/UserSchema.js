const { z } = require('zod')

const UserSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().nullish(),
  lastnames: z.string().nullish(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date(),
  userStatusId: z.number().int(),
  userRoleId: z.number().int(),
  developerData: null, // jsonSchema,
})

export default UserSchema
