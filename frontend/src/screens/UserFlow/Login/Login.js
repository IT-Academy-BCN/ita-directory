import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import Notification from "components/units/Notifications/Notification";
import InputValidated from "components/units/InputValidated/InputValidated";

// Styles
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

// Utilities
import {msgs} from "utils/userFlow";

const Login = ({onLogin}) => {
	const [loginError, setLoginError] = useState(false);
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);

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
				// debe añadirse ChechBox de privacidad?
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
						<InputValidated
							type="email"
							placeholder="Introduce tu email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							name="emailName"
							disabled={disabled}
							className="w-full"
							valid={setValidEmail}
						/>
						<InputValidated
							type="password"
							placeholder="Introduce tu contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="passName"
							name="passName"
							disabled={disabled}
							minLength={6}
							className="w-full mt-2"
							valid={setValidPassword}
						/>
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="blue-gradient w-full my-8"
							isLoading={isLoading}
							animated={animated}
							disabled={!validEmail || !validPassword}
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
