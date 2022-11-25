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
  nRooms: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
      return val
    }),
  price: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
      return val
    }),
  squareMeters: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
      return val
    }),
  nBathrooms: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
      return val
    }),
})

export default newAdSchema
