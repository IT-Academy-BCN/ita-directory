import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import _ from "lodash";
import {groupByTypeYear, groupByTypeMonth, daysBetween} from "utils/generateData";
import {BarGraphicStyled} from "./BarGraphic.styles";
import {options, labelOption, returnMonthsData} from "./defaultOptions";
import {allMonths} from "utils/constant";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";
import {useOptionSelectMonth} from "hooks/useOptionSelectMonth";
import {thousandFormatter} from "../ChartFormatter";

function BarChart({data, hideModal, active, size, year, month}) {
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

	const returnOptionsSelectYear = (startYear, lastYear) => {
		const years = [];

		let yearsDifference = lastYear - startYear + 1;

		for (let i = 0; i < yearsDifference; i++) {
			years.push(
				<option key={parseInt(startYear) + i} value={parseInt(startYear) + i}>
					{parseInt(startYear) + i}
				</option>
			);
		}
		return years;
	};
	const optionsSelectYear = returnOptionsSelectYear(
		data[0].day.getFullYear(),
		data[data.length - 1].day.getFullYear()
	);

	// Set graph options and data based on filters
	useEffect(() => {
		if (curChart !== undefined) {
			handleLabelDisplay();
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
				customOptions = groupByTypeYear(yearToFilterData);
			} else {
				customOptions = groupByTypeMonth(monthToFilterData);
			}

			options.xAxis[0].data =
				selectedMonth === "all"
					? returnMonthsData(allMonths, "shortName")
					: [returnMonthsData(allMonths, "shortName")[selectedMonth]];

			//Change labels to display when only a month is selected
			if (selectedMonth !== "all") {
				for (let i = 0; i < options.series.length; i++) {
					options.series[i].data = customOptions[i];
				}
			}

			options.series = _.merge(options.series, customOptions);
			curChart.setOption({...options});
		}
		// eslint-disable-next-line
	}, [curChart, selectedMonth, selectedYear, data]);

	const resizeChart = () => {
		curChart.resize();
	};

	const handleLabelDisplay = () => {
		//Hide labels if display width is smaller than 992px
		let currentWidth = window.innerWidth;
		labelOption.show = currentWidth >= 992 ? true : false;
		for (let i = 0; i < options.series.length; i++) {
			options.series[i].label = labelOption;
		}
		//Handle yaxis labels when display is smaller than 600px
		options.yAxis = {
			...options.yAxis,
			axisLabel: {
				formatter: thousandFormatter,
				fontSize: currentWidth < 600 ? 8 : null,
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

	// handlers
	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<BarGraphicStyled>
			<div className="header">
				<h2> Ventas anuales por tipo </h2>
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
			{active ? (
				<div className="chart" ref={chartRef}></div>
			) : (
				<div className="chart" ref={chartRef}></div>
			)}
		</BarGraphicStyled>
	);
}

export default BarChart;
