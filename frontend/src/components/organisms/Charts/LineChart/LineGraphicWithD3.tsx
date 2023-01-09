import React, { useEffect, useState, useRef } from 'react'
import * as d3 from 'd3'
import { MySvg } from './Styled'
import { colors } from '../../../../theme'

const mesesVentas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
type TPropertyData = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
  total?: number
}

type TPropsLineGraphic = {
  data: TPropertyData[]
  active: boolean
  year: string
  month: string
  size: number[]
}

const meses = [
  0,
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Oct',
  'Nov',
  'Dec',
]

function groupByMonth(data: TPropertyData[]) {
  const byMonths = [...mesesVentas]
  data.forEach((date) => {
    const d = date.day.getMonth()
    // eslint-disable-next-line no-multi-assign
    byMonths[d] = byMonths[d] += date.total!
  })
  return byMonths
}

function dateYearFilter(date: TPropertyData['day'], year: string) {
  return date.getFullYear() === parseInt(year, 10)
}

function handleData(data: TPropertyData[], month: string, year: string) {
  const dataFilteredByYear = data.filter((d) => dateYearFilter(d.day, year))
  const dataGroupedByMonth = groupByMonth(dataFilteredByYear)

  const dataGroupedByDayAndMonth = dataFilteredByYear.filter(
    (item) => item.day.getMonth() === parseInt(month, 10)
  )
  const dataGroupedByDay = dataGroupedByDayAndMonth.map((day) => day.total)

  if (month !== 'all') {
    return dataGroupedByDay
  }
  return dataGroupedByMonth
}

