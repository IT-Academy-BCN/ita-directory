import React from "react";
import {IconImg} from "./IconsSelector.styles";

export const CustomIcon = (props) => {
	const {icono, handelOnClickIcon} = props;
	return (
		<IconImg key={icono.key} onClick={() => handelOnClickIcon(icono.url)}>
			<img src={icono.url} alt={icono.key} />
		</IconImg>
	);
};

export default CustomIcon;
