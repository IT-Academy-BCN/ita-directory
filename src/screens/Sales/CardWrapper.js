import React, {useState, useEffect} from "react";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";
import {generateData} from "utils/generateData";

const data = generateData("2012-01-01", "2016-12-31", [10, 20]);

function CardWrapper() {
	const [active, setActive] = useState(false);
	const [graphSize, setGraphSize] = useState([]);

	useEffect(() => {
		let windowH = window.innerHeight;
		let windowW = window.innerWidth;
		let graphW = windowW - windowW * 0.1;
		let graphH;
		active ? (graphH = windowH - windowH * 0.1 - 300) : (graphH = windowH - windowH * 0.1);
		setGraphSize([graphW, graphH]);
		console.log("active changed", graphSize);
		// eslint-disable-next-line
	}, [active]);

	return (
		<>
			<BarChart
				data={data}
				active={active}
				size={graphSize}
				hideModal={() => setActive(!active)}
			/>
			<ModalGraphic
				active={active}
				hideModal={() => setActive(!active)}
				children={
					<BarChart
						data={data}
						active={active}
						size={graphSize}
						hideModal={() => setActive(!active)}
					/>
				}
			/>
		</>
	);
}
export default CardWrapper;
