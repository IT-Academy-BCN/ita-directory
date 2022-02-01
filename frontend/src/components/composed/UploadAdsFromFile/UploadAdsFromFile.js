import {useEffect, useState} from "react";

//components
import Input from "components/units/Input/Input";
import Button from "components/units/Button/Button";

const UploadAdsFromFile = () => {
	const requiredHeaders = [
		"user_id",
		"title",
		"description",
		"city",
		"n_rooms",
		"price",
		"square_meters",
		"n_bathrooms",
		"map_lat",
		"map_lon",
		"ad_type_id",
	];
	const [csvFile, setCsvFile] = useState();
	const [adsArray, setAdsArray] = useState(null);

	const validateCsvFile = (file) => {
		return file && file.type === "text/csv";
	};

	const validateHeaders = (str, delimiter = ",") => {
		const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
		for (let i = 0; i < requiredHeaders.length; i++) {
			if (headers[i] !== requiredHeaders[i]) return false;
		}
		return true;
	};

	function csvToArray(str, delimiter = ",") {
		const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
		const rows = str.slice(str.indexOf("\n") + 1).split("\n");

		const arr = rows.map((row) => {
			const values = row.split(delimiter);
			const el = headers.reduce((object, header, index) => {
				object[header] = values[index];
				return object;
			}, {});
			return el;
		});

		return arr;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const file = csvFile;
		const reader = new FileReader();

		reader.onload = function (e) {
			const text = e.target.result;
			if (validateHeaders(text)) {
				setAdsArray(csvToArray(text));
			} else {
				console.log("error en los headers");
			}
		};

		reader.readAsText(file);
	};

	useEffect(() => {
		if (adsArray) console.log(adsArray);
	}, [adsArray]);

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type="file"
				name="csvFile"
				placeholder="upload csv file"
				onChange={(event) => {
					setCsvFile(event.target.files[0]);
				}}
				id="csvFile"
				success={csvFile && validateCsvFile(csvFile)}
				error={csvFile && !validateCsvFile(csvFile)}
				errorText="Sube un archivo .csv"
			/>
			<Button type="submit" text="enviar" />
		</form>
	);
};

export default UploadAdsFromFile;
