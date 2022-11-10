/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import InputGroupNumber from '../../molecules/InputGroupNumber'
import Button from '../../atoms/Button'
import FilterListStyled from './FilterList.styles'

function FilterList() {
  const noFilters = {
    priceMin: '',
    priceMax: '',
    sizeMin: '',
    sizeMax: '',
    billsIncluded: false,
  }
  const [filters, setFilters] = useState(noFilters)

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = ({ e, onSubmit }) => {
    e.preventDefault()
    onSubmit(filters)
  }
  const handleReset = ({ e, onSubmit }) => {
    e.preventDefault()
    document.getElementById('filterList').reset()
    setFilters(noFilters)
    onSubmit(noFilters)
  }

  return (
    <FilterListStyled className="styleFilter">
      <form onSubmit={handleSubmit} id="filterList">
        <h3>Filtros</h3>
        <label htmlFor="priceMin">Precio</label>
        <div className="styledContainerInputs">
          <InputGroupNumber
            id="priceMin"
            name="priceMin"
            type="number"
            value={filters.priceMin}
            onChange={handleChange}
            placeholder="Mín"
            className="styleFilterList styleFilter"
          />
          <InputGroupNumber
            name="priceMax"
            type="number"
            value={filters.priceMax}
            onChange={handleChange}
            placeholder="Máx"
            className="styleFilterList"
          />
        </div>
        <label>Tamaño</label>
        <div className="styledContainerInputs">
          <InputGroupNumber
            name="sizeMin"
            type="number"
            value={filters.sizeMin}
            onChange={handleChange}
            placeholder="Mín"
            className="styleFilterList styleFilter"
          />
          <InputGroupNumber
            name="sizeMax"
            type="number"
            value={filters.sizeMax}
            onChange={handleChange}
            placeholder="Máx"
            className="styleFilterList"
          />
        </div>
        <div className="styledContainerCheckbox">
          <input
            className="styledCheckbox"
            type="checkbox"
            id="check"
            checked={filters.billsIncluded}
            onChange={handleChange}
            name="billsIncluded"
          />
          <label>Gastos incluidos</label>
        </div>
        <Button
          buttonStyles={{ width: '100%', height: '2.125rem', margin: '2rem 0 0.5rem 0' }}
          text="Aplicar filtros"
          type="normal"
          className="blue-gradient"
        />
        <Button
          text="Reset"
          buttonStyles={{ width: '100%', height: '2.125rem', margin: '1rem 0 0.5rem 0' }}
          type="normal"
          className="blue-gradient"
          onClick={handleReset}
        />
      </form>
    </FilterListStyled>
  )
}

export default FilterList
