import React, {useState} from "react";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import {Container, StyledForm, StyledError} from "./styles";
import Body from "components/layout/Body/Body";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());

const users = [
	{
		email: "juan@mail.com",
		password: "Juan1992",
	},
];

const email = "";
// const label = "";
// const initialState = {email: "", error: ""};

const authenticateUser = () => {
	if (email === users.email) {
		console.log("the user is correct. You will receive an email to change your password.");
	} else if (email === !users.email) {
		console.log("the user is incorrect. Please try again.");
	}
};

const RecoverPassword = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [setState] = useState();

	setEmail("");

	// const checkEmail = () => {
	// };

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

	const handleInputOnChange = (e) => {
		const val = e.target.value;
		const isEmail = validateEmail(val);
		setState(val);
		setIsEmailError(!isEmail);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let {email} = event.target.value;
		email = email.value;
	};

	return (
		<Body title="Cambiar contraseña">
			<Container>
				<StyledForm onSubmit={handleSubmit}>
					<div className="classInput">
						{/* <Label htmlFor="forgetpassword">
							<strong>¿Has olvidado tu contraseña?</strong> Para recuperarla introduce
							tu email y te enviaremos una nueva por correo.
						</Label> */}
						<Input
							type="email"
							placeholder="Introduce tu email"
							value={email}
							onChange={handleInputOnChange}
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
