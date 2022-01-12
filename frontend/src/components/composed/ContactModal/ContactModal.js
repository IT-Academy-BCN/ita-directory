import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import useInput from "hooks/useInput";
import {Wrapper, StyledSmall, ButtonWrapper} from "./ContactModal.style.js";
import TextArea from "components/units/TextArea/TextArea.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const ContactModal = ({id, active, hideModal}) => {
	const EMAIL_REGEX =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const validateEmail = (email) => {
		if (!email) return "Email is required";
		if (!EMAIL_REGEX.test(email.toLowerCase())) return "Email invalid";
		return "";
	};

	const [error, setError] = useState("");
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

	const isAnyFieldEmpty = () => {
		return name.length === 0 || email.length === 0 || message.length === 0;
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

		if (isAnyFieldEmpty()) {
			setError("Missing required fields");
			return;
		}

		sendContact(name, email, message, (error) => {
			if (error) {
				setError(error);
			} else {
				setError("");
				console.log("The message has been sent!");
				resetForm();
			}
		});
	};

	return (
		<Modal
			active={active}
			hideModal={hideModal}
			title="Contactar"
			footer={
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
					<Button
						text="Enviar"
						loadingText="Enviando"
						iconPosition="left"
						type="submit"
						className="darkBlue"
						isLoading={isLoading}
						animated={animatedState}
						disabled={disabled}
						onClick={handleSubmit}
						buttonStyles={{marginRight: 0}}
					/>
				</ButtonWrapper>
			}
		>
			<Wrapper>
				<p>Estoy intentando contactar por el anuncio con id: {id}</p>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					name="name"
					label="Nombre"
					{...bindName}
					inputContainerClassName="input-container"
					onChange
				/>
			</Wrapper>

			<Wrapper>
				<Input
					type="text"
					name="email"
					label="Email"
					{...bindEmail}
					inputContainerClassName="input-container"
				/>
			</Wrapper>

			<Wrapper>
				<TextArea
					name="message"
					label="Mensaje"
					required={true}
					{...bindMessage}
					textAreaStyles={{width: "100%"}}
				/>
			</Wrapper>

			<StyledSmall>{error}</StyledSmall>
		</Modal>
	);
};

export default ContactModal;
