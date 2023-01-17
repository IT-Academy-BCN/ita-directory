import React, { useState, useEffect } from 'react'
import LineGraphicWithD3 from './LineGraphicWithD3'
import LineGraphicStyled from './LineChart.styles'
import { useOptionSelectMonth } from '../../../../hooks/useOptionSelectMonth'
import { Button } from '../../../atoms'

type TPropertyData = {
  day: Date
  pisos: number
  garajes: number
  locales: number
  chalets: number
  total?: number
}

type TPropsLineGraphic = {
  data: Array<TPropertyData>
  hideModal: () => void | boolean
  size: number[]
  active: boolean
  year: string
  month: string
}

function LineGraphic({ data, active, hideModal, size, month, year }: TPropsLineGraphic) {
  const [selectedYear, setSelectedYear] = useState(year)
  const [detail, setDetail] = useState(month)

  const startYear = 2012
  const endYear = 2016
  const yearDifference = endYear - startYear
  const optionsSelectYear = []
  for (let i = 0; i < yearDifference + 1; i += 1) {
    const curYear = startYear + i
    optionsSelectYear.push(curYear)
  }

  useEffect(() => {
    setSelectedYear(year)
    setDetail(month)
  }, [year, month])

  return (
    <div>
      <LineGraphicStyled>
        <div className="cardHeader">
          <h2>Ventas anuales continuas</h2>
          <div className="selectorWrapper">
            <select value={detail} onChange={(e) => setDetail(e.target.value)}>
              <option value="all">All</option>
              {useOptionSelectMonth()}
            </select>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
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
        <LineGraphicWithD3
          data={data}
          active={active}
          size={size}
          month={detail}
          year={selectedYear}
        />
      </LineGraphicStyled>
    </div>
  )
}

export default LineGraphic
