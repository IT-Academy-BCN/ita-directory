import React from 'react'
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
  // specify the path here
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
})

function CustomMap({ setCoordinates, coordinates }) {
  /*  const map = useMap()
  const icon = L.marker([50, 10]).addTo(map) */
  // @todo - update props in other components that use CustomMap to include setCoordinates

  /*  const [iconSelection, setIconSelection] = useState(false)
  const [iconState, setIconState] = useState(customIcons[1].url) */

  /*   const [marker, setMarker] = useState([41.3879, 2.16992])
  console.log('COORD3', coordinates)

  useEffect(() => {
    setMarker([coordinates[0], coordinates[1]])
  }, [coordinates])

  console.log('Maker', marker) */

  function ChangeView({ center }) {
    const map = useMap()
    map.setView(center)
    return null
  }

  /*   const handelOnClickIcon = (icon) => {
    setIconState(icon)
  }
  const handleOnClick = () => {
    setIconSelection(!iconSelection)
  } */

  return (
    <div className="Mapa">
      <MapContainer className="Container" center={coordinates} zoom={18} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={icon} />
        <ChangeView center={coordinates} zoom={18} />

        {/* <Marcador setCoordinates={setCoordinates} setMarkers={setMarkers} currentIcon={iconState} /> */}
      </MapContainer>
      {/*  <button className="ButtonIcons" type="button" onClick={handleOnClick}>
        <img className="IconIMG" src={iconState} alt="" />
      </button> */}

      {/* {iconSelection ? (
        <div>
          <IconSelector customIcons={customIcons} handelOnClickIcon={handelOnClickIcon} />
        </div>
      ) : (
        <div />
      )} */}
    </div>
  )
}

CustomMap.propTypes = {
  setCoordinates: PropTypes.func.isRequired,
  coordinates: PropTypes.func.isRequired,
}

export default CustomMap
