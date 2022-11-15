import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import L from 'leaflet'
import './CustomMap.css'
/* import IconSelector from './IconSelector/IconSelector'
import customIcons from './CustomMapIcons/CustomMapIcons'

let layer */

/* function Marcador({ setCoordinates, setMarkers, currentIcon }) {
  const icon = L.icon({
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: currentIcon,
  })
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng
      if (layer) layer.removeFrom(map)
      layer = L.marker([lat, lng], { icon }).addTo(map)
      setMarkers([lat, lng])
      setCoordinates((prev) => [lat, lng])
      map.panTo(e.latlng)
    },
  })
  return null
} */

/* var myIcon = L.icon({
  iconUrl: 'my-icon.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'my-icon-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
})

L.marker([50.505, 30.57], { icon: myIcon }).addTo(map) */

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

  useEffect(() => {
    listPlace.length !== 0 && setCoordinates([Number(listPlace[0].lat), Number(listPlace[0].lon)])
  }, [listPlace])
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
