import React, {useRef, useEffect} from "react";
import Body from "components/layout/Body/Body";
// import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

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

const option = {
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
			data: ["2012", "2013", "2014", "2015", "2016"],
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

function BarChart() {
	const barChartRef = useRef(null);

	useEffect(() => {
		const barChart = echarts.init(barChartRef.current);
		barChart.setOption(option);
	}, []);
	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<div style={{width: "100%", height: 600}} ref={barChartRef}></div>
		</Body>
	);
}

export default BarChart;
