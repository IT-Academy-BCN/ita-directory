import React from 'react'
import PropTypes from 'prop-types'
import { GlobalFiltersStyled } from './GlobalFilters.styles'
import { useOptionSelectMonth } from '../../../hooks/useOptionSelectMonth'

function GlobalFilters({ onYearChange, onMonthChange }) {
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

  // handlers
  const handleYearChange = (e) => {
    onYearChange(e.target.value)
  }

  const handleMonthChange = (e) => {
    onMonthChange(e.target.value)
  }

  return (
    <GlobalFiltersStyled>
      <div className="header">
        <h2> Aplicar filtros globales:</h2>
        <div className="selectorWrapper">
          <select defaultValue="all" onChange={handleMonthChange}>
            <option value="all">All</option>
            {useOptionSelectMonth()}
          </select>
          <select defaultValue="2016" onChange={handleYearChange}>
            {optionsSelectYear}
          </select>
        </div>
      </div>
    </GlobalFiltersStyled>
  )
}

GlobalFilters.propTypes = {
  onYearChange: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
}

export default GlobalFilters
