import React, {useState} from "react";

import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import TextArea from "components/units/TextArea/TextArea.js";

import {ButtonWrapper} from "./ContactModal.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import contactSchema from "validation/contactModalSchema.js";

const ContactModal = ({active, hideModal}) => {
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(contactSchema),
	});

	const submitForm = (data) => {
		const {name, email, message} = data;
		sendContact(name, email, message, (err) => {
			console.log(err);
		});
	};

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

	return (
		<Modal active={active} hideModal={hideModal} title="Contactar">
			<form onSubmit={handleSubmit(submitForm)}>
				<Input
					type="text"
					name="name"
					label="Nombre"
					inputContainerClassName="input-container"
					register={register("name")}
					error={errors.name?.message}
				/>

				<Input
					type="text"
					name="email"
					label="Email"
					inputContainerClassName="input-container"
					register={register("email")}
					error={errors.email?.message}
				/>

				<TextArea
					name="message"
					label="Mensaje"
					textAreaStyles={{width: "100%"}}
					register={register("message")}
					error={errors.message?.message}
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
