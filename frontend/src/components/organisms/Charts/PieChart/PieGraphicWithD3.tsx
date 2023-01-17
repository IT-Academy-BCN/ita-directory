import React, { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import PieGraphicStyled from './PieChart.styles'
import { useOptionSelectMonth } from '../../../../hooks/useOptionSelectMonth'
import { Button } from '../../../atoms'

type TPropertyData = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
}

type TPropsPieGraphic = {
  data: Array<TPropertyData>
  hideModal: () => void | boolean
  active: boolean
  year: string
  month: string
}
function PieChart({ data, hideModal, active, year, month }: TPropsPieGraphic) {
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
  for (let i = 0; i <= yearDifference; i += 1) {
    const curYear = startYear + i
    optionsSelectYear.push(curYear)
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
  const totalGarages = filterDataByDate.reduce((prev, curr) => prev + curr.garajes, 0)
  const totalLocales = filterDataByDate.reduce((prev, curr) => prev + curr.locales, 0)

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const chartData: any = [
      { type: 'Pisos', total: totalPisos },
      { type: 'Garajes', total: totalGarages },
      { type: 'Locales', total: totalLocales },
      { type: 'Chalets', total: totalChalets },
    ]
    if (data && d3Container.current) {
      const svgWidth = 60
      const svgHeight = 60
      const radius = Math.min(svgWidth, svgHeight) / 2
      const svg = d3.select(d3Container.current)

      const update = svg.append('g').attr('transform', `translate(50, 50)`)

      const color = d3.scaleOrdinal(d3.schemeAccent)

      const pie = d3.pie().value((d: any) => d.total)

      const arc = update.selectAll('arc').data(pie(chartData)).enter().append('g') // Do we really need this??
      const path: any = d3.arc().outerRadius(radius).innerRadius(0)

      arc
        .append('path')
        .attr('d', path)
        .attr('fill', (d: any) => color(d.data.total))

      const label = d3.arc().outerRadius(radius).innerRadius(0)

      arc
        .append('text')
        .attr('transform', (d: any) => `translate( ${label.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('font-size', '2.8')
        .text((d: any) => `${d.data.type}: ${new Intl.NumberFormat('es-ES').format(d.data.total)}`)
    }
  }, [data, totalChalets, totalGarages, totalLocales, totalPisos])

  // handlers
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value)
  }
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            {optionsSelectYear.map((yearOfSelect) => (
              <option value={yearOfSelect} key={yearOfSelect}>
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

      <div className={active ? 'cardBodyModal' : 'cardBody'}>
        <div className="chart">
          <svg ref={d3Container} viewBox="0 0 100 100" className="pie-chart-d3" />
        </div>
      </div>
    </PieGraphicStyled>
  )
}

export default PieChart
