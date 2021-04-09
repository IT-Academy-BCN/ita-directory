import Body from "components/layout/Body/Body";
import LinealGraphic from "./LinealGraphic";
//import {generateData} from "utils/generateData";

export const Sales = () => (
	<Body title="Ventas mensuales" isLoggedIn={true}>
		<LinealGraphic
			customOptions={{
				series: [
					{
						type: "line",
						data: [405, 50, 100, 150, 200, 250, 300, 350, 800, 450, 500, 550],
					},
				],
			}}
		/>
	</Body>
);
