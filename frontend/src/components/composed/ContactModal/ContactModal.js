import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import {StyledSmall, ButtonWrapper} from "./ContactModal.style.js";
import TextArea from "components/units/TextArea/TextArea.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

import contactSchema from "validation/contactModalSchema.js";

const ContactModal = ({active, hideModal}) => {
	const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const sendContact = (name, email, message, callback) => {
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
			console.log(`send contact => ${name}, ${email}, ${message}`);
			callback("The message could not be sent");
		}, 2000);
	};

	const handleValidateForm = async (values) => {
		try {
			await contactSchema.validate(values, {abortEarly: false});
			setError("");
			sendContact(values.name, values.email, values.message, (res) => {
				console.log(res);
			});
		} catch (err) {
			setError(err.errors[0]);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const values = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		handleValidateForm(values);
	};

	return (
		<Modal active={active} hideModal={hideModal} title="Contactar">
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="name"
					label="Nombre"
					inputContainerClassName="input-container"
				/>

				<Input
					type="text"
					name="email"
					label="Email"
					inputContainerClassName="input-container"
				/>

				<TextArea name="message" label="Mensaje" textAreaStyles={{width: "100%"}} />

				<StyledSmall>{error}</StyledSmall>

				<Button
					text="Enviar"
					loadingText="Enviando"
					iconPosition="left"
					type="submit"
					className="darkBlue"
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
					buttonStyles={{
						position: "absolute",
						bottom: "0",
						right: "0",
						width: "auto",
						minWidth: "110px",
						marginRight: 0,
						paddingRight: "15px",
						paddingLeft: "15px",
						backgroundColor: Colors.extraDarkBlue,
					}}
					iconStyles={{
						width: "1.5rem",
						height: "1.5rem",
					}}
				/>
			</form>

			<ButtonWrapper>
				<Button
					text="Cancelar"
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
					}}
					iconStyles={{
						paddingRight: "5px",
						paddingLeft: "0px",
						width: "1rem",
						height: "1rem",
					}}
				/>
			</ButtonWrapper>
		</Modal>
	);
};

export default ContactModal;
