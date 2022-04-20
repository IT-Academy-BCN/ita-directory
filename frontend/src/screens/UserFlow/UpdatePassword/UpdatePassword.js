import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";
import {Container, Form, RedirectStyled} from "../UserFlow.styles";
import {msgs, validateEmail, validatePassword} from "utils/userFlow";
import Input from "components/units/Input/Input";
import {useDispatch} from "react-redux";
import {newNotification, NotificationTypes} from "store/notificationSlice";

const UpdatePassword = () => {
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);
	const dispatch = useDispatch();

	const closeNotification = () => setMessage(null);

	const loginUser = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/login`,
				user
			);
			setMessage(response.data.message);
			if (response.data.code === "error") {
				dispatch(
					newNotification({
						message: message,
						type: NotificationTypes.error,
					}))
				throw response.data.message
			};
			setLoginSuccess(true);
			dispatch(
				newNotification({
					message: message,
					type: NotificationTypes.succes,
				}))
		} catch (error) {
			if (error.name === "Error")
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
			dispatch(
				newNotification({
					message: message,
					type: NotificationTypes.error,
				}))
			setLoginSuccess(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsDisabled(true);
		setIsLoading(true);
		setAnimated(true);
		setTimeout(() => {
			setIsDisabled(false);
			setIsLoading(false);
			setAnimated(false);
			loginUser({
				email,
				password,
			});
			setTimeout(() => {
				setIsDisabled(false);
				setIsLoading(false);
			}, 2000);
		});
	};

	useEffect(() => {
		if (message) {
			dispatch(
				newNotification({
					message: message,
					type: loginSuccess ? NotificationTypes.succes : NotificationTypes.error,
				})
			)
			setMessage(null);
		}
	});

	return (
		<>
			<Body title="Acceso" isLoggedIn={false} justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit} novalidate>
						<Input
							type="email"
							placeholder="Introduce tu email"
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
							placeholder="Introduce tu contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="passName"
							name="password"
							disabled={disabled}
							className="w-full mt-2"
							success={password !== "" && validatePassword(password)}
							error={password !== "" && !validatePassword(password)}
							errorText={msgs[`passwordError`]}
						/>
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="blue-gradient w-full my-8"
							isLoading={isLoading}
							animated={animated}
							disabled={!validateEmail(email) || !validatePassword(password)}
						/>
						<div className="w-full">
							<RedirectStyled>
								Has olvidado tu contraseña?
								<Link to="/recover-password">Recupérala</Link>
							</RedirectStyled>
							<RedirectStyled>
								No tienes cuenta?
								<Link to="/register">Regístrate</Link>
							</RedirectStyled>
						</div>
					</Form>
				</Container>
			</Body>
		</>
	);
};

export default UpdatePassword;
