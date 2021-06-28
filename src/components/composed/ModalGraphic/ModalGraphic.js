import React from "react";
import {ModalBlock} from "./ModalGraphic.styles";

const ModalGraphic = ({children, active, hideModal}) => {
	return active ? (
		<ModalBlock>
			<button className="modalOverlay" onClick={() => hideModal()}></button>
			<div className="modalBody">{children}</div>
		</ModalBlock>
	) : (
		<></>
	);
};

export default ModalGraphic;
