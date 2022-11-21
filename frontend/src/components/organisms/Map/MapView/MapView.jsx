import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapMarker from './MapMarker/MapMarker'

const MapContainerStyled = styled(MapContainer)`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;

  &.leaflet-container {
    min-height: 400px;
  }
`

function getMaxMin(ads) {
  let minLat
  let maxLat
  let minLon
  let maxLon

  if (ads.length > 0) {
    minLat = ads.map((ad) => parseFloat(ad.mapLat)).reduce((a, b) => Math.min(a, b))
    maxLat = ads.map((ad) => parseFloat(ad.mapLat)).reduce((a, b) => Math.max(a, b))
    minLon = ads.map((ad) => parseFloat(ad.mapLon)).reduce((a, b) => Math.min(a, b))
    maxLon = ads.map((ad) => parseFloat(ad.mapLon)).reduce((a, b) => Math.max(a, b))
  }

  if (ads.length === 0) {
    return {
      topLeft: [41.478316, 2.073087],
      bottomRight: [41.351637, 2.267592],
    }
  }

  return {
    topLeft: [minLat, maxLon],
    bottomRight: [maxLat, minLon],
  }
}

function MapView({ filteredAds }) {
  const [fitBoundsCoordinates, setFitBoundsCoordinates] = useState(getMaxMin(filteredAds))

  useEffect(() => {
    setFitBoundsCoordinates(getMaxMin(filteredAds))
  }, [filteredAds])

  function ChangeView({ bounds, zoom }) {
    const map = useMap()
    map.fitBounds(bounds, zoom)
    return null
  }
  return (
    <MapContainerStyled
      className="Container-View"
      zoom={13}
      bounds={[fitBoundsCoordinates.topLeft, fitBoundsCoordinates.bottomRight]}
      boundsOptions={{ padding: [0, 0] }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredAds.map((ad) => (
        <MapMarker key={ad.id} ad={ad} />
      ))}
      <ChangeView
        bounds={[fitBoundsCoordinates.topLeft, fitBoundsCoordinates.bottomRight]}
        zoom={13}
      />
    </MapContainerStyled>
  )
}

MapView.propTypes = {
  filteredAds: PropTypes.array.isRequired,
}

export default MapView
