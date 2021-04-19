import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import _ from "lodash";
import {groupByTypeYear, groupByTypeMonth, daysBetween} from "utils/generateData";
import {
	Card,
	CardHeader,
	CardTitle,
	CardSelector,
	Chart,
	CardSelectorWrapper,
	CardOpenModal,
} from "./BarChart.styles";
import {options, allMonths, returnMonthsData, optionsSelectMonth} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";

function BarChart({data, active, hideModal}) {
	const chartRef = useRef(null); // Creo una referencia y la inicializo vacia.
	const [curChart, setCurChart] = useState(undefined); // Creo una variable de estado y la inicializo sin definir.
	useEffect(() => {
		if (chartRef !== null && curChart === undefined) {
			setCurChart(echarts.init(chartRef.current));
		}
		// eslint-disable-next-line
	}, [chartRef]);

	const [selectedYear, setSelectedYear] = useState("2016");
	const [selectedMonth, setSelectedMonth] = useState("all");

	// console.log(data[0].day.getFullYear(), data[data.length - 1].day.getFullYear())

	// Set graph options and data based on filters
	useEffect(() => {
		if (curChart !== undefined) {
			let customOptions;

			const startingCut = startingCutPerYear(data[0].day, parseInt(selectedYear));
			const yearToFilterLength = daysBetween(
				`${selectedYear}-01-01`,
				`${selectedYear}-12-31`
			);
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
				customOptions = groupByTypeYear(yearToFilterData);
			} else {
				customOptions = groupByTypeMonth(monthToFilterData);
			}

			options.series = _.merge(options.series, customOptions);
			options.xAxis[0].data =
				selectedMonth === "all"
					? returnMonthsData(allMonths, "shortName")
					: [returnMonthsData(allMonths, "shortName")[selectedMonth]];

			curChart.setOption({...options});
		}
		// eslint-disable-next-line
	}, [curChart, selectedMonth, selectedYear, data]);

	const resizeChart = () => {
		curChart.resize();
	};

	// Resize the chart when window resizes
	useEffect(() => {
		if (curChart !== undefined) {
			window.addEventListener("resize", resizeChart);
			return () => {
				window.removeEventListener("resize", resizeChart);
			};
		}
		// eslint-disable-next-line
	}, [curChart]);

	// handlers
	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle> Ventas del año {selectedYear} </CardTitle>
				<CardSelectorWrapper>
					<CardSelector defaultValue={selectedMonth} onChange={handleMonthChange}>
						<option value="all">All</option>
						{optionsSelectMonth}
					</CardSelector>
					<CardSelector defaultValue={selectedYear} onChange={handleYearChange}>
						<option value="2012">2012</option>
						<option value="2013">2013</option>
						<option value="2014">2014</option>
						<option value="2015">2015</option>
						<option value="2016">2016</option>
						{/* {optionsSelectYear} */}
					</CardSelector>
					<CardOpenModal onClick={hideModal}>
						<FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
					</CardOpenModal>
				</CardSelectorWrapper>
			</CardHeader>
			<Chart ref={chartRef}></Chart>
		</Card>
	);
}

export default BarChart;
