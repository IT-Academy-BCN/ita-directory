import React, {useState} from "react";
import {MapContainer, TileLayer, useMapEvents, Marker} from "react-leaflet";
import "./CustomMap.css";

import "leaflet/dist/leaflet.css";

const CustomMap = ({geometry}) => {
	function LocationMarker() {
		const [position, setPosition] = useState(geometry ? geometry : null);
		console.log("geometry", geometry);
		// eslint-disable-next-line
		const map = useMapEvents({
			click(e) {
				setPosition([e.latlng.lat, e.latlng.lng]);
			},
		});

		return position === null ? null : <Marker position={position}></Marker>;
	}

	return (
		<div className="Mapa">
			<MapContainer
				className="Container"
				center={{lat: geometry[0], lng: geometry[1]}}
				zoom={15}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LocationMarker />
			</MapContainer>
		</div>
	);
};

export default CustomMap;
