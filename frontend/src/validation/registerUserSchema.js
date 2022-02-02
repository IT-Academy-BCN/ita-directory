import * as yup from "yup";

const registerSchema = yup.object().shape({
	name: yup.string().required("this field is required"),
	lastname: yup.string().required("this field is required"),
	email: yup.string().email("must be a valid email").required("email is required"),
	password: yup
		.string()
		.required("No password provided.")
		.min(6, "Password is too short - should be 6 chars minimum.")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
			"Debe contener un carácter especial (@ $ ! % * # ? &) y al menos un número"
		),
});

export default registerSchema;
