import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import CheckBox from "components/units/CheckBox/CheckBox";
import AsyncButton from "components/units/Button/Button";
import Notification from "components/units/Notifications/Notification";

// Styles
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

// Utilities
import {msgs, validateEmail, validateName, validatePassword} from "utils/userFlow";
import Input from "components/units/Input/Input";

const Register = () => {
	const [registerSuccess, setRegisterSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
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
			name,
			lastnames: lastName,
			email,
			password,
			privacy,
		});
		setTimeout(() => {
			setAnimated(false);
			setIsDisabled(false);
			setIsLoading(false);
			setName("");
			setLastName("");
			setEmail("");
			setPassword("");
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
						<Input
							type="text"
							placeholder="Nombre"
							value={name}
							onChange={(e) => setName(e.target.value)}
							id="name"
							name="name"
							disabled={disabled}
							className="w-full"
							success={name !== "" && validateName(name)}
							error={name !== "" && !validateName(name)}
							errorText={msgs[`nameError`]}
						/>

						<Input
							type="text"
							placeholder="Apellido"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							id="lastname"
							name="lastname"
							disabled={disabled}
							className="w-full"
							success={lastName !== "" && validateName(lastName)}
							error={lastName !== "" && !validateName(lastName)}
							errorText={msgs[`lastnameError`]}
						/>

						<Input
							type="email"
							placeholder={msgs.placeholderEmail}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							name="email"
							disabled={disabled}
							className="w-full"
							success={email !== "" && validateEmail(email)}
							error={email !== "" && !validateEmail(email)}
							errorText={msgs[`emailError`]}
						/>

						<Input
							type="password"
							placeholder={msgs.placeholderPassword}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="password"
							name="password"
							disabled={disabled}
							className="w-full mt-2"
							success={password !== "" && validatePassword(password)}
							error={password !== "" && !validatePassword(password)}
							errorText={msgs[`passwordError`]}
						/>
						<div className="w-full mt-2">
							<CheckBox
								label={
									<RedirectStyled>
										Acepto la <Link to="#">politica de privacidad</Link>.
									</RedirectStyled>
								}
								// value={privacy}
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
							disabled={
								!validateName(name) ||
								!validateName(lastName) ||
								!validatePassword(password) ||
								!validateEmail(email) ||
								!privacy
							}
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
