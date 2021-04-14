/* eslint-disable no-unused-vars */
/*
 * 1. Generar las fechas con los datos asociados.
 * 1.1 Para generar las fechas tendre una fecha de inicio y otra de fin.
 * 2. Filtrar las fechas por años.
 * 2.1 Para filtrar por años le dire día de principio y día de fin.
 * 3. Filtrar las fechas por meses.
 * 3.1 Para filtrar por meses le dire el año, el día de principio y el día de fin.
 **/
const dayInMiliseconds = 24 * 60 * 60 * 1000; // Día en milisegundos porque el objetdo Date de JS funciona en milisegundos.

// PARTE 1
const data = generateData("2012-01-01", "2016-12-31", [10, 20]);

// PARTE 2
let yearToFilter = 2014;
let yearToFilterLength = daysBetween(`${yearToFilter}-01-01`, `${yearToFilter}-12-31`);
const corteInicial = corteInicialPorAnios(data[0].day, yearToFilter); // 3542, 3542 + 366
const yearToFilterData = data.slice(
	parseInt(corteInicial),
	parseInt(corteInicial) + parseInt(yearToFilterLength)
);

// PARTE 3
let monthToFilter = 3;
let monthToFilterLength = getMonthLength(yearToFilter, monthToFilter);
const corteInicialMes = corteInicialPorMeses(yearToFilter, monthToFilter);
const monthToFilterData = yearToFilterData.slice(
	parseInt(corteInicialMes),
	parseInt(corteInicialMes) + parseInt(monthToFilterLength)
);

function corteInicialPorAnios(initialYear, yearToFilter) {
	return daysBetween(`${initialYear.getFullYear()}-01-01`, `${yearToFilter}-01-01`) - 1;
}

function corteInicialPorMeses(year, month) {
	return daysBetween(`${year}-01-01`, `${year}-${addLeadingZero(month + 1)}-01`) - 1;
}

function getMonthLength(year, month) {
	let numMonth = parseInt(month) + 1;
	let numYear = parseInt(year);
	return new Date(numYear, numMonth, 0).getDate();
}

function addLeadingZero(num) {
	if (num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

// Día de entrada. Días de salida. Rango de los valores.
function generateData(startDate, endDate, rangeValues) {
	const data = [];
	const [min, max] = rangeValues;
	const days = daysBetween(startDate, endDate);
	for (let i = 0; i < days; i++) {
		let day = new Date(new Date(startDate).getTime() + dayInMiliseconds * i);
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
}

// Entre primer y último día, saber cuantos días tengo
function daysBetween(firstDay, lastDay) {
	const fD = new Date(firstDay);
	const lD = new Date(lastDay);
	const miliSecondsDifference = Math.abs(fD - lD);
	return Math.ceil(miliSecondsDifference / dayInMiliseconds) + 1;
}

// Función para generar valores aleatorios en un rango de números (mín y máx)
function randomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
