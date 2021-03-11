import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import data from "assets/data.json";
import MapMarkers from "./MapMarkers";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

const MapView = () => {
	const bounds = data.apartments.map((el) => el.latlng);

	return (
		<MapContainer bounds={bounds} boundsOptions={{padding: [50, 50]}}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<MapMarkers apartments={data.apartments} />
		</MapContainer>
	);
};

export default MapView;
