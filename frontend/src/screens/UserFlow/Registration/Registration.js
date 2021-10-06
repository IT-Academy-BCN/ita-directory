import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/Button/Button";
import {Container, Form, StyleRedirect, StyledError} from "./Registration.styles";
import PrivacyPolicy from "components/units/PrivacyPolicy/PrivacyPolicy";
import Body from "components/layout/Body/Body";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";

const EMAIL_REGEX =
	// eslint-disable-next-line no-useless-escape
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const Register = ({retrieveUser}) => {
	const [error, setError] = useState(false);
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [validacionConexion, setValidacionConexion] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerUser = async (user) => {
		try {
			const resp = await axios.post("http://localhost:5000/users/v1/register", user);
			console.log(resp.status);
			setValidacionConexion(true);
		} catch (error) {
			// Handle Error Here
			console.error(error);
			setError(true);
		}
	};

	const handleEmailChange = (value) => {
		setEmail(value);
		const isEmail = validateEmail(value);
		setIsEmailError(!isEmail);
	};

	const handlePasswordChange = (value) => {
		setPassword(value);
		const isPass = validatePassword(value);
		setIsPassError(!isPass);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		registerUser({
			email,
			password,
			privacy: true,
		});

		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 2000);
	};

	return (
		<>
			{error ? (
				<Notification
					message={
						"Ha habido un error con tu usuario o contraseña. Introducelos de nuevo."
					}
					isSuccess={"error"}
				/>
			) : null}
			{validacionConexion ? (
				<NotificationsSuccess
					email={email}
					message={`${email} has sido registrado. Te estamos redireccionando.`}
					isSuccess={"success"}
				/>
			) : null}

			<Body title="Registro">
				<Container>
					<Form onSubmit={handleSubmit}>
						<div className="classInput">
							<label>Email</label>
							<Input
								type="email"
								placeholder="Introduce tu email"
								value={email}
								onChange={(e) => handleEmailChange(e.target.value)}
								id="emailName"
								name="emailName"
								error={isEmailError}
								errorText="Enter a valid email address..."
								disabled={disabled}
							/>
						</div>
						<div className="classInput">
							<label>Password</label>
							<Input
								type="password"
								placeholder="Introduce tu contraseña"
								value={password}
								onChange={(e) => handlePasswordChange(e.target.value)}
								id="passName"
								name="passName"
								error={isPassError}
								errorText="The password to contain more than 6 characters and a uppercase letter"
								disabled={disabled}
								minLength={6}
							/>
						</div>
						<PrivacyPolicy />
						{error && (
							<StyledError>
								<p>{error}</p>
							</StyledError>
						)}
						<AsyncButton
							text="Registrame"
							loadingText="Registrando"
							iconPosition="left"
							type="submit"
							className="orangeGradient"
							textStyles={{marginLeft: 10}}
							isLoading={isLoading}
							animated={animatedState}
							disabled={disabled}
						/>
						<StyleRedirect>
							Tienes una cuenta? <Link to="/login">Inicia sesión</Link>
						</StyleRedirect>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default Register;
