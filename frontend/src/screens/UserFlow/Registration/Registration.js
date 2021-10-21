import {useEffect, useState} from "react";
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
import {validateEmail, validatePassword, msgs} from "utils/userFlow";

const Register = ({retrieveUser}) => {
	const [error, setError] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [validacionConexion, setValidacionConexion] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [privacy, setPrivacy] = useState(false);

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
		setAnimated(true);
		setIsDisabled(true);
		setIsLoading(true);
		registerUser({
			email,
			password,
			privacy,
		});

		setTimeout(() => {
			setAnimated(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 2000);
	};

	return (
		<>
			{error ? (
				<Notification message={msgs.Ns.emailOrPasswordError} isSuccess={false} />
			) : null}
			{validacionConexion ? (
				<Notification
					email={email}
					message={`${email} has sido registrado. Te estamos redireccionando.`}
					isSuccess={true}
				/>
			) : null}

			<Body title="Registro" justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit} novalidate>
						<Input
							type="email"
							placeholder={msgs.placeholderEmail}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							name="emailName"
							error={isEmailError}
							errorText={msgs.emailError}
							disabled={disabled}
							className="w-full"
						/>
						<Input
							type="password"
							placeholder={msgs.placeholderPassword}
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
						<div className="w-full mt-2">
							<Input
								type="checkbox"
								label={
									<RedirectStyled>
										Acepto la <Link to="#">politica de privacidad</Link>.
									</RedirectStyled>
								}
								value={privacy}
								onChange={() => setPrivacy((prev) => !prev)}
								id="privacyPolicy"
								name="privacyPolicy"
								error={!privacy}
								errorText={msgs.required}
								className="w-full mt-2"
							/>
						</div>
						<AsyncButton
							text="Registrarme"
							loadingText="Registrando..."
							iconPosition="left"
							type="submit"
							className="my-8 orangeGradientFullWidth"
							isLoading={isLoading}
							animated={animated}
							disabled={disabled}
						/>
						<RedirectStyled>
							Tienes una cuenta? <Link to="/login">Inicia sesión</Link>
						</RedirectStyled>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default Register;
