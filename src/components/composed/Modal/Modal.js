import React, {Fragment} from "react";
import {ModalBlock, ModalBody, ModalOverlay, ModalTitle} from "./Modal.styles";
import PropTypes from "prop-types";

const Modal = ({title, footer, children, active, hideModal}) => {
	return (
		<Fragment>
			{active && (
				<ModalBlock>
					<ModalOverlay onClick={() => hideModal()}></ModalOverlay>
					<ModalTitle>{title}</ModalTitle>
					<ModalBody>{children}</ModalBody>
				</ModalBlock>
			)}
		</Fragment>
	);
};

Modal.propTypes = {
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
