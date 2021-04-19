import React, {Fragment} from "react";
import {ModalBlock, ModalBody, ModalOverlay} from "./ModalGraphic.styles";

const ModalGraphic = ({children, active, hideModal}) => {
	return (
		<Fragment>
			{active && (
				<ModalBlock>
					<ModalOverlay onClick={() => hideModal()}></ModalOverlay>
					<ModalBody>{children}</ModalBody>
				</ModalBlock>
			)}
		</Fragment>
	);
};

export default ModalGraphic;
