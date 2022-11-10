/* eslint-disable no-multi-assign */
/* eslint-disable guard-for-in */
const returnNumFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const dayInMiliseconds = 24 * 60 * 60 * 1000
const randomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const daysBetween = (firstDay, lastDay) => {
  const fD = new Date(firstDay)
  const lD = new Date(lastDay)
  const miliSecondsDifference = Math.abs(fD - lD)
  return Math.ceil(miliSecondsDifference / dayInMiliseconds) + 1
}

export const generateData = (startDay, days, valueRange) => {
  const data = []

  for (let i = 0; i < days; i += 1) {
    // 24 * 60 * 60 * 1000 -> día en milisegundos
    const day = new Date(startDay.getTime() + 24 * 60 * 60 * 1000 * i)
    const option = {
      day,
      pisos: returnNumFromRange(valueRange[0], valueRange[1]),
      garages: returnNumFromRange(valueRange[0], valueRange[1]),
      locales: returnNumFromRange(valueRange[0], valueRange[1]),
      chalets: returnNumFromRange(valueRange[0], valueRange[1]),
    }
    data.push(option)
  }
  return data
}

export const generateDataLine = (startDay, days, rangeValues) => {
  const data = []
  const [min, max] = rangeValues

  for (let i = 0; i < days; i += 1) {
    const day = new Date(startDay.getTime() + dayInMiliseconds * i)
    const option = {
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

export const groupByType = (yearlyData) => {
  const months = {
    0: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    1: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    2: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    3: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    4: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    5: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    6: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    7: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    8: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    9: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    10: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    11: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
  }

  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    const curMonth = el.day.getMonth()

    months[curMonth].pisos = months[curMonth].pisos += el.pisos
    months[curMonth].locales = months[curMonth].locales += el.locales
    months[curMonth].garages = months[curMonth].garages += el.garages
    months[curMonth].chalets = months[curMonth].chalets += el.chalets
  }

  const totalpisos = []
  const totallocales = []
  const totalgarages = []
  const totalchalets = []

  for (const month in months) {
    totalpisos.push(months[month].pisos)
    totallocales.push(months[month].locales)
    totalgarages.push(months[month].garages)
    totalchalets.push(months[month].chalets)
  }

  return [
    { data: totalpisos },
    { data: totallocales },
    { data: totalgarages },
    { data: totalchalets },
  ]
}

export const groupByYear = (selectedYear, data) =>
  data.map((e) => e.day.getFullYear()).indexOf(parseInt(selectedYear, 10))

export const getDaysInMonth = (month, year) => new Date(year, parseInt(month, 10) + 1, 0).getDate()

export const groupByFilter = (selectedMonth, selectedYear, data) =>
  data
    .map((e) => `${e.day.getMonth()}, ${e.day.getDate()}, ${e.day.getFullYear()}`)
    .indexOf(`${selectedMonth}, 1, ${selectedYear}`)

export const getByDays = (monthlyData) => {
  const days = []

  for (let i = 0; i < monthlyData.length; i += 1) {
    const el = monthlyData[i]
    days.push(el.total)
  }
  return days
}

export const groupByTypeMonth = (monthData) => {
  let totalpisos = 0
  let totallocales = 0
  let totalgarages = 0
  let totalchalets = 0
  for (let i = 0; i < monthData.length; i += 1) {
    const el = monthData[i]
    totalpisos += el.pisos
    totallocales += el.locales
    totalgarages += el.garages
    totalchalets += el.chalets
  }
  return [
    { data: [totalpisos] },
    { data: [totallocales] },
    { data: [totalgarages] },
    { data: [totalchalets] },
  ]
}

export const groupByTypePie = (yearlyData) => {
  let totalpisos = 0
  let totallocales = 0
  let totalgarages = 0
  let totalchalets = 0
  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    totalpisos += el.pisos
    totallocales += el.locales
    totalgarages += el.garages
    totalchalets += el.chalets
  }
  return [
    { value: totalpisos, name: 'Pisos' },
    { value: totallocales, name: 'Locales' },
    { value: totalgarages, name: 'Garages' },
    { value: totalchalets, name: 'Chalets' },
  ]
}

export const groupByTypeYear = (yearlyData) => {
  const months = {
    0: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    1: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    2: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    3: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    4: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    5: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    6: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    7: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    8: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    9: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    10: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
    11: { pisos: 0, locales: 0, garages: 0, chalets: 0 },
  }

  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    const curMonth = el.day.getMonth()

    months[curMonth].pisos = months[curMonth].pisos += el.pisos
    months[curMonth].locales = months[curMonth].locales += el.locales
    months[curMonth].garages = months[curMonth].garages += el.garages
    months[curMonth].chalets = months[curMonth].chalets += el.chalets
  }

  const totalpisos = []
  const totallocales = []
  const totalgarages = []
  const totalchalets = []

  for (const month in months) {
    totalpisos.push(months[month].pisos)
    totallocales.push(months[month].locales)
    totalgarages.push(months[month].garages)
    totalchalets.push(months[month].chalets)
  }

  return [
    { data: totalpisos },
    { data: totallocales },
    { data: totalgarages },
    { data: totalchalets },
  ]
}

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
  }

  for (let i = 0; i < yearlyData.length; i += 1) {
    const el = yearlyData[i]
    const curMonth = el.day.getMonth()
    months[curMonth] = months[curMonth] += el.total
  }

  const finalArr = []
  for (const month in months) {
    finalArr.push(months[month])
  }

  return finalArr
}
