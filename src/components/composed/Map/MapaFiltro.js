import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import data from "assets/data.json";
import MapMarkers from "./MapMarkers";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const FilterMap = () => {
	const bounds = data.apartments.map((el) => el.latlng);

	return (
		<div className="Mapa" style={{width: "480px"}}>
			<div style={{float: "left", marginLeft: "2%"}}></div>
			<MapContainer
				className="Container"
				center={{lat: 41.3879, lng: 2.16992}}
				zoom={12}
				scrollWheelZoom={true}
				bounds={bounds}
				boundsOptions={{padding: [50, 50]}}
				style={{height: "106%", width: "478px"}}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapMarkers apartments={data.apartments} />
			</MapContainer>
		</div>
	);
};

export default FilterMap;
