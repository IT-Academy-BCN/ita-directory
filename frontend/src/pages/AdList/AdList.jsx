import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import AdCard from './AdCard/AdCard'
import Body from '../../components/layout/Body/Body'
import { Button } from '../../components/atoms'
import { colors, Container } from '../../theme'
import MapView from '../../components/organisms/Map/MapView/MapView'
import AdListFilter from './AdListFilter/AdListFilter'
import axiosInstance from '../../utils/axiosInstance'
import { FlexBox } from '../../theme/wrappers'

const buttonStyle = {
  background: 'transparent',
  boxShadow: 'none',
  outline: 'none',
}

const AdListStyled = styled(FlexBox)``

const AdsStyled = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;

  ${AdListFilter} {
  }

  ${AdListStyled} {
    width: 70%;
    flex-grow: 1;
  }
`

function AdList() {
  const [filterParams, setFilterParams] = useState()
  const [mapView, setMapView] = useState(false)
  const [adList, setAdList] = useState([])
  const [loading, setLoading] = useState(true)

  // Added filters by Kevin
  const byPrice = (min, max) => (ad) => {
    if (min == null && max == null) return true
    return min <= ad.price && ad.price <= max
  }

  const bySize = (min, max) => (ad) => {
    if (min == null && max == null) return true
    return min <= ad.squareMeters && ad.squareMeters <= max
  }

  useEffect(() => {
    const fetchAds = async () => {
      const result = await axiosInstance.get('/ads')
      setAdList(result.data.data)
      setLoading(false)
    }
    fetchAds()
  }, [])

  const filteredAdList = useMemo(() => {
    const filteredAds = adList
      .filter(byPrice(filterParams?.minPrice || 0, filterParams?.maxPrice || Infinity))
      .filter(bySize(filterParams?.minSize || 0, filterParams?.maxSize || Infinity))

    return filteredAds
  }, [filterParams, adList])

  const renderList = filteredAdList.map((e) => (
    <AdCard
      id={e.id}
      userId={e.userId}
      title={e.title}
      description={e.description}
      city={e.city}
      nRooms={e.nRooms}
      price={e.price}
      squareMeters={e.squareMeters}
      nBathrooms={e.nBathrooms}
      mapLat={e.mapLat}
      mapLon={e.mapLon}
      adTypeId={e.adTypeId}
      key={e.id}
    />
  ))
  return (
    <Body title="Pisos en Alquiler en Madrid" justifyTitle="flex-start">
      <AdsStyled data-testid="adListStyled">
        <AdListFilter
          filter={setFilterParams}
          maxPriceValue={filterParams?.maxPrice}
          minPriceValue={filterParams?.minPrice}
          maxM2={filterParams?.maxSize}
          minM2={filterParams?.minSize}
        />
        {!loading ? (
          <AdListStyled flexDirection="column">
            <div className="tree-search">Madrid - Alquiler</div>
            <div className="h3">Mapa de pisos</div>
            <div className="rowWrapper">
              {mapView ? (
                <Button
                  type="button"
                  text="Vista de detalles"
                  textColor={colors.lightGray}
                  icon="search"
                  iconPosition="left"
                  iconStyles={{
                    marginRight: 5,
                    paddingLeft: 0,
                  }}
                  onClick={() => setMapView(!mapView)}
                  buttonStyles={buttonStyle}
                />
              ) : (
                <Button
                  type="button"
                  text="Vista de mapa"
                  textColor={colors.lightGray}
                  icon="map"
                  iconPosition="left"
                  iconStyles={{
                    marginRight: 5,
                    paddingLeft: 0,
                  }}
                  onClick={() => setMapView(!mapView)}
                  buttonStyles={buttonStyle}
                />
              )}
            </div>
            {mapView ? <MapView filteredAds={filteredAdList} /> : renderList}
          </AdListStyled>
        ) : (
          <p>Loading...</p>
        )}
      </AdsStyled>
    </Body>
  )
}
export default AdList
