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
		text: "",
	},
	tooltip: {},
	xAxis: {
		data: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
	},
	yAxis: {},
	series: [
		{
			name: "sales",
			type: "line",
			data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
		},
	],
};

function LinealGraphic({customOptions}) {
	const lineChartRef = useRef(null);
	useEffect(() => {
		const lineChart = echarts.init(lineChartRef.current);
		lineChart.setOption({...options, ...customOptions});
	}, [customOptions]);

	return (
		<CardChart>
			<CardHeader>
				<CardHeaderTitle>Ventas mensuales 2020</CardHeaderTitle>

				<CardHeaderSelect>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
					<option value="2014">2014</option>
					<option value="2015">2015</option>
					<option value="2016">2016</option>
				</CardHeaderSelect>
			</CardHeader>
			<CardBody ref={lineChartRef}></CardBody>
		</CardChart>
	);
}

export default LinealGraphic;
