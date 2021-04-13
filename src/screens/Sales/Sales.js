/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import {generateData, daysBetween} from "utils/generateData";
import Modal from "components/composed/Modal/Modal";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [1, 50]);

function Sales() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(true);
	};

	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<BarChart data={data} handleClick={() => handleClick()} />
			<Modal
				active={active}
				hideModal={() => setActive(false)}
				children={<BarChart data={data} handleClick={() => handleClick()} />}
			/>
		</Body>
	);
}

export default Sales;
