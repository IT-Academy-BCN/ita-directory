/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import PieChart from "components/composed/Chart/PieChart/PieChart";
import {generateData, daysBetween} from "utils/generateData1";
import Modal from "components/composed/Modal/Modal";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [1, 50]);

function Sales() {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<PieChart data={data} active={active} hideModal={hideModal} />
			<Modal
				active={active}
				hideModal={hideModal}
				children={<PieChart data={data} active={active} hideModal={hideModal} />}
			/>
		</Body>
	);
}

export default Sales;
