import { z } from 'zod'

const newAdSchema = z.object({
  title: z
    .string({ required_error: 'This field is required' })
    .min(1, { message: 'This field is required.' }),
  description: z.string(),
  city: z
    .string({
      required_error: 'This field is required',
      invalid_type_error: 'Can only contain letters',
    })
    .min(1, { message: 'This field is required.' }),
   address: z
    .string({ required_error: 'This field is required' })
    .min(1, { message: 'This field is required.' }),
  nRooms: z.nullable(
    z
      .number({
        required_error: 'This field is required',
        invalid_type_error: 'Must insert a number',
      })
      .min(1, { message: 'This field is required.' })
      .int({ message: 'No decimals allowed' })
      .positive({ message: 'Must be a positive number' })
      .transform((val) => (isNaN(val) ? undefined : val))
  ),
  price: z
    .number({
      required_error: 'This field is required',
      invalid_type_error: 'Must insert a number',
    })
    .min(1, { message: 'This field is required.' })
    .positive({ message: 'Must be a positive number' }),
  squareMeters: z
    .number({
      required_error: 'This field is required',
      invalid_type_error: 'Must insert a number',
    })
    .min(1, { message: 'This field is required.' })
    .int({ message: 'No decimals allowed' })
    .positive({ message: 'Must be a positive number' }),
  nBathrooms: z.nullable(
    z
      .number({
        required_error: 'This field is required',
        invalid_type_error: 'Must insert a number',
      })
      .min(1, { message: 'This field is required.' })
      .int({ message: 'No decimals allowed' })
      .positive({ message: 'Must be a positive number' })
      .transform((val) => (isNaN(val) ? undefined : val))
  ),
})

export default newAdSchema
