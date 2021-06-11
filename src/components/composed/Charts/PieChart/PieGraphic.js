import React, {useState, useRef, useEffect, Fragment} from "react";
import * as echarts from "echarts";
import {groupByTypeYearPie, groupByTypeMonthPie, daysBetween} from "utils/generateData";
import {
	CardHeader,
	CardTitle,
	CardSelector,
	Chart,
	CardSelectorWrapper,
	CardOpenModal,
	CardChart,
	CardBody,
} from "./PieChart.styles";
import {options, optionsSelectMonth} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";
// import {Container} from "theme/GlobalStyles";

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
			/* 			let customOptions;

			if (selectedYear === "2012") {
				customOptions = _.filter(options.series, options.series[0]);
			}
			if (selectedYear === "2013") {
				customOptions = _.filter(options.series, options.series[1]);
				console.log("entro aquí");
			}
			if (selectedYear === "2014") {
				customOptions = _.filter(options.series, options.series[2]);
			}
			if (selectedYear === "2015") {
				customOptions = _.filter(options.series, options.series[3]);
			}
			if (selectedYear === "2016") {
				customOptions = _.filter(options.series, options.series[4]);
			} */

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
				customOptions = groupByTypeYearPie(yearToFilterData);
			} else {
				customOptions = groupByTypeMonthPie(monthToFilterData);
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
		<Fragment>
			<CardChart>
				<CardHeader>
					<CardTitle>Vista global</CardTitle>
					<CardSelectorWrapper>
						<CardSelector value={selectedMonth} onChange={handleMonthChange}>
							<option value="all">All</option>
							{optionsSelectMonth}
						</CardSelector>
						<CardSelector value={selectedYear} onChange={handleYearChange}>
							{optionsSelectYear}
						</CardSelector>
						<CardOpenModal onClick={hideModal}>
							<FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
						</CardOpenModal>
					</CardSelectorWrapper>
				</CardHeader>
				<CardBody>
					{active ? (
						<Chart
							style={{width: `${size[0]}px`, height: `${size[1]}px`}}
							ref={chartRef}
						></Chart>
					) : (
						<Chart ref={chartRef}></Chart>
					)}
				</CardBody>
			</CardChart>
		</Fragment>
	);
}

export default PieChart;
