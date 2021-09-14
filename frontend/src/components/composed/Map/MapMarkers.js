import React, {Fragment} from "react";
import {Marker} from "react-leaflet";
import {icon} from "./MapIcon";
import MapPopup from "./MapPopup";

const MapMarkers = ({apartments}) => {
	const markers = apartments.map((apartment, i) => (
		<Marker key={i} position={[apartment.lat, apartment.long]} icon={icon}>
			<MapPopup data={apartment} />
		</Marker>
	));

	return <Fragment>{markers}</Fragment>;
};

export default MapMarkers;
