import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import Input from "components/units/Input/Input";
import InputValidated from "components/units/InputValidated/InputValidated";

// Style Components
import {
	ProfileWrapper,
	ProfileForm,
	ProfileImage,
	ProfileUploadPhoto,
	ProfileLabel,
} from "./Profile.styles";
import {Container} from "theme/GlobalStyles";

// Utilities
import fakeProfilePhoto from "../../../assets/images/people1b.jpg";

const Profile = () => {
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [validPassword1, setValidPassword1] = useState(false);
	const [validPassword2, setValidPassword2] = useState(false);
	const [profilePhoto, setProfilePhoto] = useState(fakeProfilePhoto);

	const submitPhoto = (event) => {
		event.preventDefault();
		console.log("profile photo clicked");
		setProfilePhoto(fakeProfilePhoto);
	};

	const submitUserInfo = (event) => {
		event.preventDefault();
		console.log("password saved");
	};

	useEffect(() => {
		setPassword2("");
	}, [password1]);

	useEffect(() => {
		setValidPassword2(password2 !== "" && password1 === password2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [password2]);

	return (
		<Body title="Editar perfil" justifyTitle="flex-start" isLoggedIn="true">
			<Container>
				<ProfileWrapper>
					<ProfileForm onSubmit={submitPhoto} className="profile-photo">
						<ProfileImage>
							<img src={profilePhoto} alt={"Foto de perfil"} />
						</ProfileImage>
						<ProfileUploadPhoto>
							<div>
								<p>Fotografía de perfil</p>
								<p>Tamaño recomendado: 1000x1000</p>
								<p>Formatos admitidos: JPG, JPEG, PNG, o GIF</p>
							</div>
							<AsyncButton
								text="Subir"
								loadingText="Subiendo"
								type="submit"
								className="blueGradientProfile"
								isLoading={false}
							/>
						</ProfileUploadPhoto>
					</ProfileForm>
					<ProfileForm onSubmit={submitUserInfo} className="profile-data">
						<div>
							<ProfileLabel htmlFor="username">
								Nombre de usuario
								<Input
									type="text"
									id="username"
									name="username"
									placeholder="Introducir nombre de usuario"
									onChange={() => console.log("disabled")} // attr necesario, sinó da error
									disabled={true}
									minMarginTop
								/>
								<p>El nombre de usuario no se puede modificar</p>
							</ProfileLabel>
							<ProfileLabel htmlFor="email">
								Email
								<Input
									type="email"
									id="email"
									name="email"
									placeholder="Introducir email"
									onChange={() => console.log("disabled")} // attr necesario, sinó da error
									disabled={true}
									minMarginTop
								/>
								<p>
									El email no se puede modificar. Ponte en{" "}
									<Link to="#">contacto</Link> si necesitas actualizarlo.
								</p>
							</ProfileLabel>
						</div>
						<div>
							<ProfileLabel htmlFor="passName">
								Nueva Contraseña
								<InputValidated
									type="password"
									value={password1}
									placeholder="Introducir contraseña"
									onChange={(e) => setPassword1(e.target.value)}
									id="passName"
									name="passName"
									valid={setValidPassword1}
									minMarginTop
								/>
							</ProfileLabel>
							<ProfileLabel htmlFor="confirmPassName">
								Confirmar Contraseña
								<Input
									type="password"
									value={password2}
									placeholder="Confirma tu contraseña"
									onChange={(e) => setPassword2(e.target.value)}
									id="confirmPassName"
									name="confirmPassName"
									error={password2 !== "" && !validPassword2}
									errorText="Las 2 contraseñas tienen que ser iguales"
									success={password2 !== "" && validPassword2}
									disabled={!validPassword1}
									minMarginTop
								/>
							</ProfileLabel>
						</div>
						<div>
							<AsyncButton
								text="Guardar"
								loadingText="Guardando"
								type="submit"
								className="greenGradient"
								disabled={!validPassword1 || !validPassword2}
							/>
						</div>
					</ProfileForm>
				</ProfileWrapper>
			</Container>
		</Body>
	);
};

export default Profile;
