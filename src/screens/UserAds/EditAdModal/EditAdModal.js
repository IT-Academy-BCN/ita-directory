import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import useInput from "hooks/useInput";
import {Wrapper, StyledSmall, ButtonWrapper} from "./EditAdModal.style";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const EditAdModal = ({id, active, hideModal}) => {
	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
	const [message, resetMessage] = useInput("");

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
			title="Editar Anuncio"
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
				<Input
					type="text"
					name="name"
					label="Título"
					{...bindName}
					inputContainerClassName="input-container"
				/>
			</Wrapper>

			<Wrapper>
				<Input
					type="text"
					name="desc"
					label="Descripción"
					{...bindEmail}
					inputContainerClassName="input-container"
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					name="m2"
					label="Superficie total"
					{...bindEmail}
					inputContainerClassName="input-container"
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					name="habitaciones"
					label="Número de habitaciones"
					{...bindEmail}
					inputContainerClassName="input-container"
				/>
			</Wrapper>

			<StyledSmall>{error}</StyledSmall>
		</Modal>
	);
};

export default EditAdModal;
