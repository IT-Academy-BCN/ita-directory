export const options = {
	tooltip: {
		trigger: "item",
	},
	legend: {
		data: ["Pisos", "Garages", "Locales", "Chalets"],
	},

	toolbox: {
		show: false,
		orient: "row",
		left: "left",
		top: "center",
		feature: {
			dataView: {show: true, readOnly: false},
			restore: {show: true},
			saveAsImage: {show: true},
		},
	},

	series: [
		{
			type: "pie",
			radius: "50%",
			center: ["50%", "50%"],

			data: [
				{value: 1048, name: "Pisos"},
				{value: 735, name: "Garages"},
				{value: 580, name: "Locales"},
				{value: 300, name: "Chalets"},
			],
		},
	],
};
