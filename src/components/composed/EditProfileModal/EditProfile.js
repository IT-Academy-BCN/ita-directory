import React, {useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
import {
	StyledSmall,
	ButtonWrapper,
	StyledFormBack,
	StyledPhotoWrapper,
	ImageWrapper,
	StyledLabel,
	StyleUploadPhotoWrapper,
	StyledInputsWrapper,
} from "components/composed/EditProfileModal/EditProfile.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validatePassword = (password) => PASSWORD_REGEX.test(password);

const EditProfile = ({updateCerrar, currentNombre, currentEmail, active, hideModal}) => {
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [isPassError2, setIsPassError2] = useState(false);
	// const [disabled, setIsDisabled] = useState(true);
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
		setCheck("Escribe una contraseña valida");
	};

	const actualizar = (e) => {
		if (password.length === 0 || password2.length === 0 || password !== password2) {
			agregar();
		} else {
			// updateCerrar(e);
			hideModal();
		}
	};

	const resetForm = () => {
		setPassword();
		setPassword2();
		setIsPassError(false);
		setIsPassError2(false);
		hideModal();
	};

	return (
		<Modal
			colorModalTitle={Colors.extraDarkBlue}
			active={active}
			hideModal={resetForm}
			title="Editar usuario"
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
					<ImageWrapper></ImageWrapper>
					<StyleUploadPhotoWrapper>
						<p>FOTOGRAFÍA DE PERFIL</p>
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
							placeholder={currentNombre}
							disabled={true}
						/>
						<p>El nombre de usuario no se puede modificar</p>
					</StyledLabel>
					<StyledLabel>
						<label htmlFor="email">Email</label>
						<Input id="email" name="email" placeholder={currentEmail} disabled={true} />
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
				<Button
					onClick={actualizar}
					text="Guardar"
					type="submit"
					className="greenGradient"
				/>
			</StyledFormBack>

			<StyledSmall>{check}</StyledSmall>
		</Modal>
	);
};

export default EditProfile;
