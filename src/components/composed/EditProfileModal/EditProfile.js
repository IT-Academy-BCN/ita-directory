import React, {useState, useEffect} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
// import useInput from "hooks/useInput";
import AsyncButton from "components/units/Button/Button";
import {
	StyledSmall,
	ButtonWrapper,
	StyledFormBack,
	StyledPhotoWrapper,
	// ImageWrapper,
	StyledLabel,
	StyleUploadPhotoWrapper,
	StyledInputsWrapper,
	ContainerImage,
	StyledSubtitle,
	StyledTextProfile,
} from "components/composed/EditProfileModal/EditProfile.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";
// import {StyledTitle} from "screens/Ad/Ad.styles";
// import {StyledText} from "components/layout/Header/Header.styles";

const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validatePassword = (password) => PASSWORD_REGEX.test(password);

const EditProfile = ({
	updateCerrar,
	currentUserState,
	currentNombre,
	currentEmail,
	active,
	hideModal,
	updateUser,
}) => {
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [isPassError2, setIsPassError2] = useState(false);
	// const [disabled, setIsDisabled] = useState(true);
	const [check, setCheck] = useState("");

	// MODIFY USERNAME / EMAIL
	const [newName, setNewName] = useState(currentNombre);

	// Aquí actualizamos el estado cuando cambian las props.
	useEffect(() => {
		setNewName(currentNombre);
	}, [currentNombre]);

	// const handleSelect = (val) => {
	//     setNewName(val);
	// };

	// const handleClick = (newName) => {
	//     setNewName(newName);
	//     closeModal();
	// };

	// const closeModal = () => {
	//     setNewName(currentUserState);
	//     hideModal();
	// };

	const handleNameChange = (newName) => {
		setNewName(newName);
	};

	// PASSWORD
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
			console.log(newName);
			hideModal();
		}
	};

	const resetForm = () => {
		setPassword();
		setPassword2();
		setIsPassError(false);
		setIsPassError2(false);
		hideModal();
		// MODIFY USERNAME - EMAIL
		// resetEmail();
		// resetName();
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
						// onClick={() => handleClick(newName)}
					/>
				</ButtonWrapper>
			}
		>
			<StyledFormBack>
				<StyledPhotoWrapper>
					<ContainerImage></ContainerImage>
					<StyleUploadPhotoWrapper>
						<StyledSubtitle>Fotografía de perfil</StyledSubtitle>
						<StyledTextProfile>
							Sube tu fotografía de perfil, tamaño recomendado 1000x1000. Formato.JPG,
							.JPEG, .PNG, y .GIF.
						</StyledTextProfile>
						<AsyncButton
							text="Subir"
							loadingText="Subiendo"
							type="submit"
							className="blueGradientProfile"
							isLoading={false}
						/>
					</StyleUploadPhotoWrapper>
				</StyledPhotoWrapper>
			</StyledFormBack>

			<StyledFormBack>
				<StyledInputsWrapper>
					<StyledLabel>
						<Input
							id="userName"
							name="userName"
							label="Nuevo usuario"
							type="text"
							placeholder={currentNombre}
							onChange={(e) => handleNameChange(e.target.value)}
							className="errorProfile"
							// error={isPassError}
							// errorText="The password to contain more than 6 characters and a uppercase letter"
							// minLength={6}
						/>
					</StyledLabel>
					<StyledLabel>
						<label htmlFor="email">Email</label>
						<Input id="email" name="email" placeholder={currentEmail} disabled={true} />
						{/* <StyledTextProfile>El email no se puede modificar. Ponte en contacto si necesitas</StyledTextProfile> */}
					</StyledLabel>
				</StyledInputsWrapper>

				<StyledInputsWrapper>
					<StyledLabel>
						{/* <label htmlFor="passName">Nueva Contraseña</label> */}
						<Input
							label="Nueva contraseña"
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
						{/* <label htmlFor="confirmPassName">Confirmar Contraseña</label> */}
						<Input
							label="Confirmar contraseña"
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
