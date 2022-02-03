import axios from "axios";

//styles
import {Form} from "./UploadAdsFromFile.styles";

//components
import Input from "components/units/Input/Input";
import Button from "components/units/Button/Button";

//form validation
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import uploadCsvSchema from "validation/uploadCsvSchema";

const UploadAdsFromFile = ({setError, setNotification}) => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(uploadCsvSchema),
	});

	const submitForm = (data) => {
		const csvFile = data.csvFile[0];
		sendCsv(csvFile);
	};

	const sendCsv = (csvFile) => {
		const formData = new FormData();
		formData.append("csv", csvFile);
		axios
			.post(`${process.env.REACT_APP_API_URL}/media/v1/upload-csv`, formData, {
				headers: {"Content-Type": "multipart/form-data"},
			})
			.then(() => setError(false))
			.catch(() => setError(true));
		setNotification(true);
	};

	return (
		<Form onSubmit={handleSubmit(submitForm)}>
			<label>Publicar anuncios desde archivo</label>
			<Input
				type="file"
				name="csvFile"
				id="csvFile"
				register={register("csvFile")}
				error={errors.csvFile?.message}
			/>
			<Button
				type="submit"
				text="enviar"
				className="blue-gradient"
				buttonStyles={{
					width: "7.25rem",
					height: "2.125rem",
					marginTop: "1rem",
				}}
			/>
		</Form>
	);
};

export default UploadAdsFromFile;
