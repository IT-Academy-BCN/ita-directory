import React, {useRef, useEffect} from "react";
import {Marker, useMap} from "react-leaflet";

//components
import {icon} from "./MapIcon/MapIcon";
import MapPopup from "./MapPopup/MapPopup";

const MapMarker = ({ad, activePopup}) => {
	const map = useMap();
	const markerRef = useRef(null);

	useEffect(() => {
		if (activePopup) map.openPopup(markerRef.current._popup);
	}, [activePopup]);

	return (
		<Marker position={[ad.map_lat, ad.map_lon]} icon={icon} ref={markerRef}>
			<MapPopup data={ad} />
		</Marker>
	);
};

export default MapMarker;
