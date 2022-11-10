import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { barColors, returnChartSize, returnLegendData } from './barGraphicConst'
import { StyledSvg, ChartLegend, D3SvgChartContainer } from './BarGraphic.styles'

function BarChartWithD3({ data, active, selectedMonth }) {
  const [chartWidth, setChartWidth] = useState()
  const [chartHeight, setChartHeight] = useState()
  const [displayLabels, setLabels] = useState(false)

  const chartMargin = { top: 20, bottom: 20, left: 40, right: 40 }

  const clearChart = () => {
    d3.selectAll('.bar-chart')
      .selectAll('*')
      .attr('viewBox', '0 0 100 100')
      .attr('preserveAspectRatio', 'xMinYMin')
      .remove()
  }

  const drawLegend = (d) => {
    // Draw legend
    const listItems = d3
      .selectAll('.chart-legend')
      .select('ul')
      .selectAll('li')
      .data(d)
      .enter()
      .append('li')

    // Apend color dots
    listItems
      .append('svg')
      .attr('height', '1rem')
      .attr('width', '2.5rem')
      .append('rect')
      .attr('rx', '0.25rem')
      .attr('width', '2rem')
      .attr('height', '1rem')
      .attr('fill', () => data.color)
      .classed('dot', true)

    // Apend labels
    listItems
      .append('text')
      .text(() => data.label)
      .classed('legend-text', true)
  }

  const drawXaxis = (chart, x) => {
    chart
      .append('g')
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .attr('color', 'gray')
      .attr('transform', `translate(0, ${chartHeight})`)
      .classed('xaxis', true)
  }

  const drawYaxis = (chart, y) => {
    chart
      .append('g')
      .call(d3.axisLeft(y).tickSizeOuter(0))
      .attr('color', 'gray')
      .attr('x', chartMargin.left)
  }

  const drawChart = () => {
    if (data) {
      const ChartContainer = d3
        .selectAll('.bar-chart')
        .attr('width', chartWidth + chartMargin.left + chartMargin.left)
        .attr('height', chartHeight + chartMargin.top + chartMargin.bottom)
        .classed('chart', true)

      const chart = ChartContainer.append('g')
        .attr('x', chartMargin.left)
        .attr('y', chartMargin.top)
        .attr('transform', `translate(${chartMargin.left},${chartMargin.top})`)

      // Define chart ranges
      const x = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.1)
      const y = d3.scaleLinear().range([chartHeight, 0])

      // Draw month data
      if (selectedMonth !== 'all') {
        // Create month data
        const monthData = data.data.map((item, index) => ({
          label: data.labels[index],
          value: item[0],
          color: barColors[index],
        }))
        // console.log("month", monthData)

        // Set domains
        x.domain(data.labels)
        y.domain([0, d3.max(monthData, () => data.value) + 200])

        // Draw chart data
        chart
          .selectAll('.bar')
          .data(monthData)
          .enter()
          .append('rect')
          .attr('width', x.bandwidth())
          .attr('height', () => chartHeight - y(data.value))
          .attr('y', () => y(data.value))
          .attr('x', () => x(data.label))
          .attr('fill', () => data.color)
          .classed('bar', true)

        // Draw bar labels
        if (displayLabels) {
          chart
            .selectAll('.bar-label')
            .data(monthData)
            .enter()
            .append('text')
            .text(() => `${data.value} ${data.label}`)
            .attr('x', () => x(data.label) + x.bandwidth() / 2)
            .attr('y', () => y(data.value / 2))
            .attr('text-anchor', 'middle')
            .classed('bar-label', true)
        }
      }

      // Draw year data
      else {
        // Create year data to display
        const yearData = []
        for (let index = 0; index < data.data[0].length; index + 1) {
          for (let j = 0; j < data.data.length; j + 1) {
            const item = {
              label: data.labels[j],
              value: data.data[j][index],
              color: barColors[j],
            }
            yearData.push(item)
          }
        }
        // console.log("year", yearData)

        // Set domains
        x.domain(yearData)
        y.domain([0, d3.max(data.data.map((item) => d3.max(item))) + 200])

        // Draw chart data
        chart
          .selectAll('.bar')
          .data(yearData)
          .enter()
          .append('rect')
          .attr('width', x.bandwidth())
          .attr('height', () => chartHeight - y(data.value))
          .attr('y', () => y(data.value))
          .attr('x', () => x(data))
          .attr('fill', () => data.color)
          .attr('rx', '0.25rem')
          .classed('bar', true)

        // Draw bar labels
        if (displayLabels) {
          chart
            .selectAll('.bar-label')
            .data(yearData)
            .enter()
            .append('text')
            .text(() => `${data.value} ${data.label}`)
            .attr('transform', 'rotate(-90)')
            .attr('x', -chartHeight / 2)
            .attr('y', () => x(data) + x.bandwidth() - x.bandwidth() / 4)
            .attr('font-size', 12)
            .attr('text-anchor', 'middle')
            .classed('bar-label', true)
        }

        // Change domain to render xAxis
        x.domain(data.xAxis)
      }

      drawXaxis(chart, x)
      drawYaxis(chart, y)
      drawLegend(returnLegendData)
    }
  }

  const reloadChart = () => {
    const [width, height] = !active
      ? returnChartSize([window.innerWidth, window.innerHeight])
      : [window.innerWidth * 0.95, window.innerHeight * 0.6]
    setChartWidth(width - chartMargin.left - chartMargin.right)
    setChartHeight(height - chartMargin.top - chartMargin.bottom)
    clearChart()
    drawChart()
  }

  useEffect(() => {
    setLabels(!(window.innerWidth < 992))
    reloadChart()
    // Resize chart
    window.addEventListener('resize', () => reloadChart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, active, chartWidth, chartHeight])

  return (
    <D3SvgChartContainer>
      <StyledSvg className="bar-chart" />
      <ChartLegend className="hart-legend" />
    </D3SvgChartContainer>
  )
}

BarChartWithD3.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool,
  selectedMonth: PropTypes.string,
  // displayLabels: PropTypes.bool,
}

export default BarChartWithD3
