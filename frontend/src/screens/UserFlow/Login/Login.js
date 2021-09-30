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

// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);
const users = {
	email: "juan@mail.com",
	password: 123456,
};

const authenticateUser = (email, password) => {
	let authenticated = false;
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.email === email && user.password === password) {
			authenticated = true;
			localStorage.setItem("itacademy", "HE ENTRADO!!!!");
		}
	}
	if (authenticated) console.log("the user is correct");
	else console.error("the user is incorrect");
};

const Login = ({onLogin}) => {
	const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validacionConexion, setValidacionConexion] = useState(false);

	// const sendPostRequest = async () => {
	// 	try {
	// 		const resp = await axios.post("", users);
	// 		console.log(resp.status);
	// 		return resp.status;
	// 		if (resp.status === 201) {
	// 			setValidacionConexion(true);
	// 		}
	// 	} catch (err) {
	// 		// Handle Error Here
	// 		console.error(err);
	// 	}
	// };

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
		// sendPostRequest();
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 2000);

		try {
			authenticateUser(email, password, (error, token) => {
				if (error) return setError(error.message);
				onLogin(token);
			});
		} catch ({message}) {
			setError(message);
		}
	};
	return (
		<>
			{/* {validacionConexion ? ( */}
			<StyleNotificationSuccess>
				<FontAwesomeIcon
					icon={faCheckCircle}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<StyleNotificationMessage>
					Bienvenido de nuevo email@gmail.com. Te estamos redireccionando.
				</StyleNotificationMessage>
			</StyleNotificationSuccess>
			{/* ) : ( */}
			<StyleNotificationError>
				<FontAwesomeIcon
					icon={faExclamationCircle}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<StyleNotificationMessage>
					Ha habido un error con tu usuario o contraseña. Introducelos de nuevo.
				</StyleNotificationMessage>
			</StyleNotificationError>
			{/* )} */}
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
