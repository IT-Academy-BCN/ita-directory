import React, {useState} from "react";
import InputNumber from "../../components/units/InputNumber/InputNumber";
import {faEuroSign} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const [inputNumberValue, setInputNumberValue] = useState("");
	const handleInputNumberChange = (e) => setInputNumberValue(e.target.value);

	return (
		<form>
			<InputNumber
				value={inputNumberValue}
				onChange={handleInputNumberChange}
				errorText="only valid numbers allowed"
				icon={faEuroSign}
				label={"Price"}
			/>
		</form>
	);
};

export default Home;