function LineGraphic({ data, active, size, month, year }: TPropsLineGraphic) {
  const [dataToPrint, setDataToPrint] = useState<(number | undefined)[]>([])
  const svgRef: any = useRef()

  const [anchura, setAnchura] = useState(0)
  const [altura, setAltura] = useState(0)

  useEffect(() => {
    const m = 350
    let z = svgRef.current.parentNode.clientWidth
    z = z > 400 ? z - m : z
    const width = active ? window.innerWidth - 200 : z + 230
    const height = active ? window.innerHeight - 200 : z + 100
    setAnchura(width)
    setAltura(height)

    setDataToPrint(handleData(data, month, year))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearChart = () => {
    d3.selectAll('#container > *').remove()
  }

  useEffect(() => {
    clearChart()
    setDataToPrint(handleData(data, month, year))
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    printChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year, size, active])

  useEffect(() => {
    clearChart()
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    printChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataToPrint])

  const printChart = () => {
    const xsDomain = dataToPrint.length
    const xaTicks = xsDomain
    const yaTicks = 9
    let yHeight = 0

    const tooldiv = d3
      .select('#chartArea')
      .append('div')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background-color', 'white')
      .style('padding', '5px 10px')
      .style('border', '1px solid black')
      .style('border-radius', '5px')

    if (month === 'all') {
      yHeight = 8000

      const svg = d3
        .select(svgRef.current)
        .style('background', 'white')
        .attr('viewBox', `0, 0, ${anchura}, ${altura}`)
        .attr('style', `max-width: 100%; height: 100%; height: intrinsic;`)
        .style('overflow', 'visible')
        .style('padding', '8% 8% 8% 13%')
        .classed('svg-content-responsive', true)

      const xScale = d3.scaleLinear().domain([0, xsDomain]).range([0, anchura])
      const yScale: any = d3.scaleLinear().domain([0, yHeight]).range([altura, 0])

      const generateScaledLine = d3
        .line()
        .x((d, i) => xScale(i + 1))
        .y(yScale)
        .curve(d3.curveCardinal)
      const xAxis = d3
        .axisBottom(xScale)
        .ticks(xaTicks + 1)
        .tickFormat((i: any): any => {
          if (meses[i] !== 0) {
            return meses[i]
          }
          return null
        })
      const yAxis = d3.axisLeft(yScale).ticks(yaTicks)
      svg.append('g').call(xAxis).attr('transform', `translate(0, ${altura})`)
      svg
        .append('g')
        .call(yAxis)
        .call((g) => g.select('.domain').remove())
        .call((g) => g.selectAll('.tick line').clone().attr('x2', anchura))
        .call((g) => g.append('text').attr('x', -10).attr('y', 10).attr('fill', 'currentColor'))

      svg
        .selectAll('.line')
        .data([dataToPrint])
        .join('path')
        .classed('myPath', true)
        .attr('d', (d: any) => generateScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .style('animation', 'fadeIn ease-in 1s')

      const locationX: any = []
      const locationY: any = []
      const indexLocations = [{}]
      svg
        .selectAll('.circle')
        .data(dataToPrint)
        .enter()
        .append('circle')
        .attr('cx', (d) => {
          locationX.push(xScale(1 + dataToPrint.indexOf(d)))
          return xScale(1 + dataToPrint.indexOf(d))
        })
        .attr('cy', (d) => {
          locationY.push(yScale(d))
          return yScale(d)
        })
        .attr('class', (d, i) => `myCircle${i + 1}`)
        .attr('r', 3)
        .attr('fill', 'white')
        .attr('stroke', `${colors.extraDarkBlue}`)

      svg
        .selectAll('circle')
        .on('mouseover', (e, d: any) => {
          const date = dataToPrint.indexOf(d)
          tooldiv.style('visibility', 'visible').text(`${meses[date + 1]} ${year} ${d}`)
        })
        .on('mousemove', (e) => {
          tooldiv.style('top', `${e.pageY - 50}px`).style('left', `${e.pageX - 50}px`)
        })
        .on('mouseout', () => {
          tooldiv.style('visibility', 'hidden')
        })

      for (let i = 0; i <= locationX.length - 1; i += 1) {
        indexLocations[i] = {
          x: locationX[i],
          y: locationY[i],
          index: i,
        }
      }
    } else {
      yHeight = 300

      const svg = d3
        .select(svgRef.current)
        .style('background', 'white')
        .attr('viewBox', `0, 0, ${anchura}, ${altura}`)
        .attr('style', `width: 90%`)
        .style('overflow', 'visible')
        .style('padding', '5% 10%')
        .style('margin', '0 auto')
        .classed('svg-content-responsive', true)

      const xScale = d3.scaleLinear().domain([0, xsDomain]).range([0, anchura])
      const yScale: any = d3.scaleLinear().domain([0, yHeight]).range([altura, 0])
      const generateScaledLine = d3
        .line()
        .x((d, i) => xScale(i + 1))
        .y(yScale)
        .curve(d3.curveCardinal)

      const xAxis = d3
        .axisBottom(xScale)
        .ticks(xaTicks + 1)
        .tickFormat((i: any) => {
          if (i !== 0 && i % 2 !== 0) {
            return i
          }
          return null
        })

      const yAxis = d3.axisLeft(yScale).ticks(yaTicks)
      svg.append('g').call(xAxis).attr('transform', `translate(0, ${altura})`)
      svg
        .append('g')
        .call(yAxis)
        .call((g) => g.select('.domain').remove())
        .call((g) => g.selectAll('.tick line').clone().attr('x2', anchura))
        .call((g) => g.append('text').attr('x', -10).attr('y', 10).attr('fill', 'currentColor'))

      svg
        .selectAll('.line')
        .data([dataToPrint])
        .join('path')
        .attr('d', (d: any) => generateScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .style('animation', 'fadeIn ease-in 1s')

      svg
        .selectAll()
        .data(dataToPrint)
        .enter()
        .append('circle')
        .attr('cx', (d) => xScale(1 + dataToPrint.indexOf(d)))
        .attr('cy', (d) => yScale(d))
        .attr('r', 3)
        .attr('fill', 'white')
        .attr('stroke', `${colors.extraDarkBlue}`)
      svg
        .selectAll('circle')
        .on('mouseover', (e, d: any) => {
          const day = dataToPrint.indexOf(d)
          tooldiv
            .style('visibility', 'visible')
            .text(`${[day + 1]} / ${parseInt(month, 10) + 1} / ${year} ${d}`)
            .attr('z-index', '100')
        })
        .on('mousemove', (e) => {
          tooldiv.style('top', `${e.pageY - 50}px`).style('left', `${e.pageX - 50}px`)
        })
        .on('mouseout', () => {
          tooldiv.style('visibility', 'hidden')
        })
    }
  }

  return (
    <div id="chartArea">
      <MySvg ref={svgRef} className="lineChart" id="container" />
    </div>
  )
}

export default LineGraphic
