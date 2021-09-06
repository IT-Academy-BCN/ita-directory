import React from "react";
import {ModalGraphicStyled} from "./ModalGraphic.styles";

const ModalGraphic = ({children, active, hideModal}) => {
	return active ? (
		<ModalGraphicStyled>
			<button className="modalOverlay" onClick={() => hideModal()}></button>
			<div className="modalBody">{children}</div>
		</ModalGraphicStyled>
	) : (
		<></>
	);
};

export default ModalGraphic;
