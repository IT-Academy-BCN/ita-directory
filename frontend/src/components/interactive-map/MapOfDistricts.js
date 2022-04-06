import React, {useReducer} from "react";
import DistrictsList from "./DistrictsList";
import {MapContext} from "./store/context";
import {reducer} from "./store/reducer";
import {ContainerExterior, Mapa} from "./mapOfDistrictsStyles"
import InteractiveMap from "./InteractiveMap";


const initialState = {};

const MapOfDistricts = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<MapContext.Provider value={{state, dispatch}}>
				<ContainerExterior>
					<DistrictsList />
					<Mapa>
						<InteractiveMap />
					</Mapa>
				</ContainerExterior>
			</MapContext.Provider>
		</>
	);
};

export default MapOfDistricts;
