/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import BarChart from "components/composed/Chart/BarChart/BarChart";

import {generateData} from "utils/generateFakeData";

// const DATA = generateData(diaInicial, length, values);
// for (let i = 0; i < DATA.length; i++) {
// 	const el = DATA[i];
// }

function Sales() {
	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<BarChart
				customOptions={{
					series: [
						{data: [14]},
						{
							data: [140, 205, 101, 334, 390],
						},
						{},
						{
							data: [114, 115, 101, 0, 390],
						},
					],
				}}
			/>
		</Body>
	);
}

export default Sales;
