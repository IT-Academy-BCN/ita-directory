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
	const [error, setError] = useState(false);
	const [animated, setAnimated] = useState(false);
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
			{error ? <Notification message={msgs.emailOrPasswordError} isSuccess={false} /> : null}

			{validacionLogin ? (
				<Notification email={email} message={msgs.loginSuccess} isSuccess={true} />
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
							errorText={msgs.emailInfo}
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
							errorText={msgs.passwordInfo}
							success={!isPassError && password !== ""}
							disabled={disabled}
							minLength={6}
							className="w-full mt-6"
						/>
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="blueGradientFullWidthFontNormal my-6"
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
