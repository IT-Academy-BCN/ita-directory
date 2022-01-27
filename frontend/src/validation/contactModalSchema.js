import * as yup from "yup";

const contactSchema = yup.object().shape({
	name: yup.string().required("name is required"),
	email: yup.string().email("must be a valid email").required("email is required"),
	message: yup.string().required("message is required"),
});

export default contactSchema;
