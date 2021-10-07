import React, {useState, useEffect} from "react";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "./Map.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function Map({lat = 41.3879, lng = 2.16992}) {
	const marker = {lat, lng};

	//new changes made
	//@todo -> consult https://leafletjs.com/reference-0.7.7.html#events docs to obtain altitude and latitude values
	const [coords, setCoords] = useState[{lat: 0, lng: 0}];
	const generateCoords = (marker) => {
		setCoords({lat: marker.lat, lng: marker.lng});
		console.log(marker);
		localStorage.setItem("marker", JSON.stringify(marker));
	};
	useEffect(() => {
		console.log(coords);
		localStorage.setItem("marker", JSON.stringify(coords));
	}, [coords]);
	return (
		<div className="Map">
			<MapContainer className="Map-container" center={marker} zoom={17}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<Marker
					position={[marker.lat, marker.lng]}
					onClick={() => generateCoords(marker)}
				></Marker>
			</MapContainer>
		</div>
	);
}

export default Map;
