import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import CheckBox from "components/units/CheckBox/CheckBox";
import InputValidated from "components/units/InputValidated/InputValidated";
import AsyncButton from "components/units/Button/Button";
import Notification from "components/units/Notifications/Notification";

// Styles
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

// Utilities
import {msgs} from "utils/userFlow";

const Register = ({retrieveUser}) => {
	const [error, setError] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [validacionConexion, setValidacionConexion] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [privacy, setPrivacy] = useState(false);

	//manage modal success error
	const closeNotification = () => {
		return setError(false) || setValidacionConexion(false);
	};

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
				<Notification
					message={msgs.Ns.emailOrPasswordError}
					isSuccess={false}
					closeNotification={closeNotification}
				/>
			) : null}
			{validacionConexion ? (
				<Notification
					email={email}
					message={`${email} has sido registrado. Te estamos redireccionando.`}
					isSuccess={true}
					closeNotification={closeNotification}
				/>
			) : null}

			<Body title="Registro" justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit} novalidate>
						<InputValidated
							type="email"
							placeholder={msgs.placeholderEmail}
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
							placeholder={msgs.placeholderPassword}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="passName"
							name="passName"
							disabled={disabled}
							minLength={6}
							className="w-full mt-2"
							valid={setValidPassword}
						/>
						<div className="w-full mt-2">
							<CheckBox
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
							className="w-full my-8 orange-gradient"
							isLoading={isLoading}
							animated={animated}
							disabled={!validEmail || !validPassword || !privacy}
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
