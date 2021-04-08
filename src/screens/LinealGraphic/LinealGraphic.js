import Body from "components/layout/Body/Body";
import React from "react";
import ReactEcharts from "echarts-for-react";

// import styles
import {CardChart, CardHeader, CardHeaderTitle, CardHeaderSelect} from "./LinealGraphic.styles";

function LinealGraphic() {
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
				<ReactEcharts
					style={{height: "30vh", left: 50, top: 50, width: "40vw"}}
					option={{
						xAxis: {
							type: "category",
							data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
						},
						yAxis: {
							type: "value",
						},
						series: [
							{
								data: [150, 230, 224, 218, 135, 147, 260],
								type: "line",
							},
						],
					}}
				/>
			</CardChart>
		</Body>
	);
}

export default LinealGraphic;
