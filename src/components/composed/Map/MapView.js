import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import data from "assets/data.json";
import MapMarkers from "./MapMarkers";
import {useLocation, useHistory} from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

const MapView = (props) => {
	const [state, setState] = useState({
		currentLocation: {lat: 40.34572785994146, lng: -1.106286485224387},
		zoom: 6,
		data,
	});

	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (location.state.latitude && location.state.longitude) {
			const currentLocation = {
				lat: location.state.latitude,
				lng: location.state.longitude,
			};
			console.log(state);
			setState({
				...state,
				data: {
					apartments: state.data.apartments.concat({
						name: "You are currently here",
						geometry: [currentLocation.lat, currentLocation.lng],
					}),
				},
				currentLocation,
			});
			history.replace({
				pathname: "/map",
				state: {},
			});
		}
		// eslint-disable-next-line
	}, [location]);

	return (
		<MapContainer className="Container-View" center={state.currentLocation} zoom={state.zoom}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<MapMarkers apartments={state.data.apartments} />
		</MapContainer>
	);
};

export default MapView;
