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
		text: "",
	},
	tooltip: {},
	xAxis: {
		data: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
	},
	yAxis: {},
	series: [
		{
			name: "sales",
			type: "line",
			data: [0, 50, 100, 150, 200, 250, 300],
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
						<option value="mes">Meses</option>
						<option value="en">Enero</option>
						<option value="feb">Febrero</option>
						<option value="mar">Marzo</option>
						<option value="abr">Abril</option>
						<option value="may">Mayo</option>
						<option value="jun">Junio</option>
						<option value="jul">Julio</option>
						<option value="ago">Agosto</option>
						<option value="set">Setiembre</option>
						<option value="oct">Octubre</option>
						<option value="nov">Noviembre</option>
						<option value="dic">Diciembre</option>
					</CardHeaderSelect>

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
		</Body>
	);
}

export default LinealGraphic;
