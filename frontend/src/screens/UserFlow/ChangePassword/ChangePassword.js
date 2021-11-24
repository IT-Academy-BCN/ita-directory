import {useState, useEffect} from "react";
// eslint-disable-next-line
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";
import InputValidated from "components/units/InputValidated/InputValidated";
// eslint-disable-next-line
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

const ChangePassword = () => {
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

	const [password, setPassword] = useState("");
	const [repeatedPassword, setRepeatedPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [match, setMatch] = useState(false);

	const {token} = useParams();
	console.log(token);
	const closeNotification = () => setMessage(null);

	useEffect(() => {
		if (password === repeatedPassword) {
			setMatch(true);
		} else {
			setMatch(false);
		}
		// eslint-disable-next-line
	}, [repeatedPassword]);

	// eslint-disable-next-line
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
		//comprovar si token segueix actiu
		//en cas afirmatiu habilitar update password
		//si l'update surt bé informar i, després de dos segons fer un history.push a login
		//en cas negatiu informar i retornar a la pàgina principal
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			setAnimated(false);
			axios.patch(`${process.env.REACT_APP_API_URL}/users/v1/login`, password);
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
							type="password"
							placeholder="Introduce la nueva contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="passName"
							name="passName"
							disabled={disabled}
							className="w-full"
							valid={setValidPassword}
							minLength={6}
							isRegexWanted={true}
						/>
						<InputValidated
							type="password"
							name="recoverPassword"
							placeholder="Repite la contraseña"
							value={repeatedPassword}
							onChange={(e) => setRepeatedPassword(e.target.value)}
							disabled={disabled}
							isRegexWanted={false}
							className="w-full mt-2"
							valid={setValidPassword}
							match={match}
						/>
						<AsyncButton
							text="Guardar cambios"
							loadingText="Guardando"
							iconPosition="left"
							type="submit"
							className="blue-gradient w-full my-8"
							isLoading={isLoading}
							animated={animated}
							disabled={!validPassword}
						/>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default ChangePassword;
