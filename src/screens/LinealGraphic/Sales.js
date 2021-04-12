import Body from "components/layout/Body/Body";
import LinealGraphic from "./LinealGraphic";
import {generateData, daysBetween} from "utils/generateData";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [30, 80]);

function Sales() {
	return (
		<Body title="Ventas mensuales" isLoggedIn={true}>
			<LinealGraphic data={data} />
		</Body>
	);
}

export default Sales;
