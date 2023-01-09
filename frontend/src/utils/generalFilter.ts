import { daysBetween } from './generateData'

export const startingCutPerYear = (initialYear: Date, yearToFilter: string) =>
  daysBetween(`${initialYear.getFullYear()}-01-01`, `${yearToFilter}-01-01`) - 1

export const startingCutPerMonth = (year: string, month: string) =>
  daysBetween(`${year}-01-01`, `${year}-${addLeadingZero(Number(month) + 1)}-01`) - 1

export const getMonthLength = (year: string, month: string) => {
  const numMonth = parseInt(month, 10) + 1
  const numYear = parseInt(year, 10)
  return new Date(numYear, numMonth, 0).getDate()
}

function addLeadingZero(num: number) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}
