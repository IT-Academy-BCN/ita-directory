import React, {useEffect, useState} from "react";
import Button from "components/units/Button/Button";
import Modal from "components/composed/Modal/Modal.js";
import Input from "components/units/Input/Input.js";
// STYLES
import {
	ButtonWrapper,
	EditModalStyled,
	PhotoWrapper,
} from "components/composed/EditProfileModal/EditProfile.style.js";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Colors from "theme/Colors";
import {msgs, validateEmail, validateName, validatePassword} from "utils/userFlow";

const EditProfile = ({currentNombre, currentEmail, active, hideModal, updateUserData}) => {
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [password2, setPassword2] = useState("");

	// MODIFY USERNAME / EMAIL
	const [newName, setNewName] = useState(currentNombre);
	const [validNewName, setValidNewName] = useState(false);
	const [newEmail, setNewEmail] = useState(currentEmail);
	const [validNewEmail, setNewValidEmail] = useState(false);

	useEffect(() => {
		setValidPassword(validatePassword(password));
		setNewValidEmail(validateEmail(newEmail));
		setValidNewName(validateName(newName));
	}, [newEmail, password, newName]);

	const actualizar = () => {
		if (newName === "") {
			alert("Debes rellenar el nombre de usuario");
		} else {
			updateUserData(newName, newEmail);
			hideModal();
		}
	};

	const resetForm = () => {
		setPassword("");
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
			<EditModalStyled>
				<PhotoWrapper>
					<div className="containerImage" />
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
							className="blue-gradient"
							isLoading={false}
						/>
					</div>
				</PhotoWrapper>

				<div className="inputsWrapper">
					<label>
						<Input
							id="userName"
							name="userName"
							label="Nombre"
							type="text"
							value={newName}
							placeholder="Introduce un nuevo nombre"
							onChange={(e) => setNewName(e.target.value)}
							className="errorProfile"
							success={newName !== "" && validNewName}
							error={newName !== "" && !validNewName}
							errorText={msgs[`nameError`]}
						/>
					</label>

					<label>
						<Input
							id="email"
							name="email"
							label="Email"
							type="text"
							placeholder="Introduce un nuevo email"
							value={newEmail}
							onChange={(e) => setNewEmail(e.target.value)}
							success={newEmail !== "" && validNewEmail}
							error={newEmail !== "" && !validNewEmail}
							errorText={msgs[`emailError`]}
						/>
					</label>
				</div>

				<div className="inputsWrapper">
					<label>
						<Input
							label="Nueva contraseña"
							type="password"
							placeholder="Introducir contraseña"
							onChange={(e) => setPassword(e.target.value)}
							className="errorProfile"
							id="passName"
							name="passName"
							success={password !== "" && validPassword}
							error={password !== "" && !validPassword}
							errorText={msgs[`passwordError`]}
						/>
					</label>
					<label>
						<Input
							validPassword2
							label="Confirmar contraseña"
							type="password"
							placeholder="Confirma tu contraseña"
							onChange={(e) => setPassword2(e.target.value)}
							className="errorProfile"
							id="confirmPassName"
							name="confirmPassName"
							errorText="Both passwords must be equal"
							success={password2 === password}
							error={password2 !== password}
						/>
					</label>
				</div>
				<Button
					onClick={actualizar}
					text="Guardar"
					type="submit"
					className="green-gradient"
				/>
			</EditModalStyled>

			{/* <StyledSmall>{check}</StyledSmall> */}
		</Modal>
	);
};

export default EditProfile;
