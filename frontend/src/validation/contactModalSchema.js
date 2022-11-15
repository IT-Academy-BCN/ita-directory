import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must only contain letters',
    })
    .min(1, { message: 'This field is required.' }),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'This field is required.' })
    .email({ message: 'Must be a valid email' }),
  message: z.string().min(1, { message: 'A message is required.' }),
})

export default contactSchema
