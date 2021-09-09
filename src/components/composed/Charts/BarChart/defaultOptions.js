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

export const allMonths = {
	0: {name: "January", shortName: "Jan"},
	1: {name: "February", shortName: "Feb"},
	2: {name: "March", shortName: "Mar"},
	3: {name: "April", shortName: "Apr"},
	4: {name: "May", shortName: "May"},
	5: {name: "June", shortName: "Jun"},
	6: {name: "July", shortName: "Jul"},
	7: {name: "August", shortName: "Feb"},
	8: {name: "September", shortName: "Sep"},
	9: {name: "Octubre", shortName: "Oct"},
	10: {name: "November", shortName: "Nov"},
	11: {name: "December", shortName: "Dec"},
};

export const returnMonthsData = (months, key) => {
	const data = [];
	for (let i = 0; i < Object.entries(months).length; i++) {
		const element = allMonths[i];
		data.push(element[key]);
	}
	return data;
};

export const optionsSelectMonth = [];

for (let i = 0; i < Object.entries(allMonths).length; i++) {
	const el = allMonths[i].name;
	optionsSelectMonth.push(
		<option key={i} value={i}>
			{el}
		</option>
	);
}
