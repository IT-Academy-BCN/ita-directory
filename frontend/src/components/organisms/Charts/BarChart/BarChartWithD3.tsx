import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'
import { barColors, returnChartSize, returnLegendData } from './barGraphicConst'
import { StyledSvg, ChartLegend, D3SvgChartContainer } from './BarGraphic.styles'

type TPropsBarChartWithD3 = {
  data: TData | undefined
  active: boolean
  selectedMonth: string
}
type TData = {
  data: number[][]
  xAxis: string[]
  labels: string[]
}
export default function BarChartWithD3({ data, active, selectedMonth }: TPropsBarChartWithD3) {
  const [chartWidth, setChartWidth] = useState<number>(0)
  const [chartHeight, setChartHeight] = useState<number>(0)
  const [displayLabels, setLabels] = useState(false)

  const chartMargin = { top: 0, bottom: 30, left: 30, right: 40 }

  const clearChart = () => {
    const svg = d3
      .selectAll('.bar-chart')
      .attr('viewBox', '0 0 100 100')
      .attr('preserveAspectRatio', 'xMinYMin')
    svg.selectAll('*').remove()
  }

  const reloadChart = () => {
    const [width, height] = !active
      ? returnChartSize([window.innerWidth, window.innerHeight])
      : [window.innerWidth * 0.4, window.innerHeight * 0.3]
    setChartWidth(width - chartMargin.left - chartMargin.right)
    setChartHeight(height - chartMargin.top - chartMargin.bottom)
    clearChart()
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    drawChart()
  }

  useEffect(() => {
    setLabels(!(window.innerWidth < 992))
    reloadChart()
    // Resize chart
    window.addEventListener('resize', () => reloadChart())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, active, chartWidth, chartHeight])

  type TDObject = () => { label: string; color: string }[]

  const drawLegend = (d: TDObject) => {
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
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .attr('fill', (d) => d.color)
      .classed('dot', true)

    // Apend labels
    listItems
      .append('text')
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .text((d) => d.label)
      .classed('legend-text', true)
  }

  const drawXaxis = (
    chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    x: d3.ScaleBand<string>
  ) => {
    chart
      .append('g')
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .attr('color', 'gray')
      .attr('transform', `translate(0, ${chartHeight})`)
      .classed('xaxis', true)
  }

  const drawYaxis = (
    chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    y: d3.AxisScale<number>
  ) => {
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

      const x: any = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.1)
      const y = d3.scaleLinear().range([chartHeight, 0])
      // Draw month data
      type TMonthData = {
        label: string
        value: number
        color: string
      }[]
      if (selectedMonth !== 'all') {
        // Create month data
        const monthData: TMonthData = data.data.map((item, index) => ({
          label: data.labels[index],
          value: item[0],
          color: barColors[index],
        }))

        // Set domains
        x.domain(data.labels)
        y.domain([0, d3.max(monthData, (d) => d.value)! + 200])
        // Draw chart data

        chart
          .selectAll('.bar')
          .data(monthData)
          .enter()
          .append('rect')
          .attr('width', x.bandwidth())
          .attr('height', (d) => chartHeight - y(d.value))
          .attr('y', (d) => y(d.value))
          .attr('x', (d) => x(d.label)!)
          .attr('fill', (d) => d.color)
          .classed('bar', true)

        // Draw bar labels
        if (displayLabels) {
          chart
            .selectAll('.bar-label')
            .data(monthData)
            .enter()
            .append('text')
            .text((d) => `${d.value} ${d.label}`)
            .attr('x', (d) => x(d.label)! + x.bandwidth() / 2)
            .attr('y', (d) => y(d.value / 2))
            .attr('text-anchor', 'middle')
            .classed('bar-label', true)
        }
      }

      // Draw year data
      else {
        // Create year data to display
        const yearData = []

        for (let i = 0; i < data.data[0].length; i += 1) {
          for (let j = 0; j < data.data.length; j += 1) {
            const item = {
              label: data.labels[j],
              value: data.data[j][i],
              color: barColors[j],
            }

            yearData.push(item)
          }
        }

        // Set domains
        x.domain(yearData)
        y.domain([0, d3.max(data.data.map((item) => d3.max(item)!))! + 200])

        // Draw chart data
        chart
          .selectAll('.bar')
          .data(yearData)
          .enter()
          .append('rect')
          .attr('width', x.bandwidth())
          .attr('height', (d) => chartHeight - y(d.value))
          .attr('y', (d) => y(d.value))
          .attr('x', (d) => x(d))
          .attr('fill', (d) => d.color)
          .attr('rx', '0.25rem')
          .classed('bar', true)

        // Draw bar labels
        if (displayLabels) {
          chart
            .selectAll('.bar-label')
            .data(yearData)
            .enter()
            .append('text')
            .text((d) => `${d.value} ${d.label}`)
            .attr('transform', 'rotate(-90)')
            .attr('x', -chartHeight / 2)
            .attr('y', (d) => x(d) + x.bandwidth() - x.bandwidth() / 4)
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

  return (
    <D3SvgChartContainer>
      <StyledSvg className="bar-chart" />
      <ChartLegend className="chart-legend" />
    </D3SvgChartContainer>
  )
}
