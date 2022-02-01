import * as yup from "yup";

const newAdSchema = yup.object().shape({
	title: yup.string().required("this field is required"),
	description: yup.string(),
	city: yup.string().required("this field is required"),
	n_rooms: yup.number().integer("not decimals allowed").positive("must be positive number"),
	price: yup.number().positive("must be positive number").required("this field is required"),
	square_meters: yup
		.number()
		.integer("not decimals allowed")
		.positive("must be positive number")
		.required("this field is required"),
	n_bathrooms: yup.number().integer("not decimals allowed").positive("must be positive number"),
});

export default newAdSchema;
