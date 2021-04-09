const dayInMiliseconds = 24 * 60 * 60 * 1000;
//const initialDate = new Date(2020, 4, 8);
//const values = [30, 80];
const randomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateData = (startDay, days, rangeValues) => {
	const data = [];
	const [min, max] = rangeValues;

	for (let i = 0; i < days; i++) {
		let day = new Date(startDay.getTime() + dayInMiliseconds * i);
		//let value = randomValue(min, max);
		let option = {
			day,
			pisos: randomValue(min, max),
			garajes: randomValue(min, max),
			locales: randomValue(min, max),
			chalets: randomValue(min, max),
		};
		data.push(option);
	}
	return data;
};

//const options = generateData(initialDate, 30, values);
//console.log("options", options);
