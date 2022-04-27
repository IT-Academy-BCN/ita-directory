import React, { useState, useEffect } from 'react'
import { SearchBarContainer, customStyles } from './SearchBarStyles'
import { StyledSubHeader } from '../../../components/layout/Header/Header.styles'
import Button from '../../atoms/Button/Button'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

const SearchBar = ({ setAdType, setAdRegion, getAds }) => {
  const [loading, setLoading] = useState(1)
  const [typesList, setTypesList] = useState([])

  const components = { DropdownIndicator: () => null, IndicatorSeparator: () => null }

  const loadOptions = (inputValue) => {
    return fetch(`${import.meta.env.REACT_APP_API_URL}/location/v1/relative/${inputValue}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const newLocationList = data.data.map((element) => {
          return { label: element.name, value: element.id }
        })
        return newLocationList
      })
  }

  const getTypes = async () => {
    const response = await axios.get(`${import.meta.env.REACT_APP_API_URL}/ads/v1/ads/types/list`)
    const options = response.data.data
    setTypesList(options.map((element) => ({ label: element, value: element })))
  }

  useEffect(() => {
    getTypes()
    setLoading(0)
  }, [])

  return (
    <SearchBarContainer isLoading={loading}>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} className="spinner" />
      ) : (
        <>
          <Select
            options={typesList}
            components={components}
            placeholder="House, room, garage..."
            className="header-select"
            customStyles={customStyles}
            onChange={(value) => setAdType(value)}
            isClearable={true}
          />

          <AsyncSelect
            components={components}
            placeholder="Barcelona, Berlín..."
            className="header-select"
            customStyles={customStyles}
            loadOptions={loadOptions}
            onChange={(value) => setAdRegion(value)}
            isClearable={true}
          />
          <Button
            onClick={getAds}
            icon={faSearch}
            iconPosition="left"
            className="header-button"
            type="button"
          />
        </>
      )}
    </SearchBarContainer>
  )
}

export default SearchBar
