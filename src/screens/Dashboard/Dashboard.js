import React, {useState, useEffect} from "react";
import {generateData, daysBetween} from "utils/generateData";
import PieChart from "components/composed/Chart/PieChart/PieChart";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";
import SalesLineChart from "screens/Sales/SalesLineChart";
import SalesByType from "screens/Sales/SalesByType";
import GlobalFilters from "components/composed/GlobalFilters/GlobalFilters";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [30, 80]);

function Dashboard() {
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
		<div>
			<GlobalFilters />
			<SalesByType ocultarHeader={true} ocultarFooter={true} dashboard={true} />
			<PieChart data={data} active={active} hideModal={hideModal} size={graphSize} />
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
			<SalesLineChart ocultarHeader={true} dashboard={true} />
		</div>
	);
}

export default Dashboard;
