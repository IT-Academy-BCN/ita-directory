import React, { useEffect, useState } from 'react'
import { faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import _ from 'lodash'
import AdCard from './AdCard/AdCard'
import Body from '../../components/layout/Body/Body'
import Button from '../../components/atoms/Forms/Button'
import Colors from '../../theme/colors'
import MapView from '../../components/organisms/Map/MapView/MapView'
import AdListFilter from './AdListFilter/AdListFilter'

// Styles
import { AdListStyled } from './AdList.style'
import { Container } from '../../theme'

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  fontSize: '0.95rem',
  fontFamily: 'Arial',
  color: Colors.lightGray,
  background: 'transparent',
  boxShadow: 'none',
  outline: 'none',
  paddingRight: 0,
}

function AdList() {
  const [filtro, setFiltro] = useState()
  const [mapView, setMapView] = useState(false)
  const [filteredAdList, setFilteredAdlist] = useState([])
  const [adList, setAdList] = useState([])
  const [loading, setLoading] = useState(true)
  const [maxPriceValue, setMaxPriceValue] = useState()
  const [minPriceValue, setMinPriceValue] = useState()
  const [maxM2, setMaxM2] = useState()
  const [minM2, setMinM2] = useState()

  useEffect(() => {
    const fetchAds = async () => {
      const result = await axios(`${import.meta.env.REACT_APP_API_URL}/ads/v1/ads`)
      setAdList(result.data.data)
      setLoading(false)
    }
    fetchAds()
  }, [])

  // console.log(AdList);
  useEffect(() => {
    let filteredAds = []
    filteredAds =
      filtro === undefined
        ? adList
        : _.filter(adList, function (e) {
            if (
              filtro.maxPrice === '' &&
              filtro.minPrice === '' &&
              filtro.maxSize === '' &&
              filtro.maxSize === ''
            ) {
              return filtro.gastosInc ? e.gastosIncluidos : e
            }
            if (filtro.maxPrice === '' && filtro.minPrice === '') {
              return (
                (filtro.gastosInc ? e.gastosIncluidos : e) &&
                e.m2 <= filtro.maxSize &&
                e.m2 >= filtro.minSize
              )
            }
            if (filtro.maxSize === '' && filtro.maxSize === '') {
              return (
                (filtro.gastosInc ? e.gastosIncluidos : e) &&
                e.price <= filtro.maxPrice &&
                e.price >= filtro.minPrice
              )
            }
            return (
              (filtro.gastosInc ? e.gastosIncluidos : e) &&
              e.m2 <= filtro.maxSize &&
              e.m2 >= filtro.minSize &&
              e.price <= filtro.maxPrice &&
              e.price >= filtro.minPrice
            )
          })
    setFilteredAdlist(filteredAds)
  }, [filtro, adList])

  const renderList = filteredAdList.map((e) => <AdCard {...e} key={e.id} />)

  useEffect(() => {
    if (loading === false) {
      const priceValue = Array.from(renderList, (o) => o.props.price)
      const maxPV = Math.max(...priceValue)
      const minPV = Math.min(...priceValue)
      const sizeValue = Array.from(renderList, (o) => o.props.m2)
      const mxM2 = Math.max(...sizeValue)
      const mnM2 = Math.min(...sizeValue)

      setMaxPriceValue(maxPV)
      setMinPriceValue(minPV)
      setMaxM2(mxM2)
      setMinM2(mnM2)
    }
  }, [renderList, loading])

  return (
    <Body title="Pisos en Alquiler en Madrid" isLoggedIn="true" justifyTitle="flex-start">
      <AdListStyled>
        <Container row className="probando">
          {!loading ? (
            <>
              <AdListFilter
                filtrar={(data) => setFiltro(data)}
                maxPriceValue={maxPriceValue}
                minPriceValue={minPriceValue}
                maxM2={maxM2}
                minM2={minM2}
              />
              <div className="ads">
                <div className="tree-search">Madrid - Alquiler</div>
                <div className="h3">Mapa de pisos</div>
                <div className="rowWrapper">
                  {mapView ? (
                    <Button
                      type="button"
                      text="Vista de detalles"
                      icon={faBars}
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
                      icon={faMapMarkerAlt}
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
