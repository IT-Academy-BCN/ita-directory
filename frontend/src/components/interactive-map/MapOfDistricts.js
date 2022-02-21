import React, {useReducer} from "react";
import DistrictsList from "./DistrictsList";
import InteractiveMap from "./InteractiveMap";
import {MapContext} from "./MapContext";
import {mapReducer} from "./mapReducer";

const initialState = "";

const MapOfDistricts = () => {
	const [state, dispatch] = useReducer(mapReducer, initialState);
	return (
		<>
			<MapContext.Provider value={{state, dispatch}}>
				<div className="flex">
					<InteractiveMap />
					<DistrictsList />
				</div>
			</MapContext.Provider>
		</>
	);
};

export default MapOfDistricts;
