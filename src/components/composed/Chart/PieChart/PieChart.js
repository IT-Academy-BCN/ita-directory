import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import _ from "lodash";
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
import {options, optionsB} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container} from "theme/GlobalStyles";

function PieChart({data, hideModal, active, size}) {
	const chartRef = useRef(null); // Creo una referencia y la inicializo vacia.
	const [curChart, setCurChart] = useState(undefined); // Creo una variable de estado y la inicializo sin definir.

	useEffect(() => {
		if (chartRef !== null && curChart === undefined) {
			setCurChart(echarts.init(chartRef.current));
		}
		// eslint-disable-next-line
	}, [chartRef]);

	const [selectedYear, setSelectedYear] = useState("2012");

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
			const optionsC = optionsB;

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
			}

			console.log(selectedYear);
			console.log(customOptions);
			optionsC.series = _.merge(optionsC.series, customOptions);
			console.log(optionsC);
			curChart.setOption({...optionsC});
		}
	}, [curChart, selectedYear, data]);

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

	return (
		<Container>
			<CardChart style={{marginTop: 10, marginBottom: 20, width: "100%"}}>
				<CardHeader>
					<CardTitle>Vista global</CardTitle>
					<CardSelectorWrapper>
						<CardSelector defaultValue={selectedYear} onChange={handleYearChange}>
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
		</Container>
	);
}

export default PieChart;
