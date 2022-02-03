import {useState} from "react";
import axios from "axios";

//styles
import {Form} from "./UploadAdsFromFile.styles";

//components
import Input from "components/units/Input/Input";
import Button from "components/units/Button/Button";

const UploadAdsFromFile = ({setError, setSuccessfulPost}) => {
	const [csvFile, setCsvFile] = useState();

	const validateCsvFile = (file) => {
		return file && file.type === "text/csv";
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const file = csvFile;
		const formData = new FormData();
		formData.append("file", file);
		/* axios.post(`${process.env.REACT_APP_API_URL}/media/v1/upload`, formData, {​​​ headers: {​​​ 'Content-Type': 'multipart/form-data' }​​​ }​​​)
				.then((res) => {
					setSuccessfulPost(true);
					console.log(res);
				})
				.catch(() => setError(true)); */
	};

	/* [9:13] kevinmamaqi
    const formData =newFormData()
	formData.append('file', file)
	​[9:14] kevinmamaqi
    consthandleChange= (e) => {​​​
	if (e.currentTarget.files) setFile(e.currentTarget.files[0])
	}​​​
	​[9:16] kevinmamaqi
    {​​​ headers: {​​​ 'Content-Type': 'multipart/form-data' }​​​ }​​​ */

	return (
		<Form onSubmit={handleSubmit}>
			<label>Publicar anuncios desde archivo</label>
			<Input
				type="file"
				name="csvFile"
				onChange={(event) => {
					setCsvFile(event.target.files[0]);
				}}
				id="csvFile"
				success={csvFile && validateCsvFile(csvFile)}
				error={csvFile && !validateCsvFile(csvFile)}
				errorText="Sube un archivo .csv"
			/>
			<Button
				type="submit"
				text="enviar"
				className="blue-gradient"
				buttonStyles={{
					width: "7.25rem",
					height: "2.125rem",
					marginBottom: "2rem",
				}}
				disabled={!(csvFile && validateCsvFile(csvFile))}
			/>
		</Form>
	);
};;

export default UploadAdsFromFile;
