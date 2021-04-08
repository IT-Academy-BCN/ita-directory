import Body from "components/layout/Body/Body";
import Chart from "components/composed/Chart/Chart.js";
import bars from "api/charts/bars";

function BarChart() {
	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<Chart options={bars} />
		</Body>
	);
}

export default BarChart;
