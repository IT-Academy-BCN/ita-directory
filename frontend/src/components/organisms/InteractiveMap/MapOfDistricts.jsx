import React, { useReducer } from 'react'
import DistrictsList from './DistrictsList'
import MapContext from './store/context'
import { reducer } from './store/reducer'
import { ContainerExterior, Mapa } from './mapOfDistrictsStyles'
import InteractiveMap from './InteractiveMap'

const initialState = {}

function MapOfDistricts() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MapContext.Provider value={{ state, dispatch }}>
      <ContainerExterior className="map__containerExterior">
        <DistrictsList className="map__districtList" />
        <Mapa className="map__mapa">
          <InteractiveMap className="map__interactiveMap" />
        </Mapa>
      </ContainerExterior>
    </MapContext.Provider>
  )
}

export default MapOfDistricts
