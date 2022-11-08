import { z } from 'zod'

const contactSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must only contain letters',
  }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ invalid_type_error: 'Must be a valid email' }),
  message: z.string({ required_error: 'Message is required' }),
})

export default contactSchema
