let config = {
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

export const options = {
	tooltip: {
		trigger: "item",
	},
	legend: {
		data: ["Pisos", "Garages", "Locales", "Chalets"],
	},

	series: [
		{
			name: "Garages",
			type: "pie",
			radius: "60%",
			label: labelOption,
			data: [220, 182, 191, 234, 290],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
		},
		{
			name: "Pisos",
			type: "pie",
			radius: "60%",
			barGap: 0,
			label: labelOption,
			data: [320, 332, 301, 334, 390],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
		},

		{
			name: "Locales",
			type: "pie",
			radius: "60%",
			label: labelOption,
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
			data: [150, 232, 201, 154, 190],
		},
		{
			name: "Chalets",
			type: "pie",
			radius: "60%",
			label: labelOption,
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
			data: [98, 77, 101, 99, 40],
		},
	],
};
