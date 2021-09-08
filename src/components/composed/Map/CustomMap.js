import React, {useState} from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import "./CustomMap.css";
import IconSelector from "./IconSelector/IconSelector";
import {customIcons} from "./CustomMapIcons";

let layer;

const Marcador = ({currentIcon}) => {
	// const [markers, setMarkers] = useState([[41.3879, 2.16992]]);

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
			// setMarkers([lat, lng]);
			map.panTo(e.latlng);
		},
	});
	return null;
};

const CustomMap = () => {
	const [iconSelection, setIconSelection] = useState(false);
	const [iconState, setIconState] = useState(customIcons[1].url);

	const handelOnClickIcon = (icon) => {
		setIconState(icon);
	};

	const handleOnClick = () => {
		setIconSelection(!iconSelection);
	};

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
				<Marcador currentIcon={iconState} />
			</MapContainer>
			<button className="ButtonIcons" type="button" onClick={handleOnClick}>
				<img className="IconIMG" src={iconState} alt="" />
			</button>

			{iconSelection ? (
				<div>
					<IconSelector customIcons={customIcons} handelOnClickIcon={handelOnClickIcon} />
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default CustomMap;
