import React from "react";
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

const Profile = () => {
	return (
		<Body>
			<StyledFormProfile>
				<StyledPhotoWrapper>
					<ImageWrapper>
						{/* <img /> */}
						<p>Hola como estas</p>
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
							// onClick={handleClick}
							isLoading={false}
							// disabled={disabled}
						/>
					</StyleUploadPhotoWrapper>
				</StyledPhotoWrapper>
				<StyledInputsWrapper>
					<StyledLabel>
						<label>Nombre de usuario</label>
						<Input className="profile" />
						<p>El nombre de usuario no se puede modificar</p>
					</StyledLabel>
					<StyledLabel>
						<label>Email</label>
						<Input className="profile" />
						<p>
							El email no se puede modificar. Ponte en contacto si necesitas
							actualizarlo.
						</p>
					</StyledLabel>
				</StyledInputsWrapper>
				<StyledInputsWrapper>
					<StyledLabel>
						<label>Nueva Constraseña</label>
						<Input className="profile" />
					</StyledLabel>
					<StyledLabel>
						<label>Confirmar Constraseña</label>
						<Input className="profile" />
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
