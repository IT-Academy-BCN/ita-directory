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
import PropTypes from "prop-types";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Modal = ({colorModalTitle, title, footer, children, active, hideModal}) => {
	return (
		<Fragment>
			{active && (
				<ModalBlock>
					<ModalOverlay onClick={() => hideModal()}></ModalOverlay>
					<ModalContainer>
						<ModalHeader>
							<ModalTitle colorModalTitle={colorModalTitle}>{title}</ModalTitle>
							<ModalClose onClick={() => hideModal()}>
								<FontAwesomeIcon icon={faTimes} style={{height: "1rem"}} />
							</ModalClose>
						</ModalHeader>
						<ModalBody>{children}</ModalBody>
						<ModalFooter>{footer}</ModalFooter>
					</ModalContainer>
				</ModalBlock>
			)}
		</Fragment>
	);
};

Modal.propTypes = {
	colorModalTitle: PropTypes.string,
	title: PropTypes.string,
	footer: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string,
	]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string,
	]).isRequired,
	active: PropTypes.bool.isRequired,
	hideModal: PropTypes.func.isRequired,
};

export default Modal;
