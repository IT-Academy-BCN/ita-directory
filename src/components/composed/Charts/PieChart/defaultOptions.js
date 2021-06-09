export const options = {
	tooltip: {
		trigger: "item",
	},
	legend: {
		data: ["Pisos", "Garages", "Locales", "Chalets"],
	},

	toolbox: {
		show: true,
		orient: "row",
		left: "left",
		top: "center",
		feature: {
			dataView: {show: true, readOnly: false},
			restore: {show: true},
			saveAsImage: {show: true},
		},
	},
	dataset: {
		source: [
			["product", "2012", "2013", "2014", "2015", "2016"],
			["Pisos", 320, 332, 301, 334, 390],
			["Garages", 220, 182, 191, 234, 290],
			["Locales", 150, 232, 201, 154, 190],
			["Chalets", 98, 77, 101, 99, 40],
		],
	},
	series: [
		{
			type: "pie",
			radius: "50%",
			center: ["50%", "50%"],
			encode: {
				itemName: "product",
				value: "2012",
			},
		},
		{
			type: "pie",
			radius: "50%",
			center: ["50%", "50%"],
			encode: {
				itemName: "product",
				value: "2013",
			},
		},
		{
			type: "pie",
			radius: "50%",
			center: ["50%", "50%"],
			encode: {
				itemName: "product",
				value: "2014",
			},
		},
		{
			type: "pie",
			radius: "50%",
			center: ["50%", "50%"],
			encode: {
				itemName: "product",
				value: "2015",
			},
		},
		{
			type: "pie",
			radius: "50%",
			center: ["50%", "50%"],
			encode: {
				itemName: "product",
				value: "2016",
			},
		},
	],
};

export const optionsB = {
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
	dataset: {
		source: [
			["product", "2012", "2013", "2014", "2015", "2016"],
			["Pisos", 320, 332, 301, 334, 390],
			["Garages", 220, 182, 191, 234, 290],
			["Locales", 150, 232, 201, 154, 190],
			["Chalets", 98, 77, 101, 99, 40],
		],
	},
	series: [],
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
