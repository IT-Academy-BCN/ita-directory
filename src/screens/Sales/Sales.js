/* eslint-disable no-unused-vars */
import Body from "components/layout/Body/Body";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import {generateData, daysBetween} from "utils/generateData";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [1, 50]);
console.log("Object data received", data);

function Sales() {
	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<BarChart data={data} />
		</Body>
	);
}

export default Sales;
