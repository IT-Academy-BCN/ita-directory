import React, { useEffect, useState } from 'react'
import { useOptionSelectMonth } from '../../../../hooks/useOptionSelectMonth'
import { groupByTypeYear, groupByTypeMonth, daysBetween } from '../../../../utils/generateData'
import {
  getMonthLength,
  startingCutPerMonth,
  startingCutPerYear,
} from '../../../../utils/generalFilter'
import { allMonths } from '../../../../utils/constant'
import { returnMonthsData, dataLabels } from './barGraphicConst'

// Font awesome icons
import { BarGraphicStyled } from './BarGraphic.styles'
import BarChartWithD3 from './BarChartWithD3'
import { Button } from '../../../atoms'

type TPropertyData = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
}

type TPropsBarGraphic = {
  data: Array<TPropertyData>
  hideModal: () => void | boolean
  active: boolean
  year: string
  month: string
}

function BarGraphic({ data, hideModal, active, year, month }: TPropsBarGraphic) {
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [customData, setCustomData] = useState<TCustomOptions>()

  useEffect(() => {
    setSelectedYear(year)
    setSelectedMonth(month)
    // eslint-disable-next-line
  }, [year, month])

  const returnOptionsSelectYear = (startYear: number, lastYear: number) => {
    const years = []
    const yearsDifference = lastYear - startYear + 1

    for (let i = 0; i < yearsDifference; i += 1) {
      years.push(startYear + i)
    }
    return years
  }

  const startYearSelect = data[0].day.getFullYear()
  const lastYearSelect = data[data.length - 1].day.getFullYear()
  const optionsSelectYear = returnOptionsSelectYear(startYearSelect, lastYearSelect)

  type TCustomOptions = {
    data: number[][]
    xAxis: string[]
    labels: string[]
  }
  // Set graph options and data based on filters
  useEffect(() => {
    const customOptions: TCustomOptions = {
      data: [],
      xAxis: [],
      labels: [],
    }

    const yearToFilterLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`)
    const startingCut = startingCutPerYear(data[0].day, selectedYear)

    const yearToFilterData = data.slice(startingCut, startingCut + yearToFilterLength)

    const monthToFilterLength = getMonthLength(selectedYear, selectedMonth)

    const corteInicialMes = startingCutPerMonth(selectedYear, selectedMonth)

    const monthToFilterData = yearToFilterData.slice(
      corteInicialMes,
      corteInicialMes + monthToFilterLength
    )

    type TData = { data: number[] }
    const newData: Record<number, TData> =
      selectedMonth === 'all'
        ? groupByTypeYear(yearToFilterData)
        : groupByTypeMonth(monthToFilterData)

    if (Array.isArray(newData))
      newData.forEach((item: { data: number[] }) => customOptions.data.push(item.data))

    const customOptionsxAxis =
      selectedMonth === 'all'
        ? returnMonthsData(allMonths, 'shortName')
        : [returnMonthsData(allMonths, 'name')[selectedMonth as unknown as number]]

    customOptions.xAxis = customOptionsxAxis
    customOptions.labels = dataLabels

    setCustomData(customOptions)
  }, [selectedMonth, selectedYear, data])

  // handlers
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value)
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value)
  }

  return (
    <BarGraphicStyled>
      <div className="header">
        <h2> Ventas anuales por tipo </h2>
        <div className="selectorWrapper">
          <select value={selectedMonth} onChange={handleMonthChange}>
            <option value="all">All</option>
            {useOptionSelectMonth()}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            {optionsSelectYear.map((yearOfSelect) => (
              <option key={yearOfSelect} value={yearOfSelect}>
                {yearOfSelect}
              </option>
            ))}
          </select>
          <Button
            onClick={hideModal}
            iconPosition="right"
            icon={active ? 'close' : 'open_in_new'}
            textColor="#e22e2e"
          />
        </div>
      </div>
      <BarChartWithD3 active={active} data={customData} selectedMonth={selectedMonth} />
    </BarGraphicStyled>
  )
}

export default BarGraphic
