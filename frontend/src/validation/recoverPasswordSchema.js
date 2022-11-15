import { z } from 'zod'

const recoverPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'This field is required.' })
    .email({ message: 'Must be a valid email' }),
})

export default recoverPasswordSchema
