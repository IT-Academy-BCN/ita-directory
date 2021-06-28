import React from "react";
import {ModalBlock, ModalBody, ModalOverlay} from "./ModalGraphic.styles";

const ModalGraphic = ({children, active, hideModal}) => {
	return active ? (
		<ModalBlock>
			<ModalOverlay onClick={() => hideModal()}></ModalOverlay>
			<ModalBody>{children}</ModalBody>
		</ModalBlock>
	) : (
		<></>
	);
};

export default ModalGraphic;
