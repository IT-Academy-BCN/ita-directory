/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../../assets/fonts/HelveticaNeue/Pragmatica-ExtraLight.ttf";
import {
	ChangePassword,
	Container,
	Form,
	Label,
	StyleRedirect,
	StyledError,
	StyleNotificationSuccess,
	StyleNotificationMessage,
	StyleNotificationError,
} from "./Login.styles";
import Body from "components/layout/Body/Body";
import {
	faCheckCircle,
	faExclamationCircle,
	faGlassMartiniAlt,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";

// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const Login = ({onLogin}) => {
	const [error, setError] = useState(false);
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validacionLogin, setValidacionLogin] = useState();

	const loginUser = async (user) => {
		try {
			const response = await axios.post("http://localhost:5000/users/v1/login", user);
			console.log(response.status);
			setValidacionLogin(true);
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
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
			loginUser({
				email,
				password,
				privacy: true,
			});
			setTimeout(() => {
				setAnimatedState(false);
				setIsDisabled(false);
				setIsLoading(false);
			}, 2000);
		});
	};
	return (
		<>
			{error ? (
				<Notification
					message={
						"Ha habido un error con tu usuario o contraseña. Introducelos de nuevo."
					}
				/>
			) : null}

			{validacionLogin ? (
				<Notification
					email={email}
					message={":bienvenido de nuevo.Te estamos redireccionando."}
				/>
			) : null}
			<Notification
				message={"Ha habido un error con tu usuario o contraseña. Introducelos de nuevo."}
			/>
			<Body title="Acceso" isLoggedIn={false} centerTitle>
				<Container>
					<Form onSubmit={handleSubmit}>
						<div className="classInput">
							{/* <label>Email</label> */}
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
								label={"Email"}
							/>
						</div>
						<div className="classInput">
							{/* <label>Password</label> */}
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
								label={"Password"}
							/>
						</div>
						<ChangePassword>
							<Label htmlFor="forgotpassword">
								<Link to="/recover-password/:hash">
									Has olvidado tu contraseña?
								</Link>
							</Label>
						</ChangePassword>
						{error && (
							<StyledError>
								<p>{error}</p>
							</StyledError>
						)}
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="blueGradient mt-4"
							isLoading={isLoading}
							animated="yes"
							disabled={disabled}
						/>
						<StyleRedirect>
							No tienes cuenta? <Link to="/register"> Registrate</Link>
						</StyleRedirect>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default Login;
