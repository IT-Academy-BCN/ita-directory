import React, {Fragment} from "react";
import {
	ModalBlock,
	ModalBody,
	ModalClose,
	ModalContainer,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	ModalTitle,
} from "./Modal.styles";

const Modal = ({title, footer, children, active, hideModal}) => {
	return (
		<Fragment>
			{active && (
				<ModalBlock>
					<ModalOverlay onClick={() => hideModal()}></ModalOverlay>
					<ModalContainer>
						<ModalHeader>
							<ModalTitle>{title}</ModalTitle>
							<ModalClose onClick={() => hideModal()}>X</ModalClose>
						</ModalHeader>
						<ModalBody>{children}</ModalBody>
						<ModalFooter>{footer}</ModalFooter>
					</ModalContainer>
				</ModalBlock>
			)}
		</Fragment>
	);
};
export default Modal;
