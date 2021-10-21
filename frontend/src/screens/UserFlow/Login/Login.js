import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/Button/Button";
import Notification from "components/units/Notifications/Notification";

// Styles
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

// Utilities
import * as Utils from "utils/userFlow";
import {msgs} from "utils/userFlow";

const Login = ({onLogin}) => {
	const [loginError, setLoginError] = useState(false);
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (user) => {
		try {
			const response = await axios.post("http://localhost:5000/users/v1/login", user);
			console.log(response.status);
			setLoginSuccess(true);
		} catch (error) {
			// Handle Error Here
			console.error(error);
			setLoginError(true);
		}
	};

	// valid email?
	useEffect(() => {
		setIsEmailError(email !== "" ? !Utils.validateEmail(email) : false);
	}, [email]);

	// valid password?
	useEffect(() => {
		setIsPassError(password !== "" ? !Utils.validatePassword(password) : false);
	}, [password]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		setAnimated(true);
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			setAnimated(false);
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
			{loginError ? (
				<Notification message={msgs.Ns.emailOrPasswordError} isSuccess={false} />
			) : null}

			{loginSuccess ? (
				<Notification message={`${email}: ${msgs.Ns.loginSuccess}`} isSuccess={true} />
			) : null}

			<Body title="Acceso" isLoggedIn={false} justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit} novalidate>
						<Input
							type="email"
							placeholder="Introduce tu email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							name="emailName"
							error={isEmailError}
							errorText={msgs.emailError}
							success={!isEmailError && email !== ""}
							disabled={disabled}
							className="w-full"
						/>
						<Input
							type="password"
							placeholder="Introduce tu contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="passName"
							name="passName"
							error={isPassError}
							errorText={msgs.passwordError}
							success={!isPassError && password !== ""}
							disabled={disabled}
							minLength={6}
							className="w-full mt-2"
						/>
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="blueGradientFullWidthFontNormal my-8"
							isLoading={isLoading}
							animated={animated}
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
