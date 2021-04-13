import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import _ from "lodash";
import {groupByType, groupByYear} from "utils/generateData";
import {
	Card,
	CardHeader,
	CardTitle,
	CardSelector,
	Chart,
	CardSelectorWrapper,
	CardOpenModal,
} from "./BarChart.styles";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let config = {
	rotate: 90,
	align: "left",
	verticalAlign: "middle",
	position: "insideBottom",
	distance: 15,
};

let labelOption = {
	show: true,
	position: config.position,
	distance: config.distance,
	align: config.align,
	verticalAlign: config.verticalAlign,
	rotate: config.rotate,
	formatter: "{c}  {name|{a}}",
	fontSize: 16,
	rich: {
		name: {},
	},
};

const options = {
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow",
		},
	},
	legend: {
		data: ["Pisos", "Garages", "Locales", "Chalets"],
	},
	toolbox: {
		show: true,
		orient: "vertical",
		left: "right",
		top: "center",
		feature: {
			mark: {show: true},
			dataView: {show: true, readOnly: false},
			magicType: {show: true, type: ["line", "bar", "stack", "tiled"]},
			restore: {show: true},
			saveAsImage: {show: true},
		},
	},
	xAxis: [
		{
			type: "category",
			axisTick: {show: false},
			data: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
		},
	],
	yAxis: [
		{
			type: "value",
		},
	],
	series: [
		{
			name: "Pisos",
			type: "bar",
			barGap: 0,
			label: labelOption,
			emphasis: {
				focus: "series",
			},
			data: [320, 332, 301, 334, 390],
		},
		{
			name: "Garages",
			type: "bar",
			label: labelOption,
			emphasis: {
				focus: "series",
			},
			data: [220, 182, 191, 234, 290],
		},
		{
			name: "Locales",
			type: "bar",
			label: labelOption,
			emphasis: {
				focus: "series",
			},
			data: [150, 232, 201, 154, 190],
		},
		{
			name: "Chalets",
			type: "bar",
			label: labelOption,
			emphasis: {
				focus: "series",
			},
			data: [98, 77, 101, 99, 40],
		},
	],
};

function BarChart({data, handleClick}) {
	const chartRef = useRef(null);
	const [selectedYear, setSelectedYear] = useState("2016");

	// console.log("data", data);
	useEffect(() => {
		// const daysLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
		// De los datos totales, corto el array para tener los días de un año. Ahora mismo, solo corto por el final.
		const daysYearData = data.slice(groupByYear(selectedYear, data), data.length);

		// array con cuatro objetos: uno por cada tipo de immueble
		const customOptions = groupByType(daysYearData);
		options.series = _.merge(options.series, customOptions);

		const chart = echarts.init(chartRef.current);
		chart.setOption({...options});

		window.onresize = function () {
			chart.resize();
		};
	}, [data, selectedYear]);

	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle> Ventas del año {selectedYear} </CardTitle>
				<CardSelectorWrapper>
					<CardSelector defaultValue="jan">
						<option value="jan">January</option>
						<option value="feb">February</option>
						<option value="mar">March</option>
						<option value="apr">April </option>
						<option value="may">May</option>
						<option value="jun">June</option>
						<option value="jul">July</option>
						<option value="may">May</option>
						<option value="aug">August</option>
						<option value="sep">September</option>
						<option value="oct">Octubre</option>
						<option value="nov">November</option>
						<option value="dec">December</option>
					</CardSelector>
					<CardSelector defaultValue={selectedYear} onChange={handleYearChange}>
						<option value="2012">2012</option>
						<option value="2013">2013</option>
						<option value="2014">2014</option>
						<option value="2015">2015</option>
						<option value="2016">2016</option>
					</CardSelector>
					<CardOpenModal onClick={handleClick}>
						<FontAwesomeIcon icon={faExternalLinkAlt} />
					</CardOpenModal>
				</CardSelectorWrapper>
			</CardHeader>
			<Chart ref={chartRef}></Chart>
		</Card>
	);
}

export default BarChart;
