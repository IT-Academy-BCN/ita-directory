import React from "react";
import {
	Container,
	CardInfo,
	StyledTitle,
	StyledImage,
	StyledText,
	StyledDescription,
	StyledFooter,
} from "./Card.style.js";
import PropTypes from "prop-types";

const Card = ({image, title, description, text, footer}) => {
	return (
		<Container>
			<StyledImage {...image} />
			<CardInfo>
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{description}</StyledDescription>
				<StyledText>{text}</StyledText>
				<StyledFooter>{footer}</StyledFooter>
			</CardInfo>
		</Container>
	);
};
Card.propTypes = {
	image: PropTypes.object,
	title: PropTypes.string,
	description: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string,
	]).isRequired,
	text: PropTypes.string,
	footer: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string,
	]),
};

export default Card;
