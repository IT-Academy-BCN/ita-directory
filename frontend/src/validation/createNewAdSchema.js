import { z } from 'zod'

const newAdSchema = z.object({
  title: z.string({ required_error: 'This field is required' }),
  description: z.string(),
  city: z.string({ required_error: 'This field is required' }),
  nRooms: z.nullable(
    z
      .number({ required_error: 'This field is required' })
      .int('No decimals allowed')
      .positive('Must be a positive number')
      .transform((val) => (isNaN(val) ? undefined : val))
  ),
  price: z
    .number({ required_error: 'This field is required' })
    .positive('Must be a positive number'),
  squareMeters: z
    .number({ required_error: 'This field is required' })
    .int('No decimals allowed')
    .positive('Must be a positive number'),
  nBathrooms: z.nullable(
    z
      .number({ required_error: 'This field is required' })
      .int('No decimals allowed')
      .positive('Must be a positive number')
      .transform((val) => (isNaN(val) ? undefined : val))
  ),
})

export default newAdSchema
