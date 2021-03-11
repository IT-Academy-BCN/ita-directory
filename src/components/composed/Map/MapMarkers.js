import React from "react";
import {Marker} from "react-leaflet";
import {icon} from "./MapIcon";
import MapPopup from "./MapPopup";

const MapMarkers = ({apartments}) => {
	const markers = apartments.map((apartment, i) => (
		<Marker key={i} position={apartment.latlng} icon={icon}>
			<MapPopup data={apartment} />
		</Marker>
	));

	return <>{markers}</>;
};

export default MapMarkers;
