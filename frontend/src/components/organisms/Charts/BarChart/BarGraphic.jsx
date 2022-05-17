import React, { useEffect, useState } from 'react'
import PropType from 'prop-types'
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

function BarGraphic({ data, hideModal, active, size, year, month }) {
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [customData, setCustomData] = useState()

  useEffect(() => {
    setSelectedYear(year)
    setSelectedMonth(month)
    // eslint-disable-next-line
  }, [year, month])

  const returnOptionsSelectYear = (startYear, lastYear) => {
    const years = []
    const yearsDifference = lastYear - startYear + 1

    for (let i = 0; i < yearsDifference; i + 1) {
      years.push(
        <option key={parseInt(startYear, 10) + i} value={parseInt(startYear, 10) + i}>
          {parseInt(startYear, 10) + i}
        </option>
      )
    }
    return years
  }

  const optionsSelectYear = returnOptionsSelectYear(
    data[0].day.getFullYear(),
    data[data.length - 1].day.getFullYear()
  )

  // Set graph options and data based on filters
  useEffect(() => {
    const customOptions = {
      data: [],
      xAxis: [],
      labels: [],
    }

    const yearToFilterLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`)
    const startingCut = startingCutPerYear(data[0].day, parseInt(selectedYear, 10))

    const yearToFilterData = data.slice(
      parseInt(startingCut, 10),
      parseInt(startingCut, 10) + parseInt(yearToFilterLength, 10)
    )

    const monthToFilterLength = getMonthLength(selectedYear, selectedMonth)
    const corteInicialMes = startingCutPerMonth(
      parseInt(selectedYear, 10),
      parseInt(selectedMonth, 10)
    )
    const monthToFilterData = yearToFilterData.slice(
      parseInt(corteInicialMes, 10),
      parseInt(corteInicialMes, 10) + parseInt(monthToFilterLength, 10)
    )

    const newData =
      selectedMonth === 'all'
        ? groupByTypeYear(yearToFilterData)
        : groupByTypeMonth(monthToFilterData)
    newData.forEach((item) => customOptions.data.push(item.data))

    customOptions.xAxis =
      selectedMonth === 'all'
        ? returnMonthsData(allMonths, 'shortName')
        : [returnMonthsData(allMonths, 'name')[selectedMonth]]

    customOptions.labels = dataLabels

    setCustomData(customOptions)
  }, [selectedMonth, selectedYear, data])

  // handlers
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value)
  }

  const handleMonthChange = (e) => {
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
            {optionsSelectYear}
          </select>
          <button type="button" onClick={hideModal}>
            <FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
          </button>
        </div>
      </div>
      <BarChartWithD3 active={active} data={customData} size={size} selectedMonth={selectedMonth} />
    </BarGraphicStyled>
  )
}

BarGraphic.propTypes = {
  data: PropType.arrayOf(PropType.object).isRequired,
  hideModal: PropType.func.isRequired,
  active: PropType.bool.isRequired,
  size: PropType.string.isRequired,
  year: PropType.number.isRequired,
  month: PropType.number.isRequired,
}

export default BarGraphic
