import React, {useEffect, useState} from "react";
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
	BodyWrapper,
} from "./Profile.styles";
import {Container} from "theme/GlobalStyles";

// Utilities
import {msgs, validatePassword} from "utils/userFlow";

const profilePicture =
	"https://imagenes.20minutos.es/files/article_amp/uploads/2018/05/17/Aragorn01.jpg";

const Profile = () => {
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [isPassError, setIsPassError] = useState(false);
	const [isPassError2, setIsPassError2] = useState(false);
	// const [disabled, setIsDisabled] = useState(true);
	const [image, setImage] = useState(
		// "https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg"
		profilePicture
	);

	const submitPhoto = (event) => {
		event.preventDefault();
		console.log("profile photo clicked");
		setImage(profilePicture);
	};

	const submitUserInfo = (event) => {
		event.preventDefault();
		console.log("password saved");
	};

	useEffect(() => {
		setIsPassError(!validatePassword(password));
		setPassword2("");
	}, [password]);

	useEffect(() => {
		setIsPassError2(!((password2 !== "") & (password === password2)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [password2]);

	return (
		<Body
			title="Editar perfil"
			justifyTitle="flex-start"
			paddingTitle="0px"
			paddingTitle2="15vw"
			isLoggedIn="true"
		>
			<Container>
				<BodyWrapper>
					<StyledFormProfile onSubmit={submitPhoto}>
						{" "}
						{/* FAKE */}
						<StyledPhotoWrapper>
							<ImageWrapper>
								<img src={image} alt={"Foto"} width="200" />
							</ImageWrapper>
							<StyleUploadPhotoWrapper>
								<p>Fotografía de perfil</p>
								<p>
									Sube tu fotografía de perfil, tamaño recomendado 1000x1000.
									Formato .JPG, .JPEG, .PNG, y .GIF.
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
					<StyledFormProfile onSubmit={submitUserInfo}>
						{" "}
						{/* FAKE */}
						<StyledInputsWrapper>
							<StyledLabel>
								<label htmlFor="username">Nombre de usuario</label>
								<Input
									id="username"
									name="username"
									placeholder="Introducir nombre de usuario"
									disabled={true}
								/>
								<p>El nombre de usuario no se puede modificar</p>
							</StyledLabel>
							<StyledLabel>
								<label htmlFor="email">Email</label>
								<Input
									id="email"
									name="email"
									placeholder="Introducir email"
									disabled={true}
								/>
								<p>
									El email no se puede modificar. Ponte en contacto si necesitas
									actualizarlo.
								</p>
							</StyledLabel>
						</StyledInputsWrapper>
						<StyledInputsWrapper>
							<StyledLabel>
								<label htmlFor="passName">Nueva Contraseña</label>
								<Input
									type="password"
									value={password}
									placeholder="Introducir contraseña"
									onChange={(e) => setPassword(e.target.value)}
									className="errorProfile"
									id="passName"
									name="passName"
									error={password !== "" && isPassError}
									errorText={msgs.passwordError}
									success={password !== "" && !isPassError}
									minLength={6}
								/>
							</StyledLabel>
							<StyledLabel>
								<label htmlFor="confirmPassName">Confirmar Contraseña</label>
								<Input
									type="password"
									value={password2}
									placeholder="Confirma tu contraseña"
									onChange={(e) => setPassword2(e.target.value)}
									onBlur={() => {
										if (isPassError) setPassword2("");
									}}
									className="errorProfile"
									id="confirmPassName"
									name="confirmPassName"
									error={password2 !== "" && isPassError2}
									errorText="Las 2 contraseñas tienen que ser iguales"
									success={password2 !== "" && !isPassError2}
									disabled={isPassError}
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
								disabled={isPassError || isPassError2}
							/>
						</StyledSaveWrapper>
					</StyledFormProfile>
				</BodyWrapper>
			</Container>
		</Body>
	);
};

export default Profile;
