/* eslint-disable no-multi-assign */
/* eslint-disable guard-for-in */
const returnNumFromRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)
const dayInMiliseconds = 24 * 60 * 60 * 1000
const randomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

export const daysBetween = (firstDay: string, lastDay: string) => {
  const fD = new Date(firstDay)
  const lD = new Date(lastDay)
  const miliSecondsDifference = Math.abs(Number(fD) - Number(lD))
  return Math.ceil(miliSecondsDifference / dayInMiliseconds) + 1
}

type TGenerateData = (startDay: Date, days: number, valueRange: number[]) => TData[]

type TData = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
  total?: number
}
export const generateData: TGenerateData = (startDay, days, valueRange) => {
  const data = []

  for (let i = 0; i < days; i += 1) {
    // 24 * 60 * 60 * 1000 -> día en milisegundos
    const day = new Date(startDay.getTime() + 24 * 60 * 60 * 1000 * i)
    const option = {
      day,
      pisos: returnNumFromRange(valueRange[0], valueRange[1]),
      garajes: returnNumFromRange(valueRange[0], valueRange[1]),
      locales: returnNumFromRange(valueRange[0], valueRange[1]),
      chalets: returnNumFromRange(valueRange[0], valueRange[1]),
    }
    data.push(option)
  }
  return data
}

export const generateDataLine: TGenerateData = (startDay, days, rangeValues) => {
  const data = []
  const [min, max] = rangeValues

  for (let i = 0; i < days; i += 1) {
    const day = new Date(startDay.getTime() + dayInMiliseconds * i)
    const option: TData = {
      day,
      pisos: randomValue(min, max),
      garajes: randomValue(min, max),
      locales: randomValue(min, max),
      chalets: randomValue(min, max),
    }
    option.total = option.pisos + option.garajes + option.locales + option.chalets
    data.push(option)
  }
  return data
}

type TMonths = {
  [key: number]: { pisos: number; locales: number; garajes: number; chalets: number }
}

export const groupByType = (yearlyData: TData[]) => {
  const months: TMonths = {
    0: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    1: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    2: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    3: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    4: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    5: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    6: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    7: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    8: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    9: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    10: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    11: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
  }

  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    const curMonth = el.day.getMonth()

    months[curMonth].pisos = months[curMonth].pisos += el.pisos
    months[curMonth].locales = months[curMonth].locales += el.locales
    months[curMonth].garajes = months[curMonth].garajes += el.garajes
    months[curMonth].chalets = months[curMonth].chalets += el.chalets
  }

  const totalpisos = []
  const totallocales = []
  const totalgarajes = []
  const totalchalets = []

  for (const month in months) {
    totalpisos.push(months[month].pisos)
    totallocales.push(months[month].locales)
    totalgarajes.push(months[month].garajes)
    totalchalets.push(months[month].chalets)
  }

  return [
    { data: totalpisos },
    { data: totallocales },
    { data: totalgarajes },
    { data: totalchalets },
  ]
}

export const groupByYear = (selectedYear: string, data: TData[]) =>
  data.map((e) => e.day.getFullYear()).indexOf(parseInt(selectedYear, 10))

export const getDaysInMonth = (month: string, year: number) =>
  new Date(year, parseInt(month, 10) + 1, 0).getDate()

export const groupByFilter = (selectedMonth: string, selectedYear: string, data: TData[]) =>
  data
    .map((e) => `${e.day.getMonth()}, ${e.day.getDate()}, ${e.day.getFullYear()}`)
    .indexOf(`${selectedMonth}, 1, ${selectedYear}`)

export const getByDays = (monthlyData: TData[]) => {
  const days = []

  for (let i = 0; i < monthlyData.length; i += 1) {
    const el = monthlyData[i]
    days.push(el.total)
  }
  return days
}

export const groupByTypeMonth = (monthData: TData[]) => {
  let totalpisos = 0
  let totallocales = 0
  let totalgarajes = 0
  let totalchalets = 0
  for (let i = 0; i < monthData.length; i += 1) {
    const el = monthData[i]
    totalpisos += el.pisos
    totallocales += el.locales
    totalgarajes += el.garajes
    totalchalets += el.chalets
  }
  return [
    { data: [totalpisos] },
    { data: [totallocales] },
    { data: [totalgarajes] },
    { data: [totalchalets] },
  ]
}

export const groupByTypePie = (yearlyData: TData[]) => {
  let totalpisos = 0
  let totallocales = 0
  let totalgarajes = 0
  let totalchalets = 0
  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    totalpisos += el.pisos
    totallocales += el.locales
    totalgarajes += el.garajes
    totalchalets += el.chalets
  }
  return [
    { value: totalpisos, name: 'Pisos' },
    { value: totallocales, name: 'Locales' },
    { value: totalgarajes, name: 'Garages' },
    { value: totalchalets, name: 'Chalets' },
  ]
}

export const groupByTypeYear = (yearlyData: TData[]) => {
  const months: TMonths = {
    0: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    1: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    2: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    3: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    4: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    5: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    6: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    7: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    8: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    9: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    10: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
    11: { pisos: 0, locales: 0, garajes: 0, chalets: 0 },
  }

  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    const curMonth = el.day.getMonth()

    months[curMonth].pisos = months[curMonth].pisos += el.pisos
    months[curMonth].locales = months[curMonth].locales += el.locales
    months[curMonth].garajes = months[curMonth].garajes += el.garajes
    months[curMonth].chalets = months[curMonth].chalets += el.chalets
  }

  const totalpisos = []
  const totallocales = []
  const totalgarajes = []
  const totalchalets = []

  for (const month in months) {
    totalpisos.push(months[month].pisos)
    totallocales.push(months[month].locales)
    totalgarajes.push(months[month].garajes)
    totalchalets.push(months[month].chalets)
  }

  return [
    { data: totalpisos },
    { data: totallocales },
    { data: totalgarajes },
    { data: totalchalets },
  ]
}

type TMonthsNumber = {
  [key: number]: number
}

export const groupByMonth = (yearlyData: TData[]) => {
  const months: TMonthsNumber = {
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
  }

  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    const curMonth = el.day.getMonth()
    months[curMonth] = months[curMonth] += el.total!
  }

  const finalArr = []
  for (const month in months) {
    finalArr.push(months[month])
  }

  return finalArr
}
