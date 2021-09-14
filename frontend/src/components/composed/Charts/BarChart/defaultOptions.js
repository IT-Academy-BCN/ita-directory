import {thousandFormatter, tooltipFormatter} from "../ChartFormatter";
import {allMonths} from "utils/constant";

let config = {
	rotate: 90,
	align: "left",
	verticalAlign: "middle",
	position: "insideBottom",
	distance: 20,
	color: "black",
};

export let labelOption = {
	show: true,
	position: config.position,
	distance: config.distance,
	align: config.align,
	verticalAlign: config.verticalAlign,
	rotate: config.rotate,
	formatter: "{c}  {name|{a}}",
	fontSize: 14,
	color: config.color,
	rich: {
		name: {},
	},
};

export const options = {
	tooltip: {
		trigger: "axis",
		formatter: tooltipFormatter,
		extraCssText: "width:150px;",
		axisPointer: {
			type: "shadow",
		},
	},
	legend: {
		data: ["Pisos", "Garages", "Locales", "Chalets"],
	},
	toolbox: {
		show: false,
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
				"Ene",
				"Feb",
				"Mar",
				"Abr",
				"May",
				"Jun",
				"Jul",
				"Ago",
				"Sep",
				"Oct",
				"Nov",
				"Dic",
			],
		},
	],
	yAxis: [
		{
			type: "value",
			axisLabel: {
				formatter: thousandFormatter,
			},
		},
	],
	series: [
		{
			name: "Pisos",
			type: "bar",
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

export const returnMonthsData = (months, key) => {
	const data = [];
	for (let i = 0; i < Object.entries(months).length; i++) {
		const element = allMonths[i];
		data.push(element[key]);
	}
	return data;
};
