import * as yup from "yup";

const uploadCsvSchema = yup.object().shape({
	csvFile: yup
		.mixed()
		.test(
			"fileType",
			"upload a .csv file",
			(value) => value[0] && ["text/csv"].includes(value[0].type)
		),
});

export default uploadCsvSchema;
