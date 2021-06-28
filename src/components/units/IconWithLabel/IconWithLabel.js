import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledIconWithLabel} from "./IconWithLabel.styles";

const IconWithLabel = ({icon, text, className}) => {
	return (
		<StyledIconWithLabel className={className}>
			<FontAwesomeIcon icon={icon} />
			<div className="styledLabel">{text}</div>
		</StyledIconWithLabel>
	);
};

export default IconWithLabel;
