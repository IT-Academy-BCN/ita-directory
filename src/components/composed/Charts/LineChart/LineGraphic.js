import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import {daysBetween, groupByMonth, getByDays} from "utils/generateData";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import styles
import {LineGraphicStyled} from "./LineChart.styles";
import {options} from "./defaultOptions";

//eslint-disable-next-line
const monthNames = {
	0: {name: "January", shortName: "Jan"},
	1: {name: "February", shortName: "Feb"},
	2: {name: "March", shortName: "Mar"},
	3: {name: "April", shortName: "Apr"},
	4: {name: "May", shortName: "May"},
	5: {name: "Juny", shortName: "Jun"},
	6: {name: "July", shortName: "Jul"},
	7: {name: "August", shortName: "Aug"},
	8: {name: "September", shortName: "Sep"},
	9: {name: "October", shortName: "Oct"},
	10: {name: "November", shortName: "Nov"},
	11: {name: "December", shortName: "Dec"},
};

// month label for x axis
const monthsLabel = [];
Object.entries(monthNames).map((month) => monthsLabel.push(month[1].shortName));

// option with months for select input
let optionsSelectMonth = [];
const monthKeys = Object.keys(monthNames);

for (let i = 0; i < monthKeys.length; i++) {
	const el = monthNames[monthKeys[i]];
	optionsSelectMonth.push(
		<option value={i} key={el.shortName}>
			{el.name}
		</option>
	);
}

// options with years for select input
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

function LineChart({data, active, hideModal, year, month, size}) {
	const lineChartRef = useRef(null);
	const [curChart, setCurChart] = useState(undefined);

	useEffect(() => {
		if (lineChartRef !== null && curChart === undefined)
			setCurChart(echarts.init(lineChartRef.current));
		// eslint-disable-next-line
	}, [lineChartRef]);

	const [selectedYear, setSelectedYear] = useState(year);
	const [selectedMonth, setSelectedMonth] = useState(month);
	const [detail, setDetail] = useState(month);

	useEffect(() => {
		setSelectedYear(year);
		setDetail(month);
		setSelectedMonth(month);
		// eslint-disable-next-line
	}, [year, month]);

	useEffect(() => {
		if (curChart !== undefined) {
			// Obtengo días entre el 1 de Enero y 31 de Diciembre del año correspondiente
			const daysLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);

			// Determinar length del array según el año elegido
			const calculateDataLength = (selectedYear) => {
				let dataLength = data.length;
				let years = 2016 - selectedYear;
				let selYear = parseInt(selectedYear);

				for (let i = 0; i < years; i++) {
					dataLength -= daysBetween(`${selYear + i}-01-01`, `${selYear + i}-12-31`);
				}
				return dataLength;
			};

			// De los datos totales, corto el array.
			// 1. Calculo la posición hasta dónde cortar
			let sliceEnd = calculateDataLength(selectedYear);
			// 2. Corto el array hasta la posición calculada
			let daysYearData = 0;
			selectedYear !== 2012
				? (daysYearData = data.slice(sliceEnd - daysLength, sliceEnd))
				: (daysYearData = data.slice(0, daysLength));

			const monthValues = groupByMonth(daysYearData);

			const monthLength = (year, month) => {
				let numMonth = parseInt(month) + 1;
				let numYear = parseInt(year);
				return new Date(numYear, numMonth, 0).getDate();
			};

			// Filter by month
			const daysInMonth = monthLength(selectedYear, detail);
			const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);
			const sliceMonth = (year, month) =>
				daysBetween(`${year}-01-01`, `${year}-${addLeadingZero(month + 1)}-01`) - 1;
			const sliceInitialPoint = sliceMonth(parseInt(selectedYear), parseInt(detail));

			let daysMonthData = 0;
			detail !== "all" && detail !== "0"
				? (daysMonthData = daysYearData.slice(
						sliceInitialPoint,
						sliceInitialPoint + daysInMonth
				  ))
				: (daysMonthData = daysYearData.slice(0, daysInMonth));

			const dayValues = getByDays(daysMonthData);

			// Labels x-axis
			const daysLabel = (selectedMonth, selectedYear) => {
				const numSelectedMonth = parseInt(selectedMonth);
				const numSelectedYear = parseInt(selectedYear);
				const monthSelectedLength = monthLength(numSelectedYear, numSelectedMonth);
				const daysLabel = [];
				for (let i = 0; i < monthSelectedLength; i++) {
					daysLabel.push(i + 1);
				}
				return daysLabel;
			};

			const xAxis = detail === "all" ? monthsLabel : daysLabel(detail, selectedYear);

			options.series[0].data = detail === "all" ? monthValues : dayValues;
			options.xAxis.data = xAxis;
			const lineChart = echarts.init(lineChartRef.current);
			handleLabelDisplay();
			lineChart.setOption({...options});
		}
		// eslint-disable-next-line
	}, [curChart, data, selectedMonth, selectedYear, detail]);

	const resizeChart = () => {
		curChart.resize();
	};

	const handleLabelDisplay = () => {
		let currentWidth = window.innerWidth;
		//Handle yaxis labels when display is smaller than 600px
		options.yAxis = {
			...options.yAxis,
			axisLabel: {
				fontSize: currentWidth < 600 ? 8 : "",
				// rotate: currentWidth < 600 ? 90 : 0,
			},
		};
		curChart.setOption({...options});
		resizeChart();
	};

	// Handle label display and resize the chart when window resizes
	useEffect(() => {
		if (curChart !== undefined) {
			window.addEventListener("resize", handleLabelDisplay);
			return () => {
				window.removeEventListener("resize", handleLabelDisplay);
			};
		}
		// eslint-disable-next-line
	}, [curChart, size]);

	return (
		<LineGraphicStyled>
			<div className="cardHeader">
				<h2>Ventas anuales continuas</h2>
				<div className="selectorWrapper">
					<select value={detail} onChange={(e) => setDetail(e.target.value)}>
						<option value="all">All</option>
						{optionsSelectMonth}
					</select>
					<select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
						{optionsSelectYear}
					</select>
					<button onClick={hideModal}>
						<FontAwesomeIcon
							icon={active ? faTimes : faExternalLinkAlt}
							style={{color: "#e22e2e"}}
						/>
					</button>
				</div>
			</div>
			<div className="chart" ref={lineChartRef}></div>
		</LineGraphicStyled>
	);
}

export default LineChart;
