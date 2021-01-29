import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";

import {
	StyledFormProfile,
	StyledPhotoWrapper,
	StyleUploadPhotoWrapper,
	StyledInputsWrapper,
	StyledSaveWrapper,
	ImageWrapper,
	StyledLabel,
} from "./styles";

const profilePicture =
	"https://imagenes.20minutos.es/files/article_amp/uploads/2018/05/17/Aragorn01.jpg";

const Profile = () => {
	const [image, setImage] = useState(
		"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg"
	);

	const handleClick = (event) => {
		event.preventDefault();
		console.log("profile clicked");
		setImage(profilePicture);
	};

	return (
		<Body title="Editar perfil">
			<StyledFormProfile>
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
							type="button"
							className="blueGradientProfile"
							onClick={handleClick}
							isLoading={false}
							// disabled={disabled}
						/>
					</StyleUploadPhotoWrapper>
				</StyledPhotoWrapper>
				<StyledInputsWrapper>
					<StyledLabel>
						<label>Nombre de usuario</label>
						<Input className="profile" placeholder="Introducir nombre de usuario" />
						<p>El nombre de usuario no se puede modificar</p>
					</StyledLabel>
					<StyledLabel>
						<label>Email</label>
						<Input className="profile" placeholder="Introducir email" />
						<p>
							El email no se puede modificar. Ponte en contacto si necesitas
							actualizarlo.
						</p>
					</StyledLabel>
				</StyledInputsWrapper>
				<StyledInputsWrapper>
					<StyledLabel>
						<label>Nueva Constraseña</label>
						<Input className="profile" placeholder="Introducir contraseña" />
					</StyledLabel>
					<StyledLabel>
						<label>Confirmar Constraseña</label>
						<Input className="profile" placeholder="Confirma tu contraseña" />
					</StyledLabel>
				</StyledInputsWrapper>
				<StyledSaveWrapper>
					<AsyncButton
						text="Guardar"
						loadingText="Guardando"
						type="submit"
						className="greenGradient"
						// onClick={handleClick}
						isLoading={false}
						// disabled={disabled}
					/>
				</StyledSaveWrapper>
			</StyledFormProfile>
		</Body>
	);
};

export default Profile;
