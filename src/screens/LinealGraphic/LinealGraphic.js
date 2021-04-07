import Body from "components/layout/Body/Body";
import React from "react";
import ReactEcharts from "echarts-for-react";

function LinealGraphic() {
	return (
		<Body title="Lineal Graphic" isLoggedIn={true}>
			<ReactEcharts
				style={{height: "40vh", left: 50, top: 50, width: "60vw"}}
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
		</Body>
	);
}

export default LinealGraphic;
