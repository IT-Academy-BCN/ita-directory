import React, {useState, useEffect} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
// STYLES
import {
	ButtonWrapper,
	EditModalStyled,
	PhotoWrapper,
	StyledLabel,
	InputsWrapper,
} from "components/composed/EditProfileModal/EditProfile.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";

const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validatePassword = (password) => PASSWORD_REGEX.test(password);

const EditProfile = ({currentNombre, currentEmail, active, hideModal, updateUserData}) => {
	const [password, setPassword] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [isPassError2, setIsPassError2] = useState(false);

	// MODIFY USERNAME / EMAIL
	const [newName, setNewName] = useState(currentNombre);
	const [newEmail, setNewEmail] = useState(currentEmail);

	// Aquí actualizamos el estado cuando cambian las props.
	useEffect(() => {
		setNewName(currentNombre);
		setNewEmail(currentEmail);
	}, [currentNombre, currentEmail]);

	const handleNameChange = (newName) => {
		setNewName(newName);
	};

	const handleEmailChange = (newEmail) => {
		setNewEmail(newEmail);
	};

	// PASSWORD
	const handlePasswordChange = (value) => {
		setPassword(value);
		const isPass = validatePassword(value);
		setIsPassError(!isPass);
	};

	const handlePasswordChange2 = (value) => {
		if (password === value) {
			setIsPassError2(false);
		} else {
			setIsPassError2(true);
		}
	};

	const actualizar = (value) => {
		if (newName === "") {
			alert("Debes rellenar el nombre de usuario");
		} else {
			updateUserData(newName, newEmail);
			hideModal();
		}
	};

	const resetForm = () => {
		setPassword();
		// setPassword2();
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
						// onClick={() => handleClick(newName)}
					/>
				</ButtonWrapper>
			}
		>
			<EditModalStyled>
				<PhotoWrapper>
					<div className="containerImage"></div>
					<div className="profileContain">
						<div className="StyledSubtitle">Fotografía de perfil</div>
						<div className="StyledTextProfile">
							Sube tu fotografía de perfil, tamaño recomendado 1000x1000. Formato.JPG,
							.JPEG, .PNG, y .GIF.
						</div>
						<Button
							text="Subir"
							loadingText="Subiendo"
							type="submit"
							className="blueGradientProfile"
							isLoading={false}
						/>
					</div>
				</PhotoWrapper>

				<InputsWrapper>
					<StyledLabel>
						<Input
							id="userName"
							name="userName"
							label="Nuevo usuario"
							type="text"
							placeholder="Introduce nombre de usuario"
							value={newName}
							onChange={(e) => handleNameChange(e.target.value)}
							className="errorProfile"
							// error={isPassError}
							// errorText="The password to contain more than 6 characters and a uppercase letter"
							// minLength={6}
						/>
					</StyledLabel>

					<StyledLabel>
						{/* <label htmlFor="email">Email</label> */}
						<Input
							id="email"
							name="email"
							label="Email"
							ype="text"
							placeholder="Introduce un email"
							value={newEmail}
							onChange={(e) => handleEmailChange(e.target.value)}
						/>
					</StyledLabel>
				</InputsWrapper>

				<InputsWrapper>
					<StyledLabel>
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
				</InputsWrapper>
				<Button
					onClick={actualizar}
					text="Guardar"
					type="submit"
					className="greenGradient"
				/>
			</EditModalStyled>

			{/* <StyledSmall>{check}</StyledSmall> */}
		</Modal>
	);
};

export default EditProfile;
