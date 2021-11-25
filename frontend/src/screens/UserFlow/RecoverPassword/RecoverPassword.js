import {useState} from "react";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import {StyledParagraph} from "./RecoverPassword.styles";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import InputValidated from "components/units/InputValidated/InputValidated";

// Styles
import {Container, Form} from "../UserFlow.styles";

// Utilities
import {msgs} from "utils/userFlow";

const RecoverPassword = () => {
	// const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [message, setMessage] = useState("");

	const closeNotification = () => setMessage(null);

	const handleSubmit = async (event) => {
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
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/recover-password`,
				{email}
			);
			console.log(response.code);
			setMessage(response.data.message);
			if (response.data.code === "error") throw response.data.message;
		} catch (error) {
			if (error.name === "Error") console.log(error);
			setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
		}
	};
	return (
		<>
			{message ? (
				<Notification
					message={message}
					closeNotification={closeNotification}
					autoClose={true}
				/>
			) : null}
			<Body title="Cambiar contraseña" justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit}>
						<StyledParagraph>
							Si has olvidado la contraseña introduce tu email y te enviaremos un
							enlace para cambiarla.
						</StyledParagraph>
						<InputValidated
							type="email"
							name="email"
							placeholder={msgs.placeholderEmail}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							disabled={disabled}
							valid={setValidEmail}
							isRegexWanted={true}
						/>
						<AsyncButton
							text="Enviar"
							loadingText="Enviando"
							iconPosition="left"
							type="submit"
							className="w-full orange-gradient mt-6"
							isLoading={isLoading}
							animated={animatedState}
							disabled={!validEmail}
						/>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default RecoverPassword;
