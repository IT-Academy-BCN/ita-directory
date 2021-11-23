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
	const [registerSuccess, setRegisterSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [privacy, setPrivacy] = useState(false);
	const [message, setMessage] = useState(null);

	const closeNotification = () => setMessage(null);

	const registerUser = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/register`,
				user
			);
			setMessage(response.data.message);
			if (response.data.code === "error") throw response.data.message;
			setRegisterSuccess(true);
		} catch (error) {
			if (error.name === "Error")
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
			setRegisterSuccess(false);
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
			{message ? (
				<Notification
					message={message}
					isSuccess={registerSuccess}
					closeNotification={closeNotification}
					autoClose={true}
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
