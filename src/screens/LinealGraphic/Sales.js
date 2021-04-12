import Body from "components/layout/Body/Body";
import LinealGraphic from "./LinealGraphic";
import {generateData} from "utils/generateData";

const months = 12;
let totalDia;
const totalAnio = [];
const data = generateData(new Date(), months, [30, 80]);
for (let i = 0; i < data.length; i++) {
	const element = data[i];
	const categoriesDia = [];
	categoriesDia.push(element.pisos);
	categoriesDia.push(element.garajes);
	categoriesDia.push(element.locales);
	categoriesDia.push(element.chalets);
	totalDia = categoriesDia.reduce((accumulator, currentValue) => accumulator + currentValue);
	//console.log(categoriesDia);
	//console.log(totalDia);
	totalAnio.push(totalDia);
}
console.log("totalAnio", totalAnio);

export const Sales = () => (
	<Body title="Ventas mensuales" isLoggedIn={true}>
		<LinealGraphic
			customOptions={{
				series: [
					{
						type: "line",
						data: totalAnio,
					},
				],
			}}
		/>
	</Body>
);
