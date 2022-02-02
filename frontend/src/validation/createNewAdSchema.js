import * as yup from "yup";

const newAdSchema = yup.object().shape({
	title: yup.string().required("this field is required"),
	description: yup.string(),
	city: yup.string().required("this field is required"),
	n_rooms: yup
		.number()
		.typeError("")
		.integer("not decimals allowed")
		.positive("must be positive number"),
	price: yup
		.number()
		.typeError("this field is required")
		.positive("must be positive number")
		.required(),
	square_meters: yup
		.number()
		.typeError("this field is required")
		.integer("not decimals allowed")
		.positive("must be positive number")
		.required(),
	n_bathrooms: yup
		.number()
		.typeError("")
		.integer("not decimals allowed")
		.positive("must be positive number"),
});

export default newAdSchema;
