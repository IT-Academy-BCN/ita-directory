import React from "react";
import {adThumbnail3} from "assets/images";
import {
	Container,
	AdCardInfo,
	StyledTitle,
	StyledImage,
	StyledText,
	StyledDescription,
	StyledPrice,
	StyledP,
	StyledLink,
} from "./AdCard.style.js";
import {Link} from "react-router-dom";
import IconWithLabel from "components/units/IconWithLabel/IconWithLabel";
import {faComments} from "@fortawesome/free-solid-svg-icons";

const AdCard = ({image, title, children, footer}) => {
	return (
		<Container>
			<StyledImage src={adThumbnail3} alt="Casa Piscina" />
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

				<StyledLink>
					<Link>
						<IconWithLabel icon={faComments} text="Contactar" />
					</Link>
				</StyledLink>
			</AdCardInfo>
		</Container>
	);
};
export default AdCard;
