import {useState} from "react";
import axios from "axios";

//styles
import {Form} from "./UploadAdsFromFile.styles";

//components
import Input from "components/units/Input/Input";
import Button from "components/units/Button/Button";

const UploadAdsFromFile = ({setError, setSuccessfulPost}) => {
	const [csvFile, setCsvFile] = useState();

	const handleChange = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		if (file && file.type === "text/csv") setCsvFile(file);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("csv", csvFile);
		axios
			.post(`${process.env.REACT_APP_API_URL}/media/v1/upload-csv`, formData, {
				headers: {"Content-Type": "multipart/form-data"},
			})
			.then(() => {
				setSuccessfulPost(true);
			})
			.catch(() => {
				setError(true);
			});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<label>Publicar anuncios desde archivo</label>
			<input type="file" name="csvFile" onChange={handleChange} id="csvFile" />
			<Button
				type="submit"
				text="enviar"
				className="blue-gradient"
				buttonStyles={{
					width: "7.25rem",
					height: "2.125rem",
					marginBottom: "2rem",
				}}
			/>
		</Form>
	);
};;

export default UploadAdsFromFile;
