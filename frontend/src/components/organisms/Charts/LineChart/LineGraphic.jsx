import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'
import LineGraphicWithD3 from './LineGraphicWithD3'
import LineGraphicStyled from './LineChart.styles'
import { useOptionSelectMonth } from '../../../../hooks/useOptionSelectMonth'
import { Icon } from '../../../atoms'

function LineGraphic({ data, active, hideModal, size, month, year }) {
  const [selectedYear, setSelectedYear] = useState(year)
  const [detail, setDetail] = useState(month)

  const startYear = 2012
  const endYear = 2016
  const yearDifference = endYear - startYear
  const optionsSelectYear = []
  for (let i = 0; i < yearDifference + 1; i += 1) {
    const curYear = startYear + i
    optionsSelectYear.push(
      <option value={curYear} key={curYear}>
        {curYear}
      </option>
    )
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
              {optionsSelectYear}
            </select>
            {/* todo: Substitute with Button component and remove FontAwesome */}
            <button type="button" onClick={hideModal}>
              <Icon className={active ? 'close' : 'drive_folder_upload'} color="#e22e2e" />
            </button>
          </div>
        </div>
        <LineGraphicWithD3
          data={data}
          active={active}
          hideModal={() => hideModal()}
          size={size}
          month={detail}
          year={selectedYear}
        />
      </LineGraphicStyled>
    </div>
  )
}

LineGraphic.propTypes = {
  data: PropType.object,
  size: PropType.number,
  year: PropType.number,
  month: PropType.number,
  active: PropType.bool,
  hideModal: PropType.bool,
}

export default LineGraphic
