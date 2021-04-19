import Body from "components/layout/Body/Body";
import {LineChart} from "../../components/composed/Charts/LineChart/LineChart";
import BarChart from "../../components/composed/Chart/BarChart/BarChart";
import {generateData, daysBetween} from "utils/generateData";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [30, 80]);

function Dashboard() {
	return (
		<Body title="Ventas mensuales" isLoggedIn={true} style={{fontSize: "5rem"}}>
			<BarChart />
			<LineChart data={data} />
		</Body>
	);
}

export default Dashboard;
