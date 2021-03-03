import React, {useState} from "react";
import InputNumber from '../../components/units/InputNumber/InputNumber';
import { faEuroSign} from "@fortawesome/free-solid-svg-icons";

const Home = ({
	icon,
}) => {

	const [inputNumberValue, setInputNumberValue] = useState("");
	const handleInputNumberChange = e => setInputNumberValue(e.target.value);	

	return(
		<form>
		<InputNumber
			value={inputNumberValue}
			onChange={handleInputNumberChange}
			errorText="only valid numbers allowed"		
			icon={faEuroSign}
			/>
		</form>
	);
};

export default Home;


		