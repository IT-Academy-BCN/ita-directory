import {daysBetween} from "./generateData";

export const startingCutPerYear = (initialYear, yearToFilter) => {
	return daysBetween(`${initialYear.getFullYear()}-01-01`, `${yearToFilter}-01-01`) - 1;
};

export const startingCutPerMonth = (year, month) => {
	return daysBetween(`${year}-01-01`, `${year}-${addLeadingZero(month + 1)}-01`) - 1;
};

export const getMonthLength = (year, month) => {
	let numMonth = parseInt(month) + 1;
	let numYear = parseInt(year);
	return new Date(numYear, numMonth, 0).getDate();
};

function addLeadingZero(num) {
	if (num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}
