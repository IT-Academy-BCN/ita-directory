import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import PieGraphicStyled from './PieChart.styles'
import { useOptionSelectMonth } from '../../../../hooks/useOptionSelectMonth'
import { Icon } from '../../../atoms'

function PieChart({ data, hideModal, active, year, month }) {
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)

  const d3Container = useRef(null)

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

  let filterDataByDate

  if (selectedMonth === 'all') {
    filterDataByDate = data.filter((item) => item.day.getFullYear() === parseInt(selectedYear, 10))
  } else {
    filterDataByDate = data.filter(
      (item) =>
        item.day.getFullYear() === parseInt(selectedYear, 10) &&
        item.day.getMonth() === parseInt(selectedMonth, 10)
    )
  }

  const totalPisos = filterDataByDate.reduce((prev, curr) => prev + curr.pisos, 0)
  const totalChalets = filterDataByDate.reduce((prev, curr) => prev + curr.chalets, 0)
  const totalGarages = filterDataByDate.reduce((prev, curr) => prev + curr.garages, 0)
  const totalLocales = filterDataByDate.reduce((prev, curr) => prev + curr.locales, 0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const chartData = [
    { type: 'Pisos', total: totalPisos },
    { type: 'Garages', total: totalGarages },
    { type: 'Locales', total: totalLocales },
    { type: 'Chalets', total: totalChalets },
  ]

  useEffect(() => {
    if (data && d3Container.current) {
      const svgWidth = 80
      const svgHeight = 80
      const radius = Math.min(svgWidth, svgHeight) / 2
      const svg = d3.select(d3Container.current)
      // .attr("width", svgWidth)
      // .attr("height", svgHeight);
      const update = svg.append('g').attr('transform', `translate(50, 50)`)

      const color = d3.scaleOrdinal(d3.schemeAccent)

      const pie = d3.pie().value((d) => d.total)

      const arc = update.selectAll('arc').data(pie(chartData)).enter().append('g') // Do we really need this??
      const path = d3.arc().outerRadius(radius).innerRadius(0)

      arc
        .append('path')
        .attr('d', path)
        .attr('fill', (d) => color(d.data.total))

      const label = d3.arc().outerRadius(radius).innerRadius(0)

      arc
        .append('text')
        .attr('transform', (d) => `translate( ${label.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('font-size', '2.8')
        .text((d) => `${d.data.type}: ${new Intl.NumberFormat('es-ES').format(d.data.total)}`)
    }
  }, [chartData, data])

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
            <Icon className={active ? 'close' : 'drive_folder_upload'} />
          </button>
        </div>
      </div>

      <div className="cardBody">
        <div className="chart">
          <svg ref={d3Container} viewBox="0 0 100 100" className="pie-chart-d3" />
        </div>
      </div>
    </PieGraphicStyled>
  )
}

PieChart.propTypes = {
  data: PropTypes.array,
  hideModal: PropTypes.func,
  active: PropTypes.bool,
  year: PropTypes.number,
  month: PropTypes.number,
}

export default PieChart
