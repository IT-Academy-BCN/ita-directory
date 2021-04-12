const dayInMiliseconds = 24 * 60 * 60 * 1000;
// const initialDate = new Date(2020, 4, 8);
// const values = [30, 80];
const randomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateData = (startDay, days, rangeValues) => {
	const data = [];
	const [min, max] = rangeValues;

	for (let i = 0; i < days; i++) {
		let day = new Date(startDay.getTime() + dayInMiliseconds * i);
		let option = {
			day,
			pisos: randomValue(min, max),
			garajes: randomValue(min, max),
			locales: randomValue(min, max),
			chalets: randomValue(min, max),
		};
		option["total"] = option.pisos + option.garajes + option.locales + option.chalets;
		data.push(option);
	}
	return data;
};

export const daysBetween = (firstDay, lastDay) => {
	const fD = new Date(firstDay);
	const lD = new Date(lastDay);
	const miliSecondsDifference = Math.abs(fD - lD);
	return Math.ceil(miliSecondsDifference / dayInMiliseconds) + 1;
};

export const groupByMonth = (yearlyData) => {
	const months = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
	};

	for (let i = 0; i < yearlyData.length; i++) {
		const el = yearlyData[i];
		const curMonth = el.day.getMonth();
		months[curMonth] = months[curMonth] += el.total;
	}

	let finalArr = [];
	for (const month in months) {
		finalArr.push(months[month]);
	}

	return finalArr;
};
