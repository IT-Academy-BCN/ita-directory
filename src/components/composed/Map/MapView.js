import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import MapMarkers from "./MapMarkers";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

const MapView = ({filteredAds}) => {
	const dataMarkers = filteredAds;
	console.log(dataMarkers);

	function getMax(dataMarkers, prop) {
		let max;
		for (let i = 0; i < dataMarkers.length; i++) {
			if (max == null || parseFloat(dataMarkers[i][prop]) > parseFloat(max[prop]))
				max = dataMarkers[i];
		}
		return max;
	}

	let maxLat = getMax(dataMarkers, "lat");
	console.log(maxLat);
	let maxLong = getMax(dataMarkers, "long");
	console.log(maxLong);

	function getMin(dataMarkers, prop) {
		let min;
		for (let i = 0; i < dataMarkers.length; i++) {
			if (min == null || parseFloat(dataMarkers[i][prop]) < parseFloat(min[prop]))
				min = dataMarkers[i];
		}
		return min;
	}
	let minLat = getMin(dataMarkers, "lat");
	console.log(minLat);
	let minLong = getMin(dataMarkers, "long");
	console.log(minLong);

	const outer = [maxLat, minLat, maxLong, minLong];
	console.log(outer);

	//AQUI COMENZAMOS A PLANTEAR EL BOUND, NO ESTÁ DESARROLLADO
	// function getBoundView(outer){
	// const [bounds, setBounds] = useState(outer);
	//   const map = useMap();
	//   setBounds(innerBounds)
	//   map.fitBounds(innerBounds)

	// }

	// const [bounds, setBounds] = useState(outer);

	// // eslint-disable-next-line no-unused-vars
	// const onClickOuter = () => {
	// 	setBounds({bounds: outer});
	// };
	// // eslint-disable-next-line

	return (
		<MapContainer
			className="Container-View"
			// center={state.currentLocation}
			// zoom={state.zoom}
			// bound={bounds}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<MapMarkers apartments={filteredAds} />
		</MapContainer>
	);
};

export default MapView;
