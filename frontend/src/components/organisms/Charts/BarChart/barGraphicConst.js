import { allMonths } from '../../../../utils/constant'

export const dataLabels = ['Pisos', 'Garajes', 'Locales', 'Chalets']

export const barColors = ['#5470c6', '#fac858', '#91cc75', '#ee6666']

export const returnMonthsData = (months, key) => {
  const data = []
  for (let i = 0; i < Object.entries(months).length; i += 1) {
    const element = allMonths[i]
    data.push(element[key])
  }
  return data
}

export const returnLegendData = () => {
  const data = []
  for (let index = 0; index < dataLabels.length; index += 1) {
    data.push({
      label: dataLabels[index],
      color: barColors[index],
    })
  }
  return data
}

export const returnChartSize = ([chartW, chartH]) => {
  const nChartH = chartH * 0.23
  const nChartW = chartW < 768 ? chartW * 0.5 : chartW * 0.4
  return [nChartW, nChartH]
}
