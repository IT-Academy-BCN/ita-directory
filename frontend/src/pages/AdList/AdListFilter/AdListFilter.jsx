import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../../theme'
import { Button, Card, Text, Title, Label } from '../../../components/atoms'
// import FilterListStyled from '../../../components/organisms/FilterList/FilterList.styles'

const AdListFilterStyled = styled(Card)`
  width: 30%;
  min-width: 206px;
  max-width: 300px;
  border-radius: 6px;
  overflow: hidden;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem;
  margin-right: 0.9rem;

  @media ${device.Tablet} {
    width: 35%;
  }

  @media ${device.Laptop} {
    width: 100%;
    justify-content: space-between;
  }
`

// Afecta a los selectores de los modals
const CardInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 0.3rem;
  padding-left: 0.5rem;
  width: 100%;
  // width: 90px;
  // height: 30px;
  height: 40px;
  // box-shadow: 0 3px 6px #00000029;
  border: 1px solid black;
  // border-radius: 4px;
  color: #e22e2e;
`

const CardSelectorWrapper = styled.div`
  // border: 2px solid red;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

const FilterHr = styled.hr`
  width: '100%';
`
const StyledLabel = styled(Label)`
  padding: 20px;
`

function AdFilters({ filter, className = '' }) {
  const [maxPrice, setMaxPrice] = useState('')
  const [maxSize, setMaxSize] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [minSize, setMinSize] = useState('')
  const [gastosInc, setGastosInc] = useState(false)

  function ClearFilter() {
    setMaxPrice('')
    setMaxSize('')
    setMinPrice('')
    setMinSize('')
    setGastosInc(false)
    filter(undefined)
  }

  console.log('gastos', gastosInc)

  return (
    <AdListFilterStyled className={className}>
      <Button
        type="button"
        className="blue-gradient"
        text="Limpiar busqueda"
        onClick={() => ClearFilter()}
      />
      Filtros
      <FilterHr style={{ width: '100%' }} />
      Precio
      <CardSelectorWrapper>
        <CardInput
          type="number"
          placeholder="Mín"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <CardInput
          type="number"
          placeholder="Máx"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </CardSelectorWrapper>
      Tamaño
      <CardSelectorWrapper>
        <CardInput
          type="number"
          placeholder="Mín"
          value={minSize}
          onChange={(e) => setMinSize(e.target.value)}
        />
        <CardInput
          type="number"
          placeholder="Máx"
          value={maxSize}
          onChange={(e) => setMaxSize(e.target.value)}
        />
      </CardSelectorWrapper>
      <div className="styledContainerCheckbox">
        <input
          className="styledCheckbox"
          type="checkbox"
          id="check"
          checked={gastosInc}
          onChange={(e) => setGastosInc(e.target.checked)}
          name="billsIncluded"
        />
        <StyledLabel htmlFor="check" label="hola hola" />
      </div>
      <Button
        text="Filtrar"
        className="blue-gradient"
        onClick={() => filter({ gastosInc, maxPrice, minPrice, maxSize, minSize })}
      />
    </AdListFilterStyled>
  )
}

AdFilters.propTypes = {
  filter: PropTypes.func.isRequired,
  maxPriceValue: PropTypes.string,
  minPriceValue: PropTypes.string,
  maxM2: PropTypes.string,
  minM2: PropTypes.string,
  // gastosIncValue: PropTypes.bool,
  className: PropTypes.string,
}

export default styled(AdFilters)``
