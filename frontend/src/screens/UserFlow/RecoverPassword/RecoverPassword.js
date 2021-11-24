import {useState} from "react";
import axios from "axios";

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import InputValidated from "components/units/InputValidated/InputValidated";

// Styles
import {Container, Form, LabelStyled} from "../UserFlow.styles";

// Utilities
import {msgs} from "utils/userFlow";

const RecoverPassword = () => {
	// const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);

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
			await axios.post(`${process.env.REACT_APP_API_URL}/users/v1/recover-password`, email);
		} catch ({message}) {
			// setError(message);
			console.error(message);
		}
	};

	return (
		<Body title="Cambiar contraseña" justifyTitle="center">
			<Container>
				<Form onSubmit={handleSubmit}>
					<LabelStyled>
						<strong>¿Has olvidado tu contraseña?</strong> Para recuperarla introduce tu
						email y te enviaremos una nueva por correo.
					</LabelStyled>
					<InputValidated
						type="email"
						placeholder={msgs.placeholderEmail}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="emailName"
						name="emailName"
						disabled={disabled}
						valid={setValidEmail}
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
	);
};

export default RecoverPassword;
