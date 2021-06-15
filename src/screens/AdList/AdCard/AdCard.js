import React, {useState} from "react";
import {adCardImage} from "assets/images";
import {StyledPrice, StyledP} from "./AdCard.style.js";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";
import Card from "components/composed/Card/Card";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

const AdCard = ({image, title, price, m2, gastosIncluidos, desc, habitaciones}) => {
	const [active, setActive] = useState(false);

	return (
		<Card
			image={{src: adCardImage, alt: "Casa Piscina"}}
			title={title}
			description={
				<>
					<StyledPrice>{price}€/mes</StyledPrice>
					<StyledP>{habitaciones} Habitaciones</StyledP>
					<StyledP>{m2}m2</StyledP>
					<StyledP>
						{gastosIncluidos ? "Gastos incluidos" : "Gastos no incluidos"}
					</StyledP>
				</>
			}
			text={desc}
			footer={
				<>
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
					<ContactModal active={active} hideModal={() => setActive(false)} />
				</>
			}
		/>
	);
};
export default AdCard;
