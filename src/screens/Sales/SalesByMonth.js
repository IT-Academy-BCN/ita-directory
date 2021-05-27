/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Body from "components/layout/Body/Body";
import PieChart from "components/composed/Chart/PieChart/PieChart";
import {generateData, daysBetween} from "utils/generateData1";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";
import Modal from "components/composed/Modal/Modal";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [1, 50]);

function SalesByMonth() {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);
	const [graphSize, setGraphSize] = useState([]);

	useEffect(() => {
		let windowH = window.innerHeight;
		let windowW = window.innerWidth;
		let graphW = windowW - windowW * 0.1;
		let graphH;
		active ? (graphH = windowH - windowH * 0.6) : (graphH = windowH - windowH * 0.6);
		setGraphSize([graphW, graphH]);
		console.log("active changed", graphSize);
		// eslint-disable-next-line
	}, [active]);

	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<PieChart
				data={data}
				active={active}
				hideModal={() => setActive(!active)}
				size={graphSize}
			/>
			<ModalGraphic
				active={active}
				hideModal={() => setActive(!active)}
				children={
					<PieChart
						data={data}
						active={active}
						hideModal={() => setActive(!active)}
						size={graphSize}
					/>
				}
			/>
		</Body>
	);
}

export default SalesByMonth;
