function returnRandomNumFromRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function generateFakeValues(years, valuesRange, title) {
	let data = [];
	let values = [];
	for (let i = 0; i < years; i++) {
		values.push(returnRandomNumFromRange(valuesRange[0], valuesRange[1]));
	}

	const dataResult = {
		name: title,
		data: values,
	};

	data.push(dataResult);

	return data;
}

export function generateFakeDates(years) {
	let dates = [];
	let today = new Date();
	let actualYear = today.getFullYear();
	for (let i = 0; i < years; i++) {
		dates.push(actualYear - i);
	}
	return dates.reverse();
}
