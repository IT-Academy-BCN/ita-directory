import React from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";

const ContactModal = ({active, hideModal}) => {
	return (
		<Modal
			active={active}
			hideModal={hideModal}
			title="Modal title"
			footer={<Button>Footer Button</Button>}
		>
			Modal body..
		</Modal>
	);
};

export default ContactModal;
