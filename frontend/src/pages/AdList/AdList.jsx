import React, { useEffect, useState, useMemo } from 'react'
// import _ from 'lodash'
import AdCard from './AdCard/AdCard'
import Body from '../../components/layout/Body/Body'
import { Button } from '../../components/atoms'
import { colors, Container } from '../../theme'
import MapView from '../../components/organisms/Map/MapView/MapView'
import AdListFilter from './AdListFilter/AdListFilter'

// Styles
import { AdListStyled } from './AdList.style'
import axiosInstance from '../../utils/axiosInstance'

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  fontSize: '0.95rem',
  fontFamily: 'Arial',
  color: colors.lightGray,
  background: 'transparent',
  boxShadow: 'none',
  outline: 'none',
  paddingRight: 0,
}

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
    return min <= ad.square_meters && ad.square_meters <= max
  }

  // const byIncludedExpenses = (included) => (ad) => {
  //   console.log('byIncludedExpenses', ad, included)
  //   if (!included) return true
  //   return ad.gastosIncluidos === included
  // }

  useEffect(() => {
    const fetchAds = async () => {
      const result = await axiosInstance.get('/ads/v1/ads')
      setAdList(result.data.data)
      setLoading(false)
    }
    fetchAds()
  }, [])

  const filteredAdList = useMemo(() => {
    const filteredAds = adList
      .filter(byPrice(filterParams?.minPrice || null, filterParams?.maxPrice || null))
      .filter(bySize(filterParams?.minSize || null, filterParams?.maxSize || null))
    return filteredAds
  }, [filterParams, adList])

  const renderList = filteredAdList.map((e) => (
    <AdCard
      id={e.id}
      userId={e.user_id}
      title={e.title}
      description={e.description}
      city={e.city}
      nRooms={e.n_rooms}
      price={e.price}
      squareMeters={e.square_meters}
      nBathrooms={e.n_bathrooms}
      mapLat={e.map_lat}
      mapLon={e.map_lon}
      adTypeId={e.ad_type_id}
      key={e.id}
    />
  ))

  return (
    <Body title="Pisos en Alquiler en Madrid" justifyTitle="flex-start">
      <AdListStyled>
        <Container row className="probando">
          {!loading ? (
            <>
              <AdListFilter
                filter={setFilterParams}
                maxPriceValue={filterParams?.maxPrice}
                minPriceValue={filterParams?.minPrice}
                maxM2={filterParams?.maxSize}
                minM2={filterParams?.minSize}
              />
              <div className="ads">
                <div className="tree-search">Madrid - Alquiler</div>
                <div className="h3">Mapa de pisos</div>
                <div className="rowWrapper">
                  {mapView ? (
                    <Button
                      type="button"
                      text="Vista de detalles"
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
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      </AdListStyled>
    </Body>
  )
}
export default AdList
