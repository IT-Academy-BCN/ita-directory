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
						</ModalHeader>
						<ModalBody>{children}</ModalBody>
						<ModalFooter>
							<ModalClose onClick={() => hideModal()}>X Cancelar </ModalClose>
							{footer}
						</ModalFooter>
					</ModalContainer>
				</ModalBlock>
			)}
		</Fragment>
	);
};
export default Modal;
