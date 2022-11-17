import React from 'react'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import './Map.css'
import L from 'leaflet'

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
})

function ChangeView({ center, zoom }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

function Map({ lat, lng }) {
  const marker = { lat, lng }

  return (
    <div className="Map">
      <MapContainer className="Map-container" center={marker} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={marker} zoom={15} />
        <Marker position={[lat, lng]} icon={icon} />
      </MapContainer>
    </div>
  )
}

Map.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
}

export default Map
