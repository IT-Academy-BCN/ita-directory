import * as yup from 'yup'

const newAdSchema = yup.object().shape({
  title: yup.string().required('this field is required'),
  description: yup.string(),
  city: yup.string().required('this field is required'),
  nRooms: yup
    .number()
    .typeError('')
    .integer('not decimals allowed')
    .positive('must be positive number')
    .nullable(true)
    .transform((val) => (isNaN(val) ? undefined : val)),
  price: yup
    .number()
    .typeError('this field is required')
    .positive('must be positive number')
    .required(),
  squareMeters: yup
    .number()
    .typeError('this field is required')
    .integer('not decimals allowed')
    .positive('must be positive number')
    .required(),
  nBathrooms: yup
    .number()
    .typeError('')
    .integer('not decimals allowed')
    .positive('must be positive number')
    .nullable(true)
    .transform((val) => (isNaN(val) ? undefined : val)),
})

export default newAdSchema
