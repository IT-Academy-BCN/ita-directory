import React, {useReducer} from "react";
import DistrictsList from "./DistrictsList";
import {MapContext} from "./store/context";
import {reducer} from "./store/reducer";
import {ContainerExterior} from "./mapOfDistrictsStyles"

const initialState = {};

const MapOfDistricts = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<MapContext.Provider value={{state, dispatch}}>
				<ContainerExterior>
					<DistrictsList />
				</ContainerExterior>
			</MapContext.Provider>
		</>
	);
};

export default MapOfDistricts;
