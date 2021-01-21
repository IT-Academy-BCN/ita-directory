import React from "react";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Styles
import {ButtonWrapper} from "./styles";

const AsyncButton = ({
	type,
	text,
	loadingText,
	isLoading,
	onClick,
	disabled,
	icon,
	iconPosition,
	className,
	buttonStyles,
	textStyles,
	iconStyles,
	animated,
}) => {
	const handleClick = () => {
		if (disabled) {
			return;
		}
		onClick();
	};

	return (
		<ButtonWrapper
			onClick={handleClick}
			type={type}
			disabled={disabled}
			className={`${className} ${animated ? "animated" : ""} ${disabled ? "disabled" : ""}`}
			style={{...buttonStyles}} // Spread operator javascript
		>
			{iconPosition === "left" && (
				<FontAwesomeIcon icon={isLoading ? faSpinner : icon} style={{...iconStyles}} />
			)}
			<span style={{...textStyles}}>{isLoading ? loadingText : text}</span>
			{iconPosition === "right" && <FontAwesomeIcon icon={icon} style={{...iconStyles}} />}
		</ButtonWrapper>
	);
};

export default AsyncButton;