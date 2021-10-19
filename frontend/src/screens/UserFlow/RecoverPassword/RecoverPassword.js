import React, {useState} from "react";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/Button/Button";
import {Container, StyledForm, StyledError} from "./RecoverPassword.styles";
import Body from "components/layout/Body/Body";

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

console.log(validatePassword());

const users = [
	{
		email: "juan@mail.com",
		password: "Juan1992",
	},
];

const updateUser = (email, password) => {
	const newUsers = [];
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		if (user.email === email) {
			newUsers.push(email, password);
			localStorage.setItem("itacademy", "HE ENTRADO!!!!");
			console.log("The user is correct. You will receive an email to change your password.");
		} else {
			console.error("the user is incorrect. Please try again.");
		}
	}
};

const RecoverPassword = ({retrieveUser}) => {
	const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [isEmailError, setIsEmailError] = useState(false);

	const handleEmailChange = (value) => {
		setEmail(value);
		const isEmail = validateEmail(value);
		setIsEmailError(!isEmail);
	};

	const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const password = "";
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
			updateUser(email, password, (error, token) => {
				if (error) return setError(error.message);
				retrieveUser(token);
			});
		} catch ({message}) {
			setError(message);
		}
	};

	return (
		<Body title="Cambiar contraseña" justifyTitle="center">
			<Container>
				<StyledForm onSubmit={handleSubmit}>
					<div className="classInput">
						<label htmlFor="forgetpassword">
							<strong>¿Has olvidado tu contraseña?</strong> Para recuperarla introduce
							tu email y te enviaremos una nueva por correo.
						</label>
						<Input
							type="email"
							placeholder="email"
							value={email}
							onChange={(e) => handleEmailChange(e.target.value)}
							id="emailName"
							name="emailName"
							error={isEmailError}
							errorText="Enter a valid email address..."
							disabled={disabled}
						/>
					</div>
					{error && (
						<StyledError>
							<p>{error}</p>
						</StyledError>
					)}
					<AsyncButton
						text="Enviar"
						loadingText="Enviando"
						iconPosition="left"
						type="submit"
						className="orangeGradient"
						textStyles={{marginLeft: 10}}
						isLoading={isLoading}
						animated={animatedState}
						disabled={disabled}
					/>
				</StyledForm>
			</Container>
		</Body>
	);
};

export default RecoverPassword;
