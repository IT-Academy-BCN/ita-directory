import React from "react";
// import data from "../assets/data.json";
// import Styles from "components/composed/Map/Map.styles";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
// import styled from "styled-components";
import "./Map.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const marker = {lat: 41.3879, lng: 2.16992};
function Map() {
	return (
		<div className="Map">
			<MapContainer className="Map-container" center={marker} zoom={17}>
				<TileLayer
					attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
					url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
				/>

				<Marker position={[marker.lat, marker.lng]}></Marker>
			</MapContainer>
		</div>
	);
}

export default Map;
