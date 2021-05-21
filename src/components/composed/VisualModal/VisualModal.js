import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
//import useInput from "hooks/useInput";
import {
	StyledSmall,
	ButtonWrapper,
	StyledFormBack,
	StyledPhotoWrapper,
	ImageWrapper,
	StyledLabel,
	StyleUploadPhotoWrapper,
	StyledInputsWrapper,
} from "components/composed/VisualModal/VisualModal.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validatePassword = (password) => PASSWORD_REGEX.test(password);

const VisualModal = ({updateCerrar, currentVisual, active, hideModal}) => {
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [isPassError2, setIsPassError2] = useState(false);
	const [disabled, setIsDisabled] = useState(true);
	const [check, setCheck] = useState("");

	const handlePasswordChange = (value) => {
		setPassword(value);
		const isPass = validatePassword(value);
		setIsPassError(!isPass);
	};

	const handlePasswordChange2 = (value) => {
		setPassword2(value);
		if (password === value) {
			setIsPassError2(false);
		} else {
			setIsPassError2(true);
		}
	};

	const agregar = () => {
		setCheck("Escribe una contraseña");
	};

	const actualizar = () => {
		if (password.length === 0 || password2.length === 0) {
			agregar();
		} else {
			updateCerrar(currentVisual);
			hideModal();
		}
	};

	const resetForm = () => {
		setIsDisabled(); //esto no tiene ningun sentido pero si no me decia que no lo utilizaba

		hideModal();
	};

	return (
		<Modal
			colorModalTitle={Colors.extraDarkBlue}
			active={active}
			hideModal={resetForm}
			title="Visualizar Usuario"
			footer={
				<ButtonWrapper>
					<Button
						text="Cancelar"
						iconPosition="left"
						type="submit"
						icon={faTimes}
						onClick={resetForm}
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
						text="Actualizar"
						iconPosition="right"
						type="submit"
						className="darkBlue"
						onClick={actualizar}
						buttonStyles={{marginRight: 0}}
					/>
				</ButtonWrapper>
			}
		>
			<StyledFormBack>
				<StyledPhotoWrapper>
					<ImageWrapper>
						<h1>hola</h1>
					</ImageWrapper>
					<StyleUploadPhotoWrapper>
						<p>Fotografía de perfil</p>
					</StyleUploadPhotoWrapper>
				</StyledPhotoWrapper>
			</StyledFormBack>
			<StyledFormBack>
				<StyledInputsWrapper>
					<StyledLabel>
						<label htmlFor="username">Nombre de usuario</label>
						<Input
							id="username"
							name="username"
							placeholder="Introducir nombre de usuario"
							disabled={disabled}
						/>
						<p>El nombre de usuario no se puede modificar</p>
					</StyledLabel>
					<StyledLabel>
						<label htmlFor="email">Email</label>
						<Input
							id="email"
							name="email"
							placeholder="Introducir email"
							disabled={disabled}
						/>
						<p>
							El email no se puede modificar. Ponte en contacto si necesitas
							actualizarlo.
						</p>
					</StyledLabel>
				</StyledInputsWrapper>
				<StyledInputsWrapper>
					<StyledLabel>
						<label htmlFor="passName">Nueva Constraseña</label>
						<Input
							type="password"
							placeholder="Introducir contraseña"
							onChange={(e) => handlePasswordChange(e.target.value)}
							className="errorProfile"
							id="passName"
							name="passName"
							error={isPassError}
							errorText="The password to contain more than 6 characters and a uppercase letter"
							minLength={6}
						/>
					</StyledLabel>
					<StyledLabel>
						<label htmlFor="confirmPassName">Confirmar Constraseña</label>
						<Input
							type="password"
							placeholder="Confirma tu contraseña"
							onChange={(e) => handlePasswordChange2(e.target.value)}
							className="errorProfile"
							id="confirmPassName"
							name="confirmPassName"
							error={isPassError2}
							errorText="Both passwords must be equal"
							minLength={6}
						/>
					</StyledLabel>
				</StyledInputsWrapper>
				<Button text="Guardar" type="submit" className="greenGradient" />
			</StyledFormBack>

			<StyledSmall>{check}</StyledSmall>
		</Modal>
	);
};

export default VisualModal;
