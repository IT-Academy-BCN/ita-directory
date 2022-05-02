import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as echarts from 'echarts'
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { groupByTypePie, daysBetween } from '../../../../utils/generateData'
import {
  getMonthLength,
  startingCutPerMonth,
  startingCutPerYear,
} from '../../../../utils/generalFilter'
import useOptionSelectMonth from '../../../../hooks/useOptionSelectMonth'
import options from './defaultOptions'
import PieGraphicStyled from './PieChart.styles'

function PieChart({ data, hideModal, active, year, month }) {
  const chartRef = useRef(null) // Creo una referencia y la inicializo vacia.
  const [curChart, setCurChart] = useState(undefined) // Creo una variable de estado y la inicializo sin definir.

  useEffect(() => {
    if (chartRef !== null && curChart === undefined) {
      setCurChart(echarts.init(chartRef.current))
    }
    // eslint-disable-next-line
  }, [chartRef])

  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)

  useEffect(() => {
    setSelectedYear(year)
    setSelectedMonth(month)
    // eslint-disable-next-line
  }, [year, month])

  const startYear = 2012
  const endYear = 2016
  const yearDifference = endYear - startYear
  const optionsSelectYear = []
  for (let i = 0; i < yearDifference + 1; i + 1) {
    const curYear = startYear + i
    optionsSelectYear.push(
      <option value={curYear} key={curYear}>
        {curYear}
      </option>
    )
  }

  // Set graph options and data based on filters
  useEffect(() => {
    if (curChart !== undefined) {
      let customOptions

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

      if (selectedMonth === 'all') {
        customOptions = groupByTypePie(yearToFilterData)
      } else {
        customOptions = groupByTypePie(monthToFilterData)
      }

      options.series[0].data = customOptions
      curChart.setOption({ ...options })
    }
  }, [curChart, selectedMonth, selectedYear, data])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (curChart !== undefined) {
      window.addEventListener('resize', resizeChart)
      return () => {
        window.removeEventListener('resize', resizeChart)
      }
    }
    // eslint-disable-next-line
  }, [curChart, selectedYear])

  const resizeChart = () => {
    curChart.resize()
  }

  // handlers
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value)
  }
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value)
  }

  return (
    <PieGraphicStyled>
      <div className="cardHeader">
        <h2>Vista global</h2>
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
      <div className="cardBody">
        {active ? (
          <div className="chart" ref={chartRef} />
        ) : (
          <div className="chart" ref={chartRef} />
        )}
      </div>
    </PieGraphicStyled>
  )
}

PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideModal: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
}

export default PieChart
