import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup.string().email('must be a valid email').required('email is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
  /* .matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
			"Debe contener un carácter especial (@ $ ! % * # ? &) y al menos un número"
		), */
})

export default loginSchema
