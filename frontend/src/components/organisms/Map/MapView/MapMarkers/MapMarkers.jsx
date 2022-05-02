import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-leaflet'
import icon from './MapIcon/MapIcon'
import MapPopup from './MapPopup/MapPopup'

function MapMarkers({ apartments }) {
  const markers = apartments.map((apartment, i) => (
    <Marker key={apartment.key} position={[apartment.map_lat, apartment.map_lon]} icon={icon}>
      <MapPopup data={apartment} />
    </Marker>
  ))

  return { markers }
}

MapMarkers.propTypes = {
  apartments: PropTypes.array.isRequired,
}

export default MapMarkers
