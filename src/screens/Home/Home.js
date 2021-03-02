import React, {useState} from "react";
import InputNumber from '../../components/units/InputNumber/InputNumber';

const Home = () => {

	const [inputNumberValue, setInputNumberValue] = useState("");

	const handleInputNumberChange = (e) => {
		setInputNumberValue(e.target.value);
	}

	return(
		<form>
			<InputNumber
			value={inputNumberValue}
			onChange={handleInputNumberChange}
			errorText="Enter a valid number..."
			/>
		</form>
	);
};

export default Home;


		