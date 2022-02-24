import React, {useReducer} from "react";
import DistrictsList from "./DistrictsList";
import InteractiveMap from "./InteractiveMap";
import {MapContext} from "./store/context";
import {reducer} from "./store/reducer";

const initialState = {};

const MapOfDistricts = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<MapContext.Provider value={{state, dispatch}}>
				<div className="flex p-2 ">
					<InteractiveMap />
					<DistrictsList />
				</div>
			</MapContext.Provider>
		</>
	);
};

export default MapOfDistricts;
