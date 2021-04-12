const returnNumFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const daysBetween = (firstDay, lastDay) => {
	const fD = new Date(firstDay);
	const lD = new Date(lastDay);
	const miliSecondsDifference = Math.abs(fD - lD);
	return Math.ceil(miliSecondsDifference / (24 * 60 * 60 * 1000)) + 1;
};

export const generateData = (startDay, days, valueRange) => {
	const data = [];

	for (let i = 0; i < days; i++) {
		// 24 * 60 * 60 * 1000 -> día en milisegundos
		let day = new Date(startDay.getTime() + 24 * 60 * 60 * 1000 * i);
		let option = {
			day: day,
			pisos: returnNumFromRange(valueRange[0], valueRange[1]),
			garages: returnNumFromRange(valueRange[0], valueRange[1]),
			locales: returnNumFromRange(valueRange[0], valueRange[1]),
			chalets: returnNumFromRange(valueRange[0], valueRange[1]),
		};
		data.push(option);
	}
	return data;
};

export const groupByType = (yearlyData) => {
	const months = {
		0: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		1: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		2: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		3: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		4: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		5: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		6: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		7: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		8: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		9: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		10: {pisos: 0, locales: 0, garages: 0, chalets: 0},
		11: {pisos: 0, locales: 0, garages: 0, chalets: 0},
	};

	for (let i = 0; i < yearlyData.length; i++) {
		const el = yearlyData[i];
		const curMonth = el.day.getMonth();

		months[curMonth].pisos = months[curMonth].pisos += el.pisos;
		months[curMonth].locales = months[curMonth].locales += el.locales;
		months[curMonth].garages = months[curMonth].garages += el.garages;
		months[curMonth].chalets = months[curMonth].chalets += el.chalets;
	}

	let totalpisos = [];
	let totallocales = [];
	let totalgarages = [];
	let totalchalets = [];

	for (const month in months) {
		totalpisos.push(months[month].pisos);
		totallocales.push(months[month].locales);
		totalgarages.push(months[month].garages);
		totalchalets.push(months[month].chalets);
	}

	return [{data: totalpisos}, {data: totallocales}, {data: totalgarages}, {data: totalchalets}];
};

export const groupByYear = (selectedYear, data) =>
	data.map((e) => e.day.getFullYear()).indexOf(parseInt(selectedYear));
