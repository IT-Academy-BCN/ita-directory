import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import L from 'leaflet'
import './CustomMap.css'

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
})

function CustomMap({ listPlace }) {
  function ChangeView({ center, zoom }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
  }
  const [coordinates, setCoordinates] = useState([41.38879, 2.15899])

  useEffect(
    () =>
      listPlace.length !== 0 &&
      setCoordinates([Number(listPlace[0].lat), Number(listPlace[0].lon)]),
    [listPlace]
  )

  return (
    <div className="Mapa">
      <MapContainer className="Container" center={coordinates} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={icon} />
        <ChangeView center={coordinates} zoom={15} />
      </MapContainer>
    </div>
  )
}

CustomMap.propTypes = {
  listPlace: PropTypes.array.isRequired,
}

export default CustomMap
