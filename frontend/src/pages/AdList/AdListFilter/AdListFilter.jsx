import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../../theme'
import { Button, Card, Text, Title } from '../../../components/atoms'
import { InputText } from '../../../components/atoms/Forms'

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
  width: 90px;
  height: 30px;
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

const InputWrapper = styled.div`
  display: block;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

const FilterHr = styled.hr`
  width: '100%';
`

function AdFilters({ filter, maxPriceValue, minPriceValue, maxM2, minM2, className = '' }) {
  const [maxPrice, setMaxPrice] = useState('')
  const [maxSize, setMaxSize] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [minSize, setMinSize] = useState('')
  const [address, setAddress] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [gastosInc, setGastosInc] = useState(false)

  function ClearFilter() {
    setMaxPrice('')
    setMaxSize('')
    setMinPrice('')
    setMinSize('')
    setAddress('')
    setLat('')
    setLon('')
    setGastosInc(false)
    filter(undefined)
  }
  return (
    <AdListFilterStyled className={className}>
      <Title order={3} text="Filtros" mt={0} />
      <Button
        type="button"
        className="blue-gradient"
        text="Limpiar busqueda"
        onClick={() => ClearFilter()}
      />
      <Text
        fontSize={12}
        text={`Precio mín y máx: ${minPriceValue || ''} ${maxPriceValue || ''}`}
        mb={0}
      />
      <Text fontSize={12} text={`Tamaño mín y máx: ${minM2 || ''} ${maxM2 || ''}`} />
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
      Ubicación
      <InputWrapper>
        <InputText
          name="address"
          type="text"
          placeholder="Ingrese una dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <CardSelectorWrapper>
          <InputText
            name="latitude"
            type="text"
            placeholder="Latitud"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <InputText
            name="longitude"
            type="text"
            placeholder="Longitud"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />
        </CardSelectorWrapper>
      </InputWrapper>
      <Button
        text="Filtrar"
        className="blue-gradient"
        onClick={() => filter({ gastosInc, maxPrice, minPrice, maxSize, minSize, lat, lon })}
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
  className: PropTypes.string,
}

export default styled(AdFilters)``
