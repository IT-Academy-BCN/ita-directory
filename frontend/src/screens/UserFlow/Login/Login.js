import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
import Body from "components/layout/Body/Body";
import AsyncButton from "components/units/Button/Button";
import {Container, Form, RedirectStyled} from "../UserFlow.styles";
import Input from "components/units/Input/Input";

import {renewToken} from "store/userThunk";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import loginSchema from "validation/loginSchema.js";

import {login, selectUser} from "store/userSlice";
import {useSelector, useDispatch} from "react-redux";
import {createAsyncThunk} from "@reduxjs/toolkit";

const Login = () => {
	const dispatch = useDispatch();

	const [loginSuccess, setLoginSuccess] = useState(false);
	const [animated, setAnimated] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const closeNotification = () => setMessage(null);
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const loginUser = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/users/v1/login`,
				user
			);
			setMessage(response.data.message);
			console.log(response.data);

			localStorage.setItem("token", response.data.token);
			localStorage.setItem("refreshToken", response.data.refreshToken);

			//ahora siempre que haya un fetch y el token sea denegado
			//VVVVVVVVVVVVVV y con el useSelector agarrar el token nuevo
			dispatch(renewToken(localStorage.getItem("refreshToken")));

			const userData = await axios
				.get(`${process.env.REACT_APP_API_URL}/users/v1/get_me`, {
					headers: {Authorization: "Bearer " + response.data.token},
				})
				.then((response) => response.data);

			if (response.data.code === "error") throw response.data.message;
			setLoginSuccess(true);
			if (userData) dispatch(login(userData));
			//aqui el objeto con los datos del user
		} catch (error) {
			if (error.name === "Error")
				setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
			setLoginSuccess(false);
		}
	};

	const submitForm = (data) => {
		const {email, password} = data;
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

	return (
		<>
			{message ? (
				<Notification
					message={message}
					isSuccess={loginSuccess}
					closeNotification={closeNotification}
					autoClose={true}
				/>
			) : null}

			<Body title="Acceso" isLoggedIn={false} justifyTitle="center">
				<Container>
					<Form onSubmit={handleSubmit(submitForm)} noValidate>
						<Input
							type="email"
							placeholder="Introduce tu email"
							id="emailName"
							name="email"
							disabled={disabled}
							className="w-full"
							error={errors.email?.message}
							register={register("email")}
						/>
						<Input
							type="password"
							placeholder="Introduce tu contraseña"
							id="passName"
							name="password"
							disabled={disabled}
							className="w-full mt-2"
							error={errors.password?.message}
							register={register("password")}
						/>
						<AsyncButton
							text="Acceder"
							loadingText="Accediendo"
							iconPosition="left"
							type="submit"
							className="blue-gradient w-full my-8"
							isLoading={isLoading}
							animated={animated}
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

export default Login;
