import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/Button/Button";
import "../../../assets/fonts/HelveticaNeue/Pragmatica-ExtraLight.ttf";
import {Container, Form, RedirectStyled} from "./Login.styles";
import Body from "components/layout/Body/Body";
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
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validacionLogin, setValidacionLogin] = useState(false);

	//
	const closeNotification = () => {
		return setError(false), setValidacionLogin(false);
	};

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

	// valid email?
	useEffect(() => {
		setIsEmailError(email !== "" ? !validateEmail(email) : false);
	}, [email]);

	// valid password?
	useEffect(() => {
		setIsPassError(password !== "" ? !validatePassword(password) : false);
	}, [password]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			loginUser({
				email,
				password,
				privacy: true,
			});
			setTimeout(() => {
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
					isSuccess={false}
					closeNotification={closeNotification}
					autoClose={true}
				/>
			) : null}

			{validacionLogin ? (
				<Notification
					email={email}
					message={"Bienvenido de nuevo. Te estamos redireccionando."}
					isSuccess={true}
					closeNotification={closeNotification}
					autoClose={true}
				/>
			) : null}

			<Body title="Acceso" isLoggedIn={false} justifyTitle={"center"}>
				<Container>
					<Form onSubmit={handleSubmit}>
						<Input
							type="email"
							placeholder="Introduce tu email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							name="emailName"
							error={isEmailError}
							errorText="Enter a valid email address"
							success={!isEmailError && email !== ""}
							disabled={disabled}
							label={"Email"}
						/>
						<Input
							type="password"
							placeholder="Introduce tu contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="passName"
							name="passName"
							error={isPassError}
							errorText="More than 6 chars and a uppercase letter"
							success={!isPassError && password !== ""}
							disabled={disabled}
							minLength={6}
							label={"Password"}
							className="w-full mt-6"
						/>
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="w-full blueGradient my-10"
							isLoading={isLoading}
							animated
							disabled={disabled}
						/>
						<div className="w-full">
							<RedirectStyled>
								Has olvidado tu contraseña?
								<Link to="/recover-password/:hash">Recupérala</Link>
							</RedirectStyled>
							<RedirectStyled>
								No tienes cuenta?
								<Link to="/register">Regístrate</Link>
							</RedirectStyled>
						</div>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default Login;
