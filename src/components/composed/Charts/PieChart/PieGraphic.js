import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import {groupByTypePie, daysBetween} from "utils/generateData";
import {PieGraphicStyled} from "./PieChart.styles";
import {options, optionsSelectMonth} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";

function PieChart({data, hideModal, active, size, year, month}) {
	const chartRef = useRef(null); // Creo una referencia y la inicializo vacia.
	const [curChart, setCurChart] = useState(undefined); // Creo una variable de estado y la inicializo sin definir.

	useEffect(() => {
		if (chartRef !== null && curChart === undefined) {
			setCurChart(echarts.init(chartRef.current));
		}
		// eslint-disable-next-line
	}, [chartRef]);

	const [selectedYear, setSelectedYear] = useState(year);
	const [selectedMonth, setSelectedMonth] = useState(month);

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

	// Set graph options and data based on filters
	useEffect(() => {
		if (curChart !== undefined) {
			let customOptions;

			let yearToFilterLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
			const startingCut = startingCutPerYear(data[0].day, parseInt(selectedYear));
			const yearToFilterData = data.slice(
				parseInt(startingCut),
				parseInt(startingCut) + parseInt(yearToFilterLength)
			);

			let monthToFilterLength = getMonthLength(selectedYear, selectedMonth);
			const corteInicialMes = startingCutPerMonth(
				parseInt(selectedYear),
				parseInt(selectedMonth)
			);
			const monthToFilterData = yearToFilterData.slice(
				parseInt(corteInicialMes),
				parseInt(corteInicialMes) + parseInt(monthToFilterLength)
			);

			if (selectedMonth === "all") {
				customOptions = groupByTypePie(yearToFilterData);
			} else {
				customOptions = groupByTypePie(monthToFilterData);
			}

			options.series[0].data = customOptions;
			curChart.setOption({...options});
		}
	}, [curChart, selectedMonth, selectedYear, data]);

	useEffect(() => {
		if (curChart !== undefined) {
			window.addEventListener("resize", resizeChart);
			return () => {
				window.removeEventListener("resize", resizeChart);
			};
		}
		// eslint-disable-next-line
	}, [curChart, selectedYear]);

	const resizeChart = () => {
		curChart.resize();
	};

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
						{optionsSelectMonth}
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
				{active ? (
					<div
						className="chart"
						style={{width: `${size[0]}px`, height: `${size[1]}px`}}
						ref={chartRef}
					></div>
				) : (
					<div className="chart" ref={chartRef}></div>
				)}
			</div>
		</PieGraphicStyled>
	);
}

export default PieChart;
