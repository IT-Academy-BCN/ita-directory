import React, {useState, useEffect} from "react";
import {generateData, daysBetween} from "utils/generateData";

import GlobalFilters from "components/composed/GlobalFilters/GlobalFilters";

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
	const [globalYear, setGlobalYear] = useState("2016");
	const [globalMonth, setGlobalMonth] = useState("all");

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
		<Body
			title="Control de ventas"
			justifyTitle="flex-start"
			paddingTitle="0px"
			paddingTitle2="5vw"
			isLoggedIn="true"
		>
			<StyledDashboard>
				<div className="marginBottom">
					<GlobalFilters
						onYearChange={(year) => setGlobalYear(year)}
						onMonthChange={(month) => setGlobalMonth(month)}
					/>
				</div>
				<BarChart
					data={data}
					active={active}
					hideModal={hideModal}
					size={graphSize}
					month={globalMonth}
					year={globalYear}
				/>
				<div className="row">
					<div className="graphicMargin">
						<LineChart
							data={data}
							active={active}
							hideModal={hideModal}
							size={graphSize}
							month={globalMonth}
							year={globalYear}
						/>
					</div>

					<div className="">
						<PieChart
							data={data}
							active={active}
							hideModal={hideModal}
							size={graphSize}
							month={globalMonth}
							year={globalYear}
						/>
					</div>
				</div>
			</StyledDashboard>
		</Body>
	);
}

export default Dashboard;
