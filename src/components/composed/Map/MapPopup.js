import React from "react";
import {Popup} from "react-leaflet";
import {Prova, StyledPopup} from "./MapPopUp.Style";

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
			<StyledPopup>
				<div>
					<img src={imgName} alt={imgName} />
				</div>
				<div>{imgDesc} contactar</div>
				<Prova>{Number(monthlyRent.toFixed(2)).toLocaleString() + " €"}/mes</Prova>
				<div>{numRooms} habitaciones</div>
				<div>{squareMeters} m2</div>
				<div>{contactPerson} contactar</div>
				<div>{contactPhone} contactar</div>
			</StyledPopup>
		</Popup>
	);
};

export default MapPopup;
