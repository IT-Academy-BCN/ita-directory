import {useState} from "react";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import {StyledParagraph} from "./RecoverPassword.styles";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";

// Styles
import {Container, Form} from "../UserFlow.styles";

// Utilities
import {msgs, validateEmail} from "utils/userFlow";
import Input from "components/units/Input/Input";

const RecoverPassword = () => {
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [email, setEmail] = useState("");
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
			response.data.message === "Access token granted."
				? setIsSuccess(true)
				: setIsSuccess(false);
			setMessage(response.data.message);
		} catch (error) {
			if (error.name === "Error") {
				setIsSuccess(false);
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
			}
		}
	};
	return (
		<>
			{message ? (
				<Notification
					message={message}
					closeNotification={closeNotification}
					autoClose={true}
					isSuccess={isSuccess}
				/>
			) : null}
			<Body title="Cambiar contraseña" justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit}>
						<StyledParagraph>
							Si has olvidado la contraseña introduce tu email y te enviaremos un
							enlace para cambiarla.
						</StyledParagraph>
						<Input
							type="email"
							name="email"
							placeholder={msgs.placeholderEmail}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="emailName"
							disabled={disabled}
							success={email !== "" && validateEmail(email)}
							error={email !== "" && !validateEmail(email)}
							errorText={msgs[`emailError`]}
						/>
						<AsyncButton
							text="Enviar"
							loadingText="Enviando"
							iconPosition="left"
							type="submit"
							className="w-full blue-gradient mt-6"
							isLoading={isLoading}
							animated={animatedState}
							disabled={!validateEmail(email)}
						/>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default RecoverPassword;
