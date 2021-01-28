import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import {StyleRedirect, StyledError, StyledForm} from "./styles";
import Body from "components/layout/Body/Body";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const USERS = [
	{
		email: "juan@mail.com",
		password: "Juan1992",
	},
];

const authenticateUser = (email, password) => {
	// if (users.email === email && users.password === password) console.log("the user is correct");
	// else console.log("the user is incorrect");
	let authenticated = false;
	for (let i = 0; i < USERS.length; i++) {
		const user = USERS[i];
		if (user.email === email && user.password === password) {
			authenticated = true;
		}
	}
	if (authenticated) {
		console.log("HEMOS ENCONTRADO AL USUARIO");
	} else {
		console.error("NO EXISTE, NO HEMOS ENCONTRADO AL USUARIO");
	}
};

const Login = (onLogin, onGoToRegister) => {
	const [error, setError] = useState("");
	const [view, setView] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 5000);
	};

	// value - handleChange
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);

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

	const handleFocus = () => {
		console.log("He pinchado dentro");
	};

	const handleBlur = () => {
		console.log("He pinchado fuera");
	};

	// DATOS FORMULARIO
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();

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
		<Body title="Acceso">
			<StyledForm onSubmit={handleSubmit}>
				<Input
					type="email"
					placeholder="email@mail.com"
					value={email}
					size={20}
					inputStyles={{
						paddingleft: 10,
						marginBottom: 5,
						marginTop: 5,
					}}
					onChange={(e) => handleEmailChange(e.target.value)}
					// onFocus={handleFocus}
					// onBlur={handleBlur}
					id="emailName"
					name="emailName"
					error={isEmailError}
					disabled={disabled}
				/>
				<Input
					type="password"
					placeholder="Introduce tu contraseña"
					value={password}
					onChange={(e) => handlePasswordChange(e.target.value)}
					// onFocus={handleFocus}
					// onBlur={handleBlur}
					id="passName"
					name="passName"
					error={isPassError}
					disabled={disabled}
					minLength={6}
				/>
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
					className="blueGradient"
					textStyles={{marginLeft: 10}}
					// onClick={handleClick}
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
				/>
				<StyleRedirect>
					No tienes cuenta? <Link to="/register"> Registrate</Link>
				</StyleRedirect>
			</StyledForm>
		</Body>
	);
};

export default Login;
