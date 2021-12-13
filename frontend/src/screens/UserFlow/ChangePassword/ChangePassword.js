import {useState} from "react";
// eslint-disable-next-line
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";
import InputValidated from "components/units/InputValidated/InputValidated";
// eslint-disable-next-line
import {Container, Form} from "../UserFlow.styles";

const ChangePassword = () => {
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [message, setMessage] = useState("");

	const [passwords, setPasswords] = useState({
		password1: "",
		password2: "",
	});
	const [validPassword, setValidPassword] = useState(false);
	const history = useHistory();
	const {token} = useParams();
	const closeNotification = () => setMessage(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		setAnimated(true);
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/change-password/${token}`,
				passwords
			);
			setMessage(response.data.message);
			setIsSuccess(true);
			if (response.data.code === "error") {
				setIsSuccess(false);
				throw response.data.message;
			}
			if (response.data.statusCode === 200) {
				history.push("/login");

			}
		} catch (error) {
			if (error.name === "Error")
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
		}
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			setAnimated(false);
			setTimeout(() => {
				setIsDisabled(false);
				setIsLoading(false);
			}, 2000);
		});
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			setAnimated(false);
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
					closeNotification={closeNotification}
					autoClose={true}
					isSuccess={isSuccess}
				/>
			) : null}

			<Body title="Acceso" isLoggedIn={false} justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit} novalidate>
						<InputValidated
							type="password"
							placeholder="Introduce la nueva contraseña"
							value={passwords.password1}
							onChange={(e) =>
								setPasswords({...passwords, password1: e.target.value})
							}
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
							value={passwords.password2}
							onChange={(e) =>
								setPasswords({...passwords, password2: e.target.value})
							}
							disabled={disabled}
							isRegexWanted={true}
							className="w-full mt-2"
							valid={setValidPassword}
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
