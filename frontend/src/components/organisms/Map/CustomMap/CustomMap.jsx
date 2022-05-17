import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import './CustomMap.css'
import IconSelector from './IconSelector/IconSelector'
import customIcons from './CustomMapIcons/CustomMapIcons'

let layer

function Marcador({ setCoordinates, setMarkers, currentIcon }) {
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
}

function CustomMap({ setCoordinates }) {
  // @todo - update props in other components that use CustomMap to include setCoordinates
  const [markers, setMarkers] = useState([41.3879, 2.16992])
  const [iconSelection, setIconSelection] = useState(false)
  const [iconState, setIconState] = useState(customIcons[1].url)

  const [lat, lng] = markers

  const handelOnClickIcon = (icon) => {
    setIconState(icon)
  }

  const handleOnClick = () => {
    setIconSelection(!iconSelection)
  }

  return (
    <div className="Mapa">
      <MapContainer
        className="Container"
        center={{
          lat,
          lng,
        }}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marcador setCoordinates={setCoordinates} setMarkers={setMarkers} currentIcon={iconState} />
      </MapContainer>
      <button className="ButtonIcons" type="button" onClick={handleOnClick}>
        <img className="IconIMG" src={iconState} alt="" />
      </button>

      {iconSelection ? (
        <div>
          <IconSelector customIcons={customIcons} handelOnClickIcon={handelOnClickIcon} />
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

CustomMap.propTypes = {
  setCoordinates: PropTypes.func.isRequired,
}

export default CustomMap
