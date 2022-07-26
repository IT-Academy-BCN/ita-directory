import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import { SearchBarContainer, customStyles } from './SearchBarStyles'
import { Button, Icon } from '../../atoms'

function SearchBar({ setAdType, setAdRegion, getAds }) {
  const [loading, setLoading] = useState(1)
  const [typesList, setTypesList] = useState([])

  const components = { DropdownIndicator: () => null, IndicatorSeparator: () => null }

  const loadOptions = (inputValue) => {
    return fetch(`${import.meta.env.VITE_API_URL}/location/relative/${inputValue}`)
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
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ads/types`)
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
        <Icon className="rotate_right" />
      ) : (
        <>
          <Select
            options={typesList}
            components={components}
            placeholder="House, room, garage..."
            className="header-select"
            customStyles={customStyles}
            onChange={(value) => setAdType(value)}
            isClearable
          />

          <AsyncSelect
            components={components}
            placeholder="Barcelona, Berlín..."
            className="header-select"
            customStyles={customStyles}
            loadOptions={loadOptions}
            onChange={(value) => setAdRegion(value)}
            isClearable
          />
          <Button
            onClick={getAds}
            name="search"
            iconPosition="left"
            className="header-button"
            type="button"
          />
        </>
      )}
    </SearchBarContainer>
  )
}

SearchBar.propTypes = {
  setAdType: PropTypes.func,
  setAdRegion: PropTypes.func,
  getAds: PropTypes.func,
}

export default SearchBar
