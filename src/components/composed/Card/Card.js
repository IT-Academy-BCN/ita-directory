import React from "react";
import {
	CardStyled,
	StyledImage,
	StyledText,
	StyledDescription,
	StyledFooter,
} from "./Card.style.js";
import PropTypes from "prop-types";

const Card = ({image, title, description, text, footer}) => {
	return (
		<CardStyled>
			<StyledImage {...image} />
			<div className="info">
				<h3>{title}</h3>
				<StyledDescription>{description}</StyledDescription>
				<StyledText>{text}</StyledText>
				<StyledFooter>{footer}</StyledFooter>
			</div>
		</CardStyled>
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
