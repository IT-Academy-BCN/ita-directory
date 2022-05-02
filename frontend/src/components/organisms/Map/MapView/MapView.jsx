import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import MapMarker from './MapMarker/MapMarker'
import 'leaflet/dist/leaflet.css'
import './MapView.css'

function getMaxMin(ads) {
  let minLat = 0
  let maxLat = 0
  let minLong = 0
  let maxLong = 0

  for (let i = 0; i < ads.length; i + 1) {
    // set adLat and AdLong
    const ad = ads[i]
    const adLat = parseFloat(ad.map_lat)
    const adLong = parseFloat(ad.map_lon)

    if (minLat) {
      minLat = minLat > adLat ? adLat : minLat
    } else {
      minLat = adLat
    }

    if (maxLat) {
      maxLat = maxLat < adLat ? adLat : maxLat
    } else {
      maxLat = adLat
    }

    if (minLong) {
      minLong = minLong > adLong ? adLong : minLong
    } else {
      minLong = adLong
    }

    if (maxLong) {
      maxLong = maxLong < adLong ? adLong : maxLong
    } else {
      maxLong = adLong
    }
  }

  // console.log("minlat", minLat);

  if (ads.length === 0) {
    return {
      topLeft: [41.478316, 2.073087],
      bottomRight: [41.351637, 2.267592],
    }
  }

  // // Latitud = horizontal, longitud = vertical
  // console.log("MaxMinBounds", minLat, maxLong, maxLat, minLong)
  return {
    topLeft: [minLat, maxLong],
    bottomRight: [maxLat, minLong],
  }
}

function SetBounds({ bounds }) {
  const map = useMap()
  map.fitBounds([bounds.topLeft, bounds.bottomRight])
  return null
}

function MapView({ filteredAds, localizedAdId }) {
  const maxMinBounds = getMaxMin(filteredAds)
  const [fitBoundsCoordinates, setFitBoundsCoordinates] = useState(maxMinBounds)

  useEffect(() => {
    setFitBoundsCoordinates(getMaxMin(filteredAds))
  }, [filteredAds])

  return (
    <MapContainer
      className="Container-View"
      bounds={[fitBoundsCoordinates.topLeft, fitBoundsCoordinates.bottomRight]}
      boundsOptions={{ padding: [0, 0] }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetBounds bounds={fitBoundsCoordinates} />
      {filteredAds.map((ad, i) => (
        <MapMarker key={ad.key} ad={ad} activePopup={localizedAdId === i} />
      ))}
    </MapContainer>
  )
}

MapView.propTypes = {
  filteredAds: PropTypes.array.isRequired,
  localizedAdId: PropTypes.number.isRequired,
}

export default MapView
