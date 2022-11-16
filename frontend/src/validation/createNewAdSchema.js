import { z } from 'zod'
import numberValidation from '../utils/numberValidation'

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
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
    }),
  squareMeters: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
    }),
  nBathrooms: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
    }),
})

export default newAdSchema
