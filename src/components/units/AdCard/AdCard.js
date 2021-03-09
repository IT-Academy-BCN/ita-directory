import React from "react";
import {adCardImage} from "assets/images";
import {
	Container,
	AdCardInfo,
	StyledTitle,
	StyledImage,
	StyledText,
	StyledDescription,
	StyledPrice,
	StyledP,
} from "./AdCard.style.js";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";

const handleClick = () => {};

const AdCard = ({image, title, children, footer}) => {
	return (
		<Container>
			<StyledImage src={adCardImage} alt="Casa Piscina" />
			<AdCardInfo>
				<StyledTitle>Piso en calle Ángel Puech, Valdeacederas, Madrid </StyledTitle>

				<StyledDescription>
					<StyledPrice>990 €/mes</StyledPrice>
					<StyledP>3 habitaciones</StyledP>
					<StyledP>95m2</StyledP>
					<StyledP>Gastos incluidos</StyledP>
				</StyledDescription>

				<StyledText>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</StyledText>

				<Button
					buttonStyles={{
						width: "7.5rem",
						height: "2.2rem",
						marginTop: "auto",
						fontSize: "1.125rem",
						fontFamily: "Arial",
						color: Colors.strongBlue,
						background: "transparent",
						boxShadow: "none",
					}}
					text="Contactar"
					type="button"
					onClick={handleClick}
					icon={faComments}
					iconPosition="left"
					iconStyles={{marginRight: 5}}
				/>
			</AdCardInfo>
		</Container>
	);
};
export default AdCard;
