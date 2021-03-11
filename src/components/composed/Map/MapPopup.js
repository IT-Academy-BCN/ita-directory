import React from "react";
import {Popup} from "react-leaflet";
import {
	StyledPopup,
	StyledImage,
	StyledPopupData,
	StyledPhone,
	StyledChar,
	StyledContact,
	StyledPrice,
	StyledDescription,
} from "./MapPopUp.Style";

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
					<StyledImage src={imgName} alt={imgName} />
				</div>
				<StyledPopupData>
					<StyledDescription>{imgDesc}</StyledDescription>
					<StyledPrice>
						{Number(monthlyRent.toFixed(2)).toLocaleString() + " €"}/mes
					</StyledPrice>
					<StyledChar>
						{numRooms} habitaciones {squareMeters} m2
					</StyledChar>

					<StyledContact>{contactPerson} contactar</StyledContact>
					<StyledPhone>{contactPhone}</StyledPhone>
				</StyledPopupData>
			</StyledPopup>
		</Popup>
	);
};

export default MapPopup;
