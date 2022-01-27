import * as yup from "yup";

export const contactSchema = yup.object().shape({
	name: yup.string().required("this field is required"),
	email: yup.string().email("must be a valid email").required("this field is required"),
	text: yup.string().required("this field is required"),
});
