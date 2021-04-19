import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import _ from "lodash";
import {
	daysBetween,
	getDaysInMonth,
	groupByFilter,
	groupByType,
	groupByTypeMonth,
	groupByYear,
} from "utils/generateData1";
import {CardChart, CardHeader, CardBody, CardContainer} from "./PieChart.styles";
import {Container} from "theme/GlobalStyles";
import {options} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PieChart({data, active, hideModal}) {
	const chartRef = useRef(null);
	const [curChart, setCurChart] = useState(undefined);
	useEffect(() => {
		if (chartRef !== null && curChart === undefined) {
			setCurChart(echarts.init(chartRef.current));
		}
		// eslint-disable-next-line
	}, [chartRef]);

	const [selectedYear, setSelectedYear] = useState("2016");
	const [selectedMonth] = useState("all");
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
			const daysLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
			const groupFilterMonthYear = groupByFilter(selectedMonth, selectedYear, data);
			const groupFilterYear = groupByYear(selectedYear, data);
			let daysYearData;
			let customOptions;

			if (groupFilterMonthYear === -1) {
				daysYearData = data.slice(groupFilterYear, groupFilterYear + daysLength);
				customOptions = groupByType(daysYearData);
			} else {
				daysYearData = data.slice(
					groupFilterMonthYear,
					groupFilterMonthYear + getDaysInMonth(selectedMonth, selectedYear)
				);
				customOptions = groupByTypeMonth(daysYearData);
			}

			options.series = _.merge(options.series, customOptions);

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

	return (
		<Container>
			<CardChart style={{marginTop: 20, marginBottom: 40, width: "30%"}}>
				<CardHeader>
					<h3>Ventas anuales {selectedYear}</h3>
					<CardContainer>
						<select
							defaultValue={selectedYear}
							onChange={(e) => setSelectedYear(e.target.value)}
						>
							{optionsSelectYear}
						</select>
						<button className="open-modal" onClick={() => hideModal()}>
							<FontAwesomeIcon
								icon={active ? faTimes : faExternalLinkAlt}
								style={{color: "#e22e2e"}}
							/>
						</button>
					</CardContainer>
				</CardHeader>
				<CardBody ref={chartRef}></CardBody>
			</CardChart>
		</Container>
	);
}

export default PieChart;
