import Body from "components/layout/Body/Body";
import {LineChart} from "../../components/composed/Charts/LineChart/LineChart";
import {generateData, daysBetween} from "utils/generateData";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [30, 80]);

function Sales() {
	return (
		<Body title="Ventas mensuales" isLoggedIn={true} style={{fontSize: "5rem"}}>
			<LineChart data={data} />
		</Body>
	);
}

export default Sales;
