/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import {generateData} from "utils/generateData";
import Modal from "components/composed/Modal/Modal";

const data = generateData("2012-01-01", "2016-12-31", [10, 20]);

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
