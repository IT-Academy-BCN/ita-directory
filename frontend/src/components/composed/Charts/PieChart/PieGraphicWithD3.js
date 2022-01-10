import React, {useState, useRef, useEffect} from "react";
import * as d3 from "d3";
import {PieGraphicStyled} from "./PieChart.styles";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useOptionSelectMonth} from "hooks/useOptionSelectMonth";

function PieChart({data, hideModal, active, size, year, month}) {
	const [selectedYear, setSelectedYear] = useState(year);
	const [selectedMonth, setSelectedMonth] = useState(month);

	const d3Container = useRef(null);

	useEffect(() => {
		setSelectedYear(year);
		setSelectedMonth(month);
		// eslint-disable-next-line
	}, [year, month]);

	const startYear = 2012;
	const endYear = 2016;
	const yearDifference = endYear - startYear;
	const optionsSelectYear = [];
	for (let i = 0; i < yearDifference + 1; i++) {
		const curYear = startYear + i;
		optionsSelectYear.push(
			<option value={curYear} key={curYear}>
				{curYear}
			</option>
		);
	}

	let filterDataByDate;

	switch (selectedMonth) {
		case "all":
			filterDataByDate = data.filter(
				(item) => item.day.getFullYear() === parseInt(selectedYear)
			);
			break;
		case "0":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 0
			);
			break;
		case "1":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 1
			);
			break;
		case "2":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 2
			);
			break;
		case "3":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 3
			);
			break;
		case "4":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 4
			);
			break;
		case "5":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 5
			);
			break;
		case "6":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 6
			);
			break;
		case "7":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 7
			);
			break;
		case "8":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 8
			);
			break;
		case "9":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 9
			);
			break;
		case "10":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 10
			);
			break;
		case "11":
			filterDataByDate = data.filter(
				(item) =>
					item.day.getFullYear() === parseInt(selectedYear) && item.day.getMonth() === 11
			);
			break;

		default:
			filterDataByDate = data.filter(
				(item) => item.day.getFullYear() === parseInt(selectedYear)
			);
			break;
	}

	const totalPisos = filterDataByDate.reduce((prev, curr) => prev + curr.pisos, 0);
	const totalChalets = filterDataByDate.reduce((prev, curr) => prev + curr.chalets, 0);
	const totalGarages = filterDataByDate.reduce((prev, curr) => prev + curr.garages, 0);
	const totalLocales = filterDataByDate.reduce((prev, curr) => prev + curr.locales, 0);

	const chartData = [
		{type: "Pisos", total: totalPisos},
		{type: "Garages", total: totalGarages},
		{type: "Locales", total: totalLocales},
		{type: "Chalets", total: totalChalets},
	];

	useEffect(() => {
		if (data && d3Container.current) {
			let svgWidth = 500,
				svgHeight = 300,
				radius = Math.min(svgWidth, svgHeight) / 2;
			const svg = d3
				.select(d3Container.current)
				.attr("width", svgWidth)
				.attr("height", svgHeight);
			const update = svg.append("g").attr("transform", `translate(${radius * 2}, ${radius})`);

			let color = d3.scaleOrdinal(d3.schemeAccent);

			const pie = d3.pie().value((d) => d.total);

			const arc = update.selectAll("arc").data(pie(chartData)).enter().append("g"); // Do we really need this??
			const path = d3.arc().outerRadius(radius).innerRadius(0);

			arc.append("path")
				.attr("d", path)
				.attr("fill", (d) => color(d.data.total));

			const label = d3.arc().outerRadius(radius).innerRadius(0);

			arc.append("text")
				.attr("transform", (d) => `translate( ${label.centroid(d)})`)
				.attr("text-anchor", "middle")
				.text(
					(d) => `${d.data.type}: ${new Intl.NumberFormat("es-ES").format(d.data.total)}`
				);
		}
	}, [chartData, d3Container.current]);

	// handlers
	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};
	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<PieGraphicStyled>
			<div className="cardHeader">
				<h2>Vista global</h2>
				<div className="selectorWrapper">
					<select value={selectedMonth} onChange={handleMonthChange}>
						<option value="all">All</option>
						{useOptionSelectMonth()}
					</select>
					<select value={selectedYear} onChange={handleYearChange}>
						{optionsSelectYear}
					</select>
					<button onClick={hideModal}>
						<FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
					</button>
				</div>
			</div>

			<div className="cardBody">
				<div className="chart">
					<svg ref={d3Container} width="500" height="500" className="pie-chart-d3"></svg>
				</div>
			</div>
		</PieGraphicStyled>
	);
}

export default PieChart;
