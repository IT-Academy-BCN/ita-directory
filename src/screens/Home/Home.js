import React, {useState} from "react";
import InputNumber from "../../components/units/InputNumber/InputNumber";
import {faEuroSign} from "@fortawesome/free-solid-svg-icons";
import {Button} from "components/composed/Modal/Modal.styles";
import Modal from "components/composed/Modal/Modal";
import FilterList from "components/composed/FilterList/FilterList";

const Home = () => {
	const [inputNumberValue, setInputNumberValue] = useState("");
	const [active, setActive] = useState(false);
	const handleInputNumberChange = (e) => setInputNumberValue(e.target.value);

	return (
		<>
			<div>
				<FilterList />
			</div>
			<form>
				<InputNumber
					value={inputNumberValue}
					onChange={handleInputNumberChange}
					errorText="only valid numbers allowed"
					icon={faEuroSign}
					label={"Price"}
				/>
			</form>
			<div>
				<Button onClick={() => setActive(true)}>Open Modal</Button>
				<Modal
					active={active}
					hideModal={() => setActive(false)}
					title="Modal title"
					footer={<Button>Footer Button</Button>}
				>
					Modal body..
				</Modal>
			</div>
		</>
	);
};

export default Home;
