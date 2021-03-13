import React, {useState} from "react";
import {MapContainer, TileLayer, useMapEvents, Marker} from "react-leaflet";
import PropTypes from "prop-types";
import "./CustomMap.css";

import "leaflet/dist/leaflet.css";

const CustomMap = ({geometry, onClick}) => {
	function LocationMarker() {
		const [position, setPosition] = useState(geometry ? geometry : null);
		// eslint-disable-next-line
		const map = useMapEvents({
			click(e) {
				const clickedPosition = [e.latlng.lat, e.latlng.lng];
				setPosition(clickedPosition);
				if (onClick) {
					onClick(clickedPosition);
				}
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

CustomMap.propTypes = {
	geometry: PropTypes.array,
	onClick: PropTypes.func,
};

export default CustomMap;
