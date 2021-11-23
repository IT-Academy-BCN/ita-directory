import React, {useState} from "react";
import {Popup} from "react-leaflet";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

// Styles
import {PopupStyled, Content, Adress, PropertyData, Span, Price} from "./MapPopUp.Style";
import Colors from "theme/Colors";
import Button from "components/units/Button/Button";
import "./MapPopup.css";

// Images
import {adThumbnail3} from "assets/images";

const MapPopup = (props) => {
	// aqui borré ContactPerson y contactPhone porque no hay datos iguales en el json
	// https://api-casas.kevinmamaqi.com/api-casas
	const {city, description, price, title, image, n_rooms, square_meters, gastosIncluidos} = props.data;
	const [active, setActive] = useState(false);
	return (
		<React.Fragment>
			<Popup>
				<PopupStyled>
					{/* <img src={`${process.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={city} /> */}
					<img src={adThumbnail3} alt={city} />
				</PopupStyled>
				<Content>
					<PropertyData>
						<Adress>
							<h2><b>{title} en {city}</b></h2>
							<p>{description}</p>
						</Adress>
						<Price>{Number(price.toFixed(2)).toLocaleString()} €/mes</Price>
						<div className="property-data-extra">
							<li>Gastos {gastosIncluidos ? " incluidos" : " no incluidos "}</li>
							<li>{n_rooms} habitaciones</li>
							<li>{square_meters} m2</li>
						</div>
					</PropertyData>
					<Button
						buttonStyles={{
							display: "flex",
							alignItems: "center",
							width: "7.5rem",
							height: "2.2rem",
							marginTop: "auto",
							fontSize: "1.125rem",
							fontFamily: "Arial",
							color: Colors.strongBlue,
							background: "transparent",
							boxShadow: "none",
							paddingLeft: "0",
						}}
						text="Contactar"
						type="button"
						icon={faComments}
						iconPosition="left"
						iconStyles={{
							marginRight: 5,
							paddingLeft: 0,
						}}
						onClick={() => setActive(true)}
					/>
				</Content>
			</Popup>
			<ContactModal active={active} hideModal={() => setActive(false)} />
		</React.Fragment>
	);
};

export default MapPopup;
