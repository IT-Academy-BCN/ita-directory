import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import Input from "components/units/Input/Input";
import InputValidated from "components/units/InputValidated/InputValidated";

// Style Components
import {ProfileWrapper, ProfileForm, ProfileImage, ProfileUploadPhoto} from "./Profile.styles";
import {Container} from "theme/GlobalStyles";

// Utilities
import fakeProfilePhoto from "../../../assets/images/people1b.jpg";

const Profile = () => {
	const [newPassword, setNewPassword] = useState("");
	const [repeatedNewPassword, setRepeatedNewPassword] = useState("");
	const [validPassword1, setValidPassword1] = useState(false);
	const [validPassword2, setValidPassword2] = useState(false);
	const [profilePhoto, setProfilePhoto] = useState(fakeProfilePhoto);
	const [users, setUsers] = useState(null);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const response = await axios.get("http://localhost:5000/users/");
				console.log(response.data);
				setUsers(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getUsers();
		console.log(users);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// cargar info usuario a mostrar
	// enviar cambios

	const submitPhoto = (event) => {
		event.preventDefault();
		console.log("profile photo clicked");
		setProfilePhoto("");
	};

	const submitUserInfo = (event) => {
		event.preventDefault();
		console.log("password saved");
	};

	useEffect(() => {
		setRepeatedNewPassword("");
	}, [newPassword]);

	useEffect(() => {
		setValidPassword2(repeatedNewPassword !== "" && newPassword === repeatedNewPassword);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [repeatedNewPassword]);

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
								className="blue-gradient w-28"
								isLoading={false}
							/>
						</ProfileUploadPhoto>
					</ProfileForm>
					<ProfileForm onSubmit={submitUserInfo} className="profile-data">
						<div>
							<div>
								<label htmlFor="username">Nombre de usuario</label>
								<Input
									style={`marginTop: 0`}
									type="text"
									id="username"
									name="username"
									placeholder="Introducir nombre de usuario"
									onChange={() => console.log("disabled")} // attr necesario, sinó da error
									disabled={true}
									minMarginTop
								/>
								<p>El nombre de usuario no se puede modificar</p>
							</div>
							<div>
								<label htmlFor="email">Email</label>
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
							</div>
						</div>
						<div>
							<div>
								<label htmlFor="passName">Nueva Contraseña</label>
								<InputValidated
									type="password"
									value={newPassword}
									placeholder="Introducir contraseña"
									onChange={(e) => setNewPassword(e.target.value)}
									id="passName"
									name="passName"
									valid={setValidPassword1}
									minMarginTop
								/>
							</div>
							<div>
								<label htmlFor="confirmPassName">Confirmar Contraseña</label>
								<Input
									type="password"
									value={repeatedNewPassword}
									placeholder="Confirma tu contraseña"
									onChange={(e) => setRepeatedNewPassword(e.target.value)}
									id="confirmPassName"
									name="confirmPassName"
									error={repeatedNewPassword !== "" && !validPassword2}
									errorText="Las 2 contraseñas tienen que ser iguales"
									success={repeatedNewPassword !== "" && validPassword2}
									disabled={!validPassword1}
									minMarginTop
								/>
							</div>
						</div>
						<div>
							<AsyncButton
								text="Guardar"
								loadingText="Guardando"
								type="submit"
								className="green-gradient"
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
