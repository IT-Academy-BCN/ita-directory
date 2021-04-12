const returnNumFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateData = (initialDate, years, valueRange) => {
	let myData = [];
	for (let i = 0; i < years; i++) {
		const currentDay = initialDate.getFullYear() + i;

		const obj = {
			year: currentDay,
			pisos: returnNumFromRange(valueRange[0], valueRange[1]),
			locales: returnNumFromRange(valueRange[0], valueRange[1]),
			chalets: returnNumFromRange(valueRange[0], valueRange[1]),
			garages: returnNumFromRange(valueRange[0], valueRange[1]),
		};

		myData.push(obj);
	}
	return myData;
};

export default generateData;
