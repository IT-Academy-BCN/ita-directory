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
