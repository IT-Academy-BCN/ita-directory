import React from "react";
import {Popup} from "react-leaflet";

const MapPopup = (props) => {
	const {image, price, habitaciones, m2, name} = props.data; // aqui borré ContactPerson y contactPhone porque no hay datos iguales en el json
	return (
		<Popup>
			<div>{name} contactar</div>
			<div>
				<img src={image} alt={name} />
				{/* //no lee image porque no hay imagen en el json */}
			</div>
			<div>{Number(price.toFixed(2)).toLocaleString() + " €"}/mes</div>
			<div>{habitaciones} habitaciones</div>
			<div>{m2} m2</div>
			{/* <div>{contactPerson} contactar</div>
			<div>{contactPhone} contactar</div> */}
		</Popup>
	);
};

export default MapPopup;
