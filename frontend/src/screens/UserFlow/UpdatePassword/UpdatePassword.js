import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";
import InputValidated from "components/units/InputValidated/InputValidated";
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

const UpdatePassword = ({onLogin}) => {
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [message, setMessage] = useState(null);

	const closeNotification = () => setMessage(null);

	const loginUser = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/login`,
				user
			);
			setMessage(response.data.message);
			if (response.data.code === "error") throw response.data.message;
			setLoginSuccess(true);
		} catch (error) {
			if (error.name === "Error")
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
			setLoginSuccess(false);
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
			{message ? (
				<Notification
					message={message}
					isSuccess={loginSuccess}
					closeNotification={closeNotification}
					autoClose={true}
				/>
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

export default UpdatePassword;
