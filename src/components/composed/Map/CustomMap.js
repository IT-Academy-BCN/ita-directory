import React, {useState} from "react";
import {MapContainer, TileLayer, useMapEvents, Marker} from "react-leaflet";
import "./CustomMap.css";

import "leaflet/dist/leaflet.css";

const CustomMap = () => {
	function LocationMarker() {
		const [position, setPosition] = useState(null);
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
				center={{lat: 41.3879, lng: 2.16992}}
				zoom={18}
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
