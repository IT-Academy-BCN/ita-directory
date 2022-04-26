import React from "react";
import {ModalGraphicStyled} from "./ModalGraphic.styles";

const ModalGraphic = ({children, active, hideModal}) => {
	return active ? (
		<ModalGraphicStyled>
			<div className="modalOverlay" onClick={() => hideModal()}></div>
			<div className="modalBody">{children}</div>
		</ModalGraphicStyled>
	) : (
		<></>
	);
};

export default ModalGraphic;
