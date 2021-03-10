import React from "react";
import {Popup} from "react-leaflet";

const MapPopup = (props) => {
	const {
		imgDesc,
		monthlyRent,
		numRooms,
		squareMeters,
		contactPerson,
		contactPhone,
		imgName,
	} = props.data;
	return (
		<Popup>
			<div>{imgDesc} contactar</div> {/* //alt */}
			<div>
				<img src={imgName} alt={imgDesc} /> {/* //url alt */}
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
