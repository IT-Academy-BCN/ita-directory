import React from "react";
import {SimplifiedButtonStyled} from "./SimplifiedButton.styles";
import PropTypes from "prop-types";

const SimplifiedButton = ({text, loadingText, type, isLoading, disabled}) => {
	return (
		<SimplifiedButtonStyled type={type} disabled={disabled}>
			<span>{isLoading ? loadingText : text}</span>
		</SimplifiedButtonStyled>
	);
};

SimplifiedButton.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string,
	loadingText: PropTypes.string,
	isLoading: PropTypes.bool,
	iconPosition: PropTypes.string,
	className: PropTypes.string,
	buttonStyles: PropTypes.string,
	textStyles: PropTypes.object,
	iconStyles: PropTypes.string,
	animated: PropTypes.bool,
	disabled: PropTypes.bool,
};

export default SimplifiedButton;
