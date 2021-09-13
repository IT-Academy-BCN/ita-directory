import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

function getMaxMin(ads, prop) {
	let minLat = undefined;
	let maxLat = undefined;
	let minLong = undefined;
	let maxLong = undefined;
	for (let i = 0; i < ads.length; i++) {
		const ad = ads[i];
		const adLat = parseFloat(ad.lat);
		const adLong = parseFloat(ad.long);

		if (minLat) {
			minLat = minLat > adLat ? adLat : minLat;
		} else {
			minLat = adLat;
		}

		if (maxLat) {
			maxLat = maxLat < adLat ? adLat : maxLat;
		} else {
			maxLat = adLat;
		}

		if (minLong) {
			minLong = minLong > adLong ? adLong : minLong;
		} else {
			minLong = adLong;
		}

		if (maxLong) {
			maxLong = maxLong < adLong ? adLong : maxLong;
		} else {
			maxLong = adLong;
		}
	}
	// Este condicional añade coordenadas en el caso de que la busqueda no devuelva resultados
	if (!ads.legth) {
		return {
			topLeft: [41.478316, 2.073087],
			bottomRight: [41.351637, 2.267592],
		};
	}

	// // Latitud = horizontal, longitud = vertical
	return {
		topLeft: [minLat, maxLong],
		bottomRight: [maxLat, minLong],
	};
}

function SetBounds({bounds}) {
	const map = useMap();
	map.fitBounds([bounds.topLeft, bounds.bottomRight]);
	return null;
}

const MapView = ({filteredAds}) => {
	const [fitBoundsCoordinates, setFitBoundsCoordinates] = useState(getMaxMin(filteredAds));
	useEffect(() => {
		setFitBoundsCoordinates(getMaxMin(filteredAds));
	}, [filteredAds]);

	return (
		<MapContainer
			className="Container-View"
			bounds={[fitBoundsCoordinates.topLeft, fitBoundsCoordinates.bottomRight]}
			boundsOptions={{padding: [0, 0]}}
			style={{height: 400, width: "100%"}}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<SetBounds bounds={fitBoundsCoordinates} />
			<MapMarkers apartments={filteredAds} />
		</MapContainer>
	);
};

export default MapView;
