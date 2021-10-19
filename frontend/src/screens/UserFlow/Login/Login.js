/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
// import AsyncButton from "components/units/Button/Button";
import {ChangePassword, Container, Form, Label, StyledRedirect, StyledError} from "./Login.styles";
import Body from "components/layout/Body/Body";
import Button from "components/units/Button/Button";

// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
	// let authenticated = false;
	let auth = false;

	users.forEach((user) => {
		if (user.email === email && user.password === password) {
			localStorage.setItem("itacademy", "HE ENTRADO!!!!");
			auth = true;
		}
	});

	console.log(`the user is ${auth ? "correct" : "incorrect"}`);

	// for (let i = 0; i < users.length; i++) {
	// 	const user = users[i];
	// 	if (user.email === email && user.password === password) {
	// 		authenticated = true;
	// 		localStorage.setItem("itacademy", "HE ENTRADO!!!!");
	// 	}
	// }
	// if (authenticated) console.log("the user is correct");
	// else console.error("the user is incorrect");
};

const Login = ({onLogin}) => {
	const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

	const handleSubmit = (event) => {
		event.preventDefault();
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 2000);

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
		<Body title="Acceso" isLoggedIn={false} justifyTitle="center">
			<Container>
				<Form onSubmit={handleSubmit}>
					{/* <label>Email</label> */}
					<Input
						type="email"
						placeholder="Introduce tu email"
						value={email}
						onChange={(e) => handleEmailChange(e.target.value)}
						id="emailName"
						name="emailName"
						error={isEmailError}
						errorText="Enter a valid email address..."
						disabled={disabled}
						label={"Email"}
					/>

					{/* <label>Password</label> */}
					<Input
						type="password"
						placeholder="Introduce tu contraseña"
						value={password}
						onChange={(e) => handlePasswordChange(e.target.value)}
						id="passName"
						name="passName"
						error={isPassError}
						errorText="The password have to contain more than 6 characters and a uppercase letter"
						disabled={disabled}
						minLength={6}
						label={"Password"}
					/>
					<ChangePassword>
						<Label htmlFor="forgotpassword">
							<Link to="/recover-password/:hash">Has olvidado tu contraseña?</Link>
						</Label>
					</ChangePassword>
					{error && (
						<StyledError>
							<p>{error}</p>
						</StyledError>
					)}
					<Button
						className="blueGradientFullWidth"
						text="Acceder"
						loadingText="Accediendo"
						iconPosition="left"
						type="submit"
						isLoading={isLoading}
						animated
						disabled={disabled}
					/>
					<StyledRedirect>
						Regístrate <Link to="/register">aquí</Link>.
					</StyledRedirect>
				</Form>
			</Container>
		</Body>
	);
};

export default Login;
