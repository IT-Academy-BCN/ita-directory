import React, {Fragment} from "react";
import {ModalBlock} from "./Modal.styles";
import PropTypes from "prop-types";

import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "../../../theme/Colors";

import Button from "../../units/Button/Button";

const Modal = ({title, footer, children, active, hideModal}) => {
	return (
		<Fragment>
			{active && (
				<ModalBlock>
					<button className="modalOverlay" onClick={() => hideModal((prev) => !prev)} />
					<div className="modalContainer">
						<div className="modalHeader">
							<span>{title}</span>
							<Button
								iconPosition="left"
								type="submit"
								onClick={() => hideModal()}
								icon={faTimes}
								buttonStyles={{
									color: Colors.lightGrey,
									background: "transparent",
									boxShadow: "none",
									fontSize: "0.95rem",
									fontFamily: "Arial",
									width: "auto",
									paddingLeft: 0,
									paddingRight: 0,
								}}
								iconStyles={{
									paddingRight: "5px",
									paddingLeft: "0px",
									width: "1rem",
									height: "1rem",
								}}
							/>
						</div>
						<div className="modalBody">{children}</div>
						<div className="modalFooter">{footer}</div>
					</div>
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

/* Before removing the 'x'

const Modal = ({colorModalTitle, title, footer, children, active, hideModal}) => {
	return (
		<Fragment>
			{active && (
				<ModalBlock>
					<button className="modalOverlay" onClick={() => hideModal()}></button>
					<div className="modalContainer">
						<div className="modalHeader">
							<span colorModalTitle={colorModalTitle}>{title}</span>
							<button className="modalClose" onClick={() => hideModal()}>
								<FontAwesomeIcon icon={faTimes} style={{height: "1rem"}} />
							</button>
						</div>
						<div className="modalBody">{children}</div>
						<div className="modalFooter">{footer}</div>
					</div>
				</ModalBlock>
			)}
		</Fragment>
	);
};

*/
