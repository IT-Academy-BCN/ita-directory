import React, {Component} from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import "./CustomMap.css";

import "leaflet/dist/leaflet.css";

const icon = L.icon({
	iconSize: [25, 41],
	iconAnchor: [10, 41],
	popupAnchor: [2, -40],
	iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function Marcador({saveMarkers}) {
	const map = useMapEvents({
		click: (e) => {
			const {lat, lng} = e.latlng;
			L.marker([lat, lng], {icon}).addTo(map);
			saveMarkers([lat, lng]);
		},
	});
	return null;
}

class CustomMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [[41.3879, 2.16992]],
			data: [],
		};
	}

	saveMarkers = (newMarkerCoords) => {
		const data = [...this.state.data, newMarkerCoords];
		this.setState((prevState) => ({...prevState, data}));
	};

	render() {
		return (
			<div className="Map">
				<MapContainer
					className="Map-container"
					center={{lat: 41.3879, lng: 2.16992}}
					zoom={18}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marcador saveMarkers={this.saveMarkers} />
				</MapContainer>
			</div>
		);
	}
}

export default CustomMap;
