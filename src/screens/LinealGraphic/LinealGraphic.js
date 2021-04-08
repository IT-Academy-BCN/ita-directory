import Body from "components/layout/Body/Body";
import React, {useRef, useEffect} from "react";
import * as echarts from "echarts";

// import styles
import {
	CardChart,
	CardHeader,
	CardHeaderTitle,
	CardHeaderSelect,
	CardBody,
} from "./LinealGraphic.styles";

const options = {
	title: {
		text: "ECharts Getting Started Example",
	},
	tooltip: {},
	xAxis: {
		data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
	},
	yAxis: {},
	series: [
		{
			name: "sales",
			type: "line",
			data: [5, 20, 36, 10, 10, 20],
		},
	],
};

function LinealGraphic() {
	const lineChartRef = useRef(null);
	useEffect(() => {
		const lineChart = echarts.init(lineChartRef.current);
		lineChart.setOption(options);
	}, []);

	return (
		<Body title="Ventas mensuales" isLoggedIn={true}>
			<CardChart>
				<CardHeader>
					<CardHeaderTitle>Ventas mensuales 2020</CardHeaderTitle>
					<CardHeaderSelect>
						<option value="volvo">Months</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</CardHeaderSelect>
				</CardHeader>
				<CardBody ref={lineChartRef}></CardBody>
			</CardChart>
		</Body>
	);
}

export default LinealGraphic;
