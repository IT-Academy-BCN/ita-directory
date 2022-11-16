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
  nRooms: z
    .string({
      required_error: 'This field is required',
    })
    .transform((val, ctx) => {
      numberValidation(val, ctx)
    }),
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
