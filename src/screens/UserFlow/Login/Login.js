import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import {Container, Form, StyleRedirect, StyledError} from "./styles";

import Body from "components/layout/Body/Body";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const users = [
	{
		email: "juan@mail.com",
		password: "Juan1992",
	},
];

const authenticateUser = (email, password) => {
	let authenticated = false;
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.email === email && user.password === password) {
			authenticated = true;
		}
	}
	if (authenticated) console.log("the user is correct");
	else console.error("the user is incorrect");

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
      <Container>
        <Form onSubmit={handleSubmit}>
			<div>
				<label>Email</label>
				<Input
					type="email"
					placeholder="Itroduce tu email"
					value={email}
					onChange={(e) => handleEmailChange(e.target.value)}
					id="emailName"
					name="emailName"
					error={isEmailError}
					errorText="Enter a valid email address..."
					disabled={disabled}
				/>
			</div>
			<div>
				<label>Password</label>
				<Input
					type="password"
					placeholder="Introduce tu contraseña"
					value={password}
					onChange={(e) => handlePasswordChange(e.target.value)}
					id="passName"
					name="passName"
					error={isPassError}
					errorText="The password to contain more than 6 characters and a uppercase letter"
					disabled={disabled}
					minLength={6}
				/>
			</div>
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
        </Form>
      </Container>
    </Body>
  );
};

export default Login;
