import React, {useState, useRef, useEffect} from "react";
// import * as echarts from "echarts";
import * as d3 from "d3";
import {groupByTypePie, daysBetween} from "utils/generateData";
import {PieGraphicStyled} from "./PieChart.styles";
import {options} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";
import {useOptionSelectMonth} from "hooks/useOptionSelectMonth";
// import PieChartD3 from "./PieChartD3";
// following this guide: https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app
const testData = [
	{type: "Pisos", percentage: 30},
	{type: "Garages", percentage: 10},
	{type: "Locales", percentage: 40},
	{type: "Chalets", percentage: 20},
];

const useD3 = (renderChartFn, dependencies) => {
	const ref = useRef();

	useEffect(() => {
		renderChartFn(d3.select(ref.current));
		return () => {};
	}, dependencies);
	return ref;
};

function PieChart({data}) {
	const totalPisos = data.reduce((prev, curr) => prev + curr.pisos, 0);
	const totalChalets = data.reduce((prev, curr) => prev + curr.chalets, 0);
	const totalGarages = data.reduce((prev, curr) => prev + curr.garages, 0);
	const totalLocales = data.reduce((prev, curr) => prev + curr.locales, 0);

	const chartData = [
		{type: "Pisos", total: totalPisos},
		{type: "Garages", total: totalGarages},
		{type: "Locales", total: totalLocales},
		{type: "Chalets", total: totalChalets},
	];

	console.log("totalPisos: ");
	console.log(totalPisos);
	console.log("totalChalets: ");
	console.log(totalChalets);
	console.log("totalGarages: ");
	console.log(totalGarages);
	console.log("totalLocales: ");
	console.log(totalLocales);

	const ref = useD3(
		(graph) => {
			let svgWidth = 500,
				svgHeight = 300,
				radius = Math.min(svgWidth, svgHeight) / 2;
			const svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

			//Create group element to hold pie chart
			const g = graph
				.append("g")
				.attr("transform", "translate(" + radius * 2 + "," + radius + ")");

			let color = d3.scaleOrdinal(d3.schemeAccent);

			const pie = d3.pie().value(function (d) {
				return d.total;
			});

			const path = d3.arc().outerRadius(radius).innerRadius(0);

			const arc = g.selectAll("arc").data(pie(chartData)).enter().append("g");

			arc.append("path")
				.attr("d", path)
				.attr("fill", function (d) {
					return color(d.data.total);
				});

			const label = d3.arc().outerRadius(radius).innerRadius(0);

			arc.append("text")
				.attr("transform", function (d) {
					return "translate(" + label.centroid(d) + ")";
				})
				.attr("text-anchor", "middle")
				.text(function (d) {
					return d.data.type + ":" + d.data.total + "%";
				});
		},
		[chartData.length]
	);

	return <svg ref={ref} width="500" height="500" className="pie-chart-d3"></svg>;
}

// function PieChart({data, hideModal, active, size, year, month}) {
// 	const chartRef = useRef(null); // Creo una referencia y la inicializo vacia.
// 	const [curChart, setCurChart] = useState(undefined); // Creo una variable de estado y la inicializo sin definir.

// 	useEffect(() => {
// 		if (chartRef !== null && curChart === undefined) {
// 			setCurChart(echarts.init(chartRef.current));
// 		}
// 		// eslint-disable-next-line
// 	}, [chartRef]);

// 	const [selectedYear, setSelectedYear] = useState(year);
// 	const [selectedMonth, setSelectedMonth] = useState(month);

// 	useEffect(() => {
// 		setSelectedYear(year);
// 		setSelectedMonth(month);
// 		// eslint-disable-next-line
// 	}, [year, month]);

// 	const startYear = 2012;
// 	const endYear = 2016;
// 	const yearDifference = endYear - startYear;
// 	const optionsSelectYear = [];
// 	for (let i = 0; i < yearDifference + 1; i++) {
// 		const curYear = startYear + i;
// 		optionsSelectYear.push(
// 			<option value={curYear} key={curYear}>
// 				{curYear}
// 			</option>
// 		);
// 	}

// 	// Set graph options and data based on filters
// 	useEffect(() => {
// 		if (curChart !== undefined) {
// 			let customOptions;

// 			let yearToFilterLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
// 			const startingCut = startingCutPerYear(data[0].day, parseInt(selectedYear));
// 			const yearToFilterData = data.slice(
// 				parseInt(startingCut),
// 				parseInt(startingCut) + parseInt(yearToFilterLength)
// 			);

// 			let monthToFilterLength = getMonthLength(selectedYear, selectedMonth);
// 			const corteInicialMes = startingCutPerMonth(
// 				parseInt(selectedYear),
// 				parseInt(selectedMonth)
// 			);
// 			const monthToFilterData = yearToFilterData.slice(
// 				parseInt(corteInicialMes),
// 				parseInt(corteInicialMes) + parseInt(monthToFilterLength)
// 			);

// 			if (selectedMonth === "all") {
// 				customOptions = groupByTypePie(yearToFilterData);
// 			} else {
// 				customOptions = groupByTypePie(monthToFilterData);
// 			}

// 			options.series[0].data = customOptions;
// 			curChart.setOption({...options});
// 		}
// 	}, [curChart, selectedMonth, selectedYear, data]);

// 	useEffect(() => {
// 		if (curChart !== undefined) {
// 			window.addEventListener("resize", resizeChart);
// 			return () => {
// 				window.removeEventListener("resize", resizeChart);
// 			};
// 		}
// 		// eslint-disable-next-line
// 	}, [curChart, selectedYear]);

// 	const resizeChart = () => {
// 		curChart.resize();
// 	};

// 	// handlers
// 	const handleYearChange = (e) => {
// 		setSelectedYear(e.target.value);
// 	};
// 	const handleMonthChange = (e) => {
// 		setSelectedMonth(e.target.value);
// 	};

// 	return (
// 		<>
// 			<PieGraphicStyled>
// 				<div className="cardHeader">
// 					<h2>Vista global</h2>
// 					<div className="selectorWrapper">
// 						<select value={selectedMonth} onChange={handleMonthChange}>
// 							<option value="all">All</option>
// 							{useOptionSelectMonth()}
// 						</select>
// 						<select value={selectedYear} onChange={handleYearChange}>
// 							{optionsSelectYear}
// 						</select>
// 						<button onClick={hideModal}>
// 							<FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
// 						</button>
// 					</div>
// 				</div>
// 				<div className="cardBody">
// 					<PieChartD3 data={testData} />
// 					<div className="chart" ref={chartRef}></div>
// 					{/* {active ? (
// 					<div className="chart" ref={chartRef}></div>
// 				) : (
// 					<div className="chart" ref={chartRef}></div>
// 				)} */}
// 				</div>
// 			</PieGraphicStyled>
// 		</>
// 	);
// }

export default PieChart;
