import React from "react";
import {Popup} from "react-leaflet";

const MapPopup = (props) => {
	const {url, monthlyRent, numRooms, squareMeters, contactPerson, contactPhone, alt} = props.data;
	return (
		<Popup>
			<div>{alt} contactar</div>
			<div>
				<img src={url} alt={alt} />
			</div>
			<div>{Number(monthlyRent.toFixed(2)).toLocaleString() + " €"}/mes</div>
			<div>{numRooms} habitaciones</div>
			<div>{squareMeters} m2</div>
			<div>{contactPerson} contactar</div>
			<div>{contactPhone} contactar</div>
		</Popup>
	);
};

export default MapPopup;
