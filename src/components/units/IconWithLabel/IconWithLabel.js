import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconWithLabelStyled} from "./IconWithLabel.styles";

const IconWithLabel = ({icon, text, className}) => {
	return (
		<IconWithLabelStyled className={className}>
			<FontAwesomeIcon icon={icon} />
			<div className="styledLabel">{text}</div>
		</IconWithLabelStyled>
	);
};

export default IconWithLabel;
