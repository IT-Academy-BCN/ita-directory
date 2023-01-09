import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { useOptionSelectMonth } from '../../../hooks/useOptionSelectMonth'
import SelectArrow from '../../../assets/images/select-arrow.svg'
import { device } from '../../../theme'

const GlobalFiltersStyled = styled.div`
  min-width: 90%;
  height: auto;
  box-shadow: 0 3px 6px #00000029;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;

  .header {
    height: auto;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;

    @media ${device.Tablet} {
      flex-direction: row;
      padding: 0.5rem 2rem;
    }

    h2 {
      font-weight: 400;
      color: white;
      padding-right: 2rem;
    }

    .selectorWrapper {
      display: flex;
      align-items: center;

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin-right: 0.3rem;
        padding-left: 0.5rem;
        width: 90px;
        height: 30px;
        box-shadow: 0 3px 6px #00000029;
        border: none;
        border-radius: 4px;
        color: #e22e2e;
        background-image: url(${SelectArrow});
        background-position: 95% 50%;
        background-repeat: no-repeat;
        background-size: 15px 12px;
        background-color: #fff;

        @media ${device.Tablet} {
          width: 110px;
        }
      }
    }
  }
`

function GlobalFilters({ onYearChange, onMonthChange }) {
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
