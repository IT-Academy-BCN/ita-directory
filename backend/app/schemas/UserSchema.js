const { z } = require('zod')

// Helper schema for Json fields
const literalSchema = z.union([z.object().partial(), z.null(), z.undefined()])
const jsonSchema = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

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
  developerData: jsonSchema,
})

module.exports = UserSchema
