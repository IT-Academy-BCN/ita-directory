// import React, {useState, useEffect} from "react";
// import BarChart from "components/composed/Chart/BarChart/BarChart";
// import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";
// import {generateData, daysBetween} from "utils/generateData";

// const initialDate = "2012-01-01";
// const days = daysBetween(initialDate, "2016-12-31");
// const data = generateData(new Date(initialDate), days, [30, 80]);

// function CardWrapper() {
// 	const [active, setActive] = useState(false);
// 	const [graphSize, setGraphSize] = useState([]);

// 	useEffect(() => {
// 		let windowH = window.innerHeight;
// 		let windowW = window.innerWidth;
// 		let graphW = windowW - windowW * 0.1;
// 		let graphH;
// 		active ? (graphH = windowH - windowH * 0.6) : (graphH = windowH - windowH * 0.6);
// 		setGraphSize([graphW, graphH]);
// 		console.log("active changed", graphSize);
// 		// eslint-disable-next-line
// 	}, [active]);

// 	return (
// 		<>
// 			<BarChart
// 				data={data}
// 				active={active}
// 				size={graphSize}
// 				hideModal={() => setActive(!active)}
// 			/>
// 			<ModalGraphic
// 				active={active}
// 				hideModal={() => setActive(!active)}
// 				children={
// 					<BarChart
// 						data={data}
// 						active={active}
// 						size={graphSize}
// 						hideModal={() => setActive(!active)}
// 					/>
// 				}
// 			/>
// 		</>
// 	);
// }
// export default CardWrapper;
