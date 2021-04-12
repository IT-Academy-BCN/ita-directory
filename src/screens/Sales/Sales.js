/* eslint-disable no-unused-vars */
import React from "react";
import Body from "components/layout/Body/Body";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import generateData from "utils/generateData";

const data = generateData(new Date("2009, 1, 1"), 5, [1, 50]);

const years = [];
const chalets = [];
const garages = [];
const locales = [];
const pisos = [];

for (let i = 0; i < data.length; i++) {
	years.push(data[i].year);
	chalets.push(data[i].chalets);
	garages.push(data[i].garages);
	locales.push(data[i].locales);
	pisos.push(data[i].pisos);
}

function Sales() {
	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			{console.log("Object data received", data)}
			<BarChart
				customOptions={{
					xAxis: [
						{
							data: years,
						},
					],
					series: [
						{
							data: pisos,
						},
						{
							data: garages,
						},
						{
							data: locales,
						},
						{
							data: chalets,
						},
					],
				}}
			/>
		</Body>
	);
}

export default Sales;
