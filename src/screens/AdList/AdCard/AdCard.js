import React, {useState} from "react";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

// Styles
import {AdCardStyled} from "./AdCard.style";

const AdCard = ({image, name, price, m2, gastosIncluidos, desc, habitaciones}) => {
	console.log(image);
	const [active, setActive] = useState(false);

	return (
		<AdCardStyled>
			<img src={`${process.env.REACT_APP_STATIC_FILES_URL}/${image}`} alt={name} />
			<div className="content">
				<p className="address">Address here (missing from API).</p>
				<div className="property-data">
					<span className="price">{price} €</span>
					<span>{habitaciones} habitaciones</span>
					<span>{m2}</span>
					<span>Gastos {gastosIncluidos ? " incluidos" : " no incluidos"}</span>
				</div>
				<div className="description">{desc}</div>
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
			</div>
			<ContactModal active={active} hideModal={() => setActive(false)} />
		</AdCardStyled>
	);
};
export default AdCard;
