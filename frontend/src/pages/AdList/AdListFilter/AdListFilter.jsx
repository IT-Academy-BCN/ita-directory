import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardValue,
  CardTitle,
  CardInput,
  CardSelectorWrapper,
  CardCheckbox,
  FilterHr,
} from './AdListFilter.style'

import Button from '../../../components/atoms/Forms/Button'

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

export default AdFilters
