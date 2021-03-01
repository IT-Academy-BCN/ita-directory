import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";
import Input from "components/units/Input/Input";
import {
	StyledFormProfile,
	StyledPhotoWrapper,
	StyleUploadPhotoWrapper,
	StyledInputsWrapper,
	StyledSaveWrapper,
	ImageWrapper,
	StyledLabel,
	StyledBodyWrapper,
	StyledError,
} from "./Profile.styles";

const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const profilePicture =
	"https://imagenes.20minutos.es/files/article_amp/uploads/2018/05/17/Aragorn01.jpg";

const Profile = () => {
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [isPassError2, setIsPassError2] = useState(false);
	const [disabled, setIsDisabled] = useState(true);
	const [image, setImage] = useState(
		"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg"
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("profile photo clicked");
		setImage(profilePicture);
	};

	const handleSubmit2 = (event) => {
		event.preventDefault();
		console.log("password saved");
	};

	const handlePasswordChange = (value) => {
		setPassword(value);
		const isPass = validatePassword(value);
		setIsPassError(!isPass);
	};

	const handlePasswordChange2 = (value) => {
		setPassword2(value);
		if (password === password2) {
			setIsPassError2(false);
		} else {
			setIsPassError2(true);
		}
	};

	return (
		<Body title="Editar perfil" isLoggedIn={true}>
			<StyledBodyWrapper>
				<StyledFormProfile onSubmit={handleSubmit}>
					<StyledPhotoWrapper>
						<ImageWrapper>
							<img src={image} alt={"Foto"} width="200" />
						</ImageWrapper>
						<StyleUploadPhotoWrapper>
							<p>Fotografía de perfil</p>
							<p>
								Sube tu fotografía de perfil, tamaño recomendado 1000x1000. Formato
								.JPG, .JPEG, .PNG, y .GIF.
							</p>
							<AsyncButton
								text="Subir"
								loadingText="Subiendo"
								type="submit"
								className="blueGradientProfile"
								isLoading={false}
							/>
						</StyleUploadPhotoWrapper>
					</StyledPhotoWrapper>
				</StyledFormProfile>
				<StyledFormProfile onSubmit={handleSubmit2}>
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
					<StyledSaveWrapper>
						<AsyncButton
							text="Guardar"
							loadingText="Guardando"
							type="submit"
							className="greenGradient"
						/>
					</StyledSaveWrapper>
				</StyledFormProfile>
			</StyledBodyWrapper>
		</Body>
	);
};

export default Profile;
