import React, {Component} from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import "./CustomMap.css";
import IconSelector from "./IconSelector/IconSelector";
import {customIcons} from "./CustomMapIcons";

let currentIcon = customIcons[1].url;
const handelOnClickIcon = (icon) => {
	currentIcon = icon;
	console.log(icon);
};

let layer;

function Marcador({saveMarkers}) {
	const icon = L.icon({
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
		iconUrl: currentIcon,
		// shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
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
			//	data: [],
			iconSelection: false,
			currentIconState: currentIcon,
		};
	}
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
					<Marcador saveMarkers={this.saveMarkers} />
				</MapContainer>
				<button className="ButtonIcons" type="button" onClick={this.handleOnClick}>
					<img className="IconIMG" src={currentIcon} alt="" />
				</button>

				{this.iconSelection ? (
					<div>
						<IconSelector
							customIcons={customIcons}
							handelOnClickIcon={handelOnClickIcon}
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
