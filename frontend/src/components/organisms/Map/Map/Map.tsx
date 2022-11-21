import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import './Map.css'
import L, { LatLngExpression } from 'leaflet'

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
})

type TChangeViewProps = {
  center: LatLngExpression
  zoom: number
}

type TMapProps = {
  lat: number
  lng: number
  coordinates: [number, number]
}

function ChangeView({ center, zoom }: TChangeViewProps) {
  const map = useMap()

  map.setView(center, zoom)
  map.invalidateSize()
  return null
}

function Map({ lat, lng, coordinates }: TMapProps) {
  const center = coordinates || [lat, lng]

  return (
    <div className="Map">
      <MapContainer className="Map-container">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView zoom={15} center={center} />
        <Marker position={center} icon={icon} />
      </MapContainer>
    </div>
  )
}

export default Map
