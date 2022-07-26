import React, { useState } from 'react'
import axios from 'axios'

// styles
import { SearchStyled } from './Search.style'
import { Container } from '../../theme'

// components
import Body from '../../components/layout/Body/Body'
import SearchBar from '../../components/organisms/SearchBar/SearchBar'
import AdCardListLoadMore from '../../components/organisms/AdCardList/AdCardListLoadMoreBtn'
import MapView from '../../components/organisms/Map/MapView/MapView'
import { Icon } from '../../components/atoms'

function Search() {
  const [loading, setLoading] = useState(0)
  const [ads, setAds] = useState([])
  const [adType, setAdType] = useState(null)
  const [adRegion, setAdRegion] = useState(null)
  const [firstSearch, setFirstSearch] = useState(false)
  const [localizedAdId, setLocalizedAdId] = useState(null)

  const getAds = async () => {
    try {
      setLoading(1)
      let response = null
      // if type and location have been selected by user, send an api request for filtered ads
      if (adType && adRegion) {
        response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ads/${adRegion.label}/${adType.label}`
        )
        // if only type was selected, API request for type filtered ads
      } else if (adType && !adRegion) {
        response = await axios.get(`${import.meta.env.VITE_API_URL}/ads/type/${adType.label}`)
        // if only location was selected, API request for type filtered ads
      } else if (!adType && adRegion) {
        response = await axios.get(`${import.meta.env.VITE_API_URL}/ads/location/${adRegion.label}`)

        // API request for all ads
      } else {
        response = await axios.get(`${import.meta.env.VITE_API_URL}/ads`)
      }
      const filteredAds = response.data.data || []
      setAds(filteredAds)
      setLoading(0)
      setFirstSearch(true)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  return (
    <Body
      title={<SearchBar setAdType={setAdType} setAdRegion={setAdRegion} getAds={getAds} />}
      isLoggedIn="true"
    >
      <Container>
        <SearchStyled>
          <div className="search-body">
            {/* eslint-disable-next-line no-nested-ternary */}
            {loading ? (
              <Icon className="rotate_right" />
            ) : ads.length === 0 && firstSearch ? (
              `There are no results.`
            ) : (
              ads.length > 0 && <AdCardListLoadMore ads={ads} setLocalizedAdId={setLocalizedAdId} />
            )}
          </div>
          <div className="search-map">
            {ads.length > 0 && <MapView filteredAds={ads} localizedAdId={localizedAdId} />}
          </div>
        </SearchStyled>
      </Container>
    </Body>
  )
}

export default Search
