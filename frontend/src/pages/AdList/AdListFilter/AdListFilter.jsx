import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../../theme'

// import {
//   Card,
//   CardHeader,
//   CardValue,
//   CardTitle,
//   CardInput,
//   CardSelectorWrapper,
//   CardCheckbox,
//   FilterHr,
// } from './AdListFilter.style'

import Button from '../../../components/atoms/Button'

const Card = styled.div`
  width: 30%;
  min-width: 206px;
  max-width: 300px;
  height: 50%;
  box-shadow: 0 3px 6px #00000029;
  border: 1px solid #ddd;
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
// const CardBody = styled.div`
//   background-color: #f4f4f4;
//   display: flex;
//   flex-direction: row;
//   align-items: left;
//   justify-content: space-evenly;

//   @media only ${device.Laptop} {
//     flex-direction: column;
//   }
// `

const CardHeader = styled.div`
  background-color: #f4f4f4;
  justify-content: center;
`

const CardTitle = styled.h2`
  font-weight: 400;
  color: black;
  margin: 0;
`

// Afecta a los selectores de los modals
const CardInput = styled.input`
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
`

const CardCheckbox = styled.input`
  margin-right: 0.3rem;
  padding-left: 0.5rem;
  width: 20px;
  height: 20px;
  box-shadow: 0 3px 6px #00000029;
  border: none;
  border-radius: 4px;
  color: #e22e2e;
`

const CardSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

const CardValue = styled.div`
  font-size: 12px;
`

// const Chart = styled.div`
//   width: 100%;
//   height: 50vh;
//   margin: 12px;
// `

const FilterHr = styled.hr`
  width: '100%';
`

// const Button = styled.button`
//   height: 35px;
//   box-shadow: 0 3px 6px #00000029;
//   border: none;
//   border-radius: 4px;
//   background: #006bb9;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   color: white;
// `

function AdFilters({ filtrar, maxPriceValue, minPriceValue, maxM2, minM2 }) {
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
    filtrar(undefined)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtros</CardTitle>
        <Button className="blue-gradient" text="Limpiar busqueda" onClick={() => ClearFilter()} />
        <CardValue>
          Precio mín y máx: {minPriceValue} {maxPriceValue}
        </CardValue>
        <CardValue>
          Tamaño mín y máx: {minM2} {maxM2}
        </CardValue>
        <FilterHr style={{ width: '100%' }} /> Precio
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
        <CardSelectorWrapper>
          <CardCheckbox
            type="checkbox"
            defaultChecked={gastosInc}
            onClick={() => (gastosInc ? setGastosInc(false) : setGastosInc(true))}
          />
          Gastos Incluidos
        </CardSelectorWrapper>
        <Button
          text="Filtrar"
          className="blue-gradient"
          onClick={() => filtrar({ gastosInc, maxPrice, minPrice, maxSize, minSize })}
        />
      </CardHeader>
    </Card>
  )
}

AdFilters.propTypes = {
  filtrar: PropTypes.object.isRequired,
  maxPriceValue: PropTypes.number.isRequired,
  minPriceValue: PropTypes.number.isRequired,
  maxM2: PropTypes.number.isRequired,
  minM2: PropTypes.number.isRequired,
}

export default AdFilters
