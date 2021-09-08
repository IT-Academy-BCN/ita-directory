import React from "react";
import {IconImg} from "../IconsSelector.styles";

const CustomIcon = ({icono, handelOnClickIcon}) => {
	return (
		<IconImg
			key={icono.key}
			onClick={() => {
				handelOnClickIcon(icono.url);
			}}
		>
			<img src={icono.url} alt={icono.key} />
		</IconImg>
	);
};

export default CustomIcon;
