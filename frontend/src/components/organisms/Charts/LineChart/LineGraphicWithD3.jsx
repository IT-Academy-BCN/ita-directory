import React, { useEffect, useState, useRef } from 'react'
import PropType from 'prop-types'
import * as d3 from 'd3'
import { MySvg } from './Styled'
import { colors } from '../../../../theme'

const mesesVentas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function daysInMonth(date, month) {
  return date.day.getMonth() === parseInt(month, 10)
}

function dateMonthFilter(date) {
  const d = date.day.getMonth()
  // eslint-disable-next-line no-multi-assign
  mesesVentas[d] = mesesVentas[d] += date.total
  return mesesVentas
}

function dateYearFilter(date, year) {
  return date.day.getFullYear() === parseInt(year, 10)
}

function handleData(data, month, year) {
  const date = data.filter(dateYearFilter)

  date.filter(dateMonthFilter)

  const p = dateMonthFilter(date, year)

  /// data por dias segun mes y año seleccionado
  let dataMes = date.filter(daysInMonth)

  dataMes = dataMes.map((day) => {
    return day.total
  })
  const d = dataMes

  let finalData = []
  if (date) {
    if (month !== 'all') {
      finalData = d
    } else {
      finalData = p
    }
  }
  return finalData
}

function LineGraphic({ data, active, size, month, year }) {
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
  const [dataToPrint, setDataToPrint] = useState([])
  const svgRef = useRef()

  const [anchura, setAnchura] = useState(0)
  const [altura, setAltura] = useState(0)

  useEffect(() => {
    const m = 350
    let z = svgRef.current.parentNode.clientWidth
    z = z > 400 ? z - m : z
    setDataToPrint(handleData(data, month, year))
    setAnchura(active ? window.innerWidth - 200 : z - 150)
    setAltura(active ? window.innerHeight - 200 : z)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearChart = () => {
    d3.selectAll('#container > *').remove()
  }

  useEffect(() => {
    clearChart()
    setDataToPrint(handleData(data, month, year))
    printChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year, size])

  useEffect(() => {
    clearChart()
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
        .style('padding', '5% 10%')
        .classed('svg-content-responsive', true)

      const xScale = d3.scaleLinear().domain([0, xsDomain]).range([0, anchura])
      const yScale = d3.scaleLinear().domain([0, yHeight]).range([altura, 0])
      const generateScaledLine = d3
        .line()
        .x((d, i) => xScale(i + 1))
        .y(yScale)
        .curve(d3.curveCardinal)
      const xAxis = d3
        .axisBottom(xScale)
        .ticks(xaTicks + 1)
        .tickFormat((i) => {
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
        .attr('d', (d) => generateScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .style('animation', 'fadeIn ease-in 1s')

      const locationX = []
      const locationY = []
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
        .attr('class', (d, i) => {
          return `myCircle${i + 1}`
        })
        .attr('r', 4)
        .attr('fill', 'white')
        .attr('stroke', `${colors.extraDarkBlue}`)

      svg
        .selectAll('circle')
        .on('mouseover', (e, d) => {
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
      const yScale = d3.scaleLinear().domain([0, yHeight]).range([altura, 0])
      const generateScaledLine = d3
        .line()
        .x((d, i) => xScale(i + 1))
        .y(yScale)
        .curve(d3.curveCardinal)

      const xAxis = d3
        .axisBottom(xScale)
        .ticks(xaTicks + 1)
        .tickFormat((i) => {
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
        .attr('d', (d) => generateScaledLine(d))
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
        .on('mouseover', (e, d) => {
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

LineGraphic.propTypes = {
  data: PropType.object,
  active: PropType.bool,
  size: PropType.number,
  year: PropType.number,
  month: PropType.number,
}

export default LineGraphic
