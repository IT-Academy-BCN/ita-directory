import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, device } from '../../../theme'
import { Button, Card, Text, Title, Label } from '../../../components/atoms'

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

  .styedTitle {
    font-weight: bold;
    color: ${colors.darkGrey};
  }

  @media ${device.Tablet} {
    width: 35%;
  }

  @media ${device.Laptop} {
    width: 100%;
    justify-content: space-between;
  }
  .styledContainerCheckbox {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .styledCheckbox {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      opacity: 1;
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
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
  height: 40px;
  border: 1px solid #707070;
  color: #e22e2e;
`

const CardSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  gap: 0.5rem;
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

  return (
    <AdListFilterStyled className={className}>
      <Button
        type="button"
        className="blue-gradient"
        text="Limpiar busqueda"
        onClick={() => ClearFilter()}
      />
      <Text text="Filtros" margin="0px" className="styedTitle" />
      <FilterHr style={{ width: '100%' }} />
      <Text text="Precio" margin="0" />
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
      <Text text="Tamaño" margin="0px" />
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
        <StyledLabel htmlFor="check" label="Gastos incluidos" />
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
