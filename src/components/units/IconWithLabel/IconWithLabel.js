import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledIconWithLabel, StyledLabel} from "./IconWithLabel.styles";

const IconWithLabel = ({icon, text, className}) => {
	return (
		<StyledIconWithLabel className={className}>
			<FontAwesomeIcon icon={icon} />
			<StyledLabel>{text}</StyledLabel>
		</StyledIconWithLabel>
	);
};

export default IconWithLabel;
