import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Marker, useMap } from 'react-leaflet'

// components
import icon from './MapIcon/MapIcon'
import MapPopup from './MapPopup/MapPopup'

function MapMarker({ ad, activePopup }) {
  const map = useMap()
  const markerRef = useRef(null)

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (activePopup) map.openPopup(markerRef.current._popup)
  }, [activePopup, map])

  return (
    <Marker position={[ad.map_lat, ad.map_lon]} icon={icon} ref={markerRef}>
      <MapPopup data={ad} />
    </Marker>
  )
}

MapMarker.propTypes = {
  ad: PropTypes.object.isRequired,
  activePopup: PropTypes.bool.isRequired,
}

export default MapMarker
