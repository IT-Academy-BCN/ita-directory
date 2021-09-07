import React, {Component} from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import "./CustomMap.css";
import IconSelector from "./IconSelector/IconSelector";
import {customIcons} from "./CustomMapIcons";

let layer;

function Marcador({saveMarkers, currentIcon}) {
	const icon = L.icon({
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
		iconUrl: currentIcon,
	});
	const map = useMapEvents({
		click: (e) => {
			const {lat, lng} = e.latlng;
			if (layer) layer.removeFrom(map);
			layer = L.marker([lat, lng], {icon}).addTo(map);
			saveMarkers([lat, lng]);
			map.panTo(e.latlng);
		},
	});
	return null;
}

class CustomMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [[41.3879, 2.16992]],
			iconSelection: false,
			currentIconState: customIcons[1].url,
		};
	}

	handelOnClickIcon = (icon) => {
		this.setState((prevState) => ({...prevState, currentIconState: icon}));
	};

	reRender = () => {
		// calling the forceUpdate() method
		this.forceUpdate();
	};

	saveMarkers = (newMarkerCoords) => {
		const markers = [...this.state.markers, newMarkerCoords];
		this.setState((prevState) => ({...prevState, markers}));
	};
	handleOnClick = () => {
		this.iconSelection = !this.iconSelection;
		this.setState((prevState) => ({...prevState, iconSelection: this.iconSelection}));
	};

	render() {
		return (
			<div className="Mapa">
				<MapContainer
					className="Container"
					center={{
						lat: 41.3879,
						lng: 2.16992,
					}}
					zoom={18}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marcador
						saveMarkers={this.saveMarkers}
						currentIcon={this.state.currentIconState}
					/>
				</MapContainer>
				<button className="ButtonIcons" type="button" onClick={this.handleOnClick}>
					<img className="IconIMG" src={this.state.currentIconState} alt="" />
				</button>

				{this.iconSelection ? (
					<div>
						<IconSelector
							customIcons={customIcons}
							handelOnClickIcon={this.handelOnClickIcon}
							reRender={this.reRender}
						/>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}
}

export default CustomMap;
