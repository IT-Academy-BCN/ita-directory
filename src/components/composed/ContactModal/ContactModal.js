import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import useInput from "hooks/useInput";
import {Wrapper} from "./ContactModal.style.js";

const ContactModal = ({active, hideModal}) => {
	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const validateEmail = (email) => {
		if (!email) return "Email is required";
		if (!EMAIL_REGEX.test(email.toLowerCase())) return "Email invalid";
		return "";
	};

	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [name, bindName, resetName] = useInput("");
	const [email, bindEmail, resetEmail] = useInput("", validateEmail);
	const [message, bindMessage, resetMessage] = useInput("");

	const sendContact = (name, email, message, callback) => {
		setTimeout(() => {
			console.log(`send contact => ${name}, ${email}, ${message}`);
			callback("The message could not be sent");
		}, 2000);
	};

	const resetForm = () => {
		resetEmail();
		resetName();
		resetMessage();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 2000);

		sendContact(name, email, message, (error) => {
			resetForm();
		});
	};

	return (
		<Modal
			active={active}
			hideModal={hideModal}
			title="Contactar"
			footer={
				<Button
					text="Enviar"
					loadingText="Enviando"
					iconPosition="left"
					type="submit"
					className="darkBlue"
					/* textStyles={{marginLeft: 10}} */
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
					onClick={handleSubmit}
					form
				/>
			}
		>
			<Wrapper>
				<Input
					type="text"
					name="name"
					placeholder="Nombre"
					textStyle={{padding: 5}}
					{...bindName}
				/>
			</Wrapper>

			<Wrapper>
				<Input
					type="text"
					name="email"
					placeholder="Email"
					textStyle={{padding: 5}}
					{...bindEmail}
				/>
			</Wrapper>

			<Wrapper>
				<Input
					type="textarea"
					name="message"
					placeholder="Mensaje"
					className="styleInput"
					textStyle={{padding: 5}}
					{...bindMessage}
				/>
			</Wrapper>
		</Modal>
	);
};

export default ContactModal;
