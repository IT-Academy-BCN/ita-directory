import React from "react";
import {CardStyled} from "./Card.style.js";
import PropTypes from "prop-types";

const Card = ({image, title, description, text, footer}) => {
	return (
		<CardStyled>
			<img src={image} alt="Card" />
			<div className="info">
				<h3>{title}</h3>
				<div className="description">{description}</div>
				<p>{text}</p>
				<div className="footer">{footer}</div>
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
