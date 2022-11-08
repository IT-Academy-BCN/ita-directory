import { z } from 'zod'

const recoverPasswordSchema = z.object({
  email: z
    .string()
    .email({ required_error: 'email is required', invalid_type_error: 'must be a valid email' }),
})

export default recoverPasswordSchema
