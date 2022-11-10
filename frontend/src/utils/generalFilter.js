import { daysBetween } from './generateData'

function addLeadingZero(num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}

export const startingCutPerYear = (initialYear, yearToFilter) =>
  daysBetween(`${initialYear.getFullYear()}-01-01`, `${yearToFilter}-01-01`) - 1

export const startingCutPerMonth = (year, month) =>
  daysBetween(`${year}-01-01`, `${year}-${addLeadingZero(month + 1)}-01`) - 1

export const getMonthLength = (year, month) => {
  const numMonth = parseInt(month, 10) + 1
  const numYear = parseInt(year, 10)
  return new Date(numYear, numMonth, 0).getDate()
}
