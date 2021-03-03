import React, {useState} from "react";
import InputNumber from '../../components/units/InputNumber/InputNumber';
import { faEuroSign} from "@fortawesome/free-solid-svg-icons";

const Home = ({
	icon,
	label
}) => {

	const [inputNumberValue1, setInputNumberValue1] = useState("");
	const handleInputNumberChange1 = e => setInputNumberValue1(e.target.value);	

	const [inputNumberValue2, setInputNumberValue2] = useState("");
	const handleInputNumberChange2 = e => setInputNumberValue2(e.target.value);	


	return(
		<form>
			<InputNumber
			value={inputNumberValue1}
			onChange={handleInputNumberChange1}
			errorText="Only digits allowed..."	
			icon={faEuroSign}
			label={"Price"}				
			/>

		<InputNumber
			value={inputNumberValue2}
			onChange={handleInputNumberChange2}
			errorText="Enter a valid number..."		
			strictMode={false}
			icon={faEuroSign}
			label={"Price"}	
			/>
		</form>
	);
};

export default Home;


		