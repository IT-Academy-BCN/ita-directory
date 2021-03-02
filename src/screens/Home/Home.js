import React, {useState, useEffect} from "react";
import InputNumber from '../../components/units/InputNumber/InputNumber';

const Home = () => {

	const [inputNumberValue, setInputNumberValue] = useState();

	const handleInputNumberChange = (e) => {
		setInputNumberValue(e.target.value);
	}

	return(
		<div>
			<InputNumber
			value={inputNumberValue}
			onChange={handleInputNumberChange}
			/>
		</div>
	);
};

export default Home;
