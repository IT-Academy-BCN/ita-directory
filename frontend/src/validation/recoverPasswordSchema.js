import * as yup from "yup";

const recoverPasswordSchema = yup.object().shape({
	email: yup.string().email("must be a valid email").required("email is required"),
});

export default recoverPasswordSchema;
