import React, {useState, useEffect} from "react";
import {generateData, daysBetween} from "utils/generateData";
import BarChart from "components/composed/Charts/BarChart/BarChart";
import LineChart from "components/composed/Charts/LineChart/LineChart";
import PieChart from "components/composed/Charts/PieChart/PieChart";

// STYLES
import {StyledDashboard} from "./Dashboard.style";
import Body from "components/layout/Body/Body";

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
		<Body title="Control de ventas" isLoggedIn={true}>
			<StyledDashboard>
				<BarChart data={data} active={active} hideModal={hideModal} size={graphSize} />
				<div className="row">
					<div className="graphicMargin">
						<LineChart
							data={data}
							active={active}
							hideModal={hideModal}
							size={graphSize}
						/>
					</div>

					<div className="">
						<PieChart
							data={data}
							active={active}
							hideModal={hideModal}
							size={graphSize}
						/>
					</div>
				</div>
			</StyledDashboard>
		</Body>
	);
}

export default Dashboard;
