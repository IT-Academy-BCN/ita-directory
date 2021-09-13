import React, {useState} from "react";
import {Popup} from "react-leaflet";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

// Styles
import {PopupStyled, Content, Adress, PropertyData, Span, Price} from "./MapPopUp.Style";
import Colors from "theme/Colors";
import Button from "components/units/Button/Button";
import "./MapPopup.css";

const MapPopup = (props) => {
	// aqui borré ContactPerson y contactPhone porque no hay datos iguales en el json
	// https://api-casas.kevinmamaqi.com/api-casas
	const {price, image, name, habitaciones, m2, gastosIncluidos} = props.data;
	const [active, setActive] = useState(false);
	return (
		<React.Fragment>
			<Popup>
				<PopupStyled>
					<img src={`${process.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />
				</PopupStyled>
				<Content>
					<PropertyData>
						<Adress>
							<p>{name}</p>
						</Adress>
						<Price>{Number(price.toFixed(2)).toLocaleString()} €/mes</Price>
						<div className="property-data-extra">
							<Span>Gastos {gastosIncluidos ? " incluidos" : " no incluidos"}</Span>
							<Span>{habitaciones} habitaciones </Span>
							<Span>{m2} m2</Span>
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
