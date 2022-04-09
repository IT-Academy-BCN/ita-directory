import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// Layout Components
import Body from "../../../components/layout/Body/Body";

// Units Components
import CheckBox from "../../../components/units/CheckBox/CheckBox";
import AsyncButton from "../../../components/units/Button/Button";
import Notification from "../../../components/units/Notifications/Notification";

// Styles
import {Container, Form, RedirectStyled} from "../UserFlow.styles";

// Utilities
import Input from "../../../components/units/Input/Input";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import registerSchema from "../../../validation/registerUserSchema.js";

const Register = () => {
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [animated, setAnimated] = useState(false);
    const [disabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const closeNotification = () => setMessage(null);

    const registerUser = async (user) => {
        try {
            const response = await axios.post(
                `${import.meta.env.REACT_APP_API_URL}/users/v1/register`,
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

    const submitForm = (data) => {
        const {name, lastname, email, password, privacy} = data;
        setAnimated(true);
        setIsDisabled(true);
        setIsLoading(true);

        registerUser({
            name,
            lastnames: lastname,
            email,
            password,
            privacy,
        });
        setTimeout(() => {
            setAnimated(false);
            setIsDisabled(false);
            setIsLoading(false);
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
                    <Form onSubmit={handleSubmit(submitForm)} noValidate>
                        <Input
                            type="text"
                            placeholder="Nombre"
                            id="name"
                            name="name"
                            disabled={disabled}
                            className="w-full"
                            error={errors.name?.message}
                            register={register("name")}
                        />

                        <Input
                            type="text"
                            placeholder="Apellido"
                            id="lastname"
                            name="lastname"
                            disabled={disabled}
                            className="w-full"
                            error={errors.lastname?.message}
                            register={register("lastname")}
                        />

                        <Input
                            type="email"
                            placeholder={"Email"}
                            id="emailName"
                            name="email"
                            disabled={disabled}
                            className="w-full"
                            error={errors.email?.message}
                            register={register("email")}
                        />

                        <Input
                            type="password"
                            placeholder={"Contraseña"}
                            id="password"
                            name="password"
                            disabled={disabled}
                            className="w-full mt-2"
                            error={errors.password?.message}
                            register={register("password")}
                        />
                        <div className="w-full mt-2">
                            <CheckBox
                                label={
                                    <RedirectStyled>
                                        Acepto la <Link to="#">politica de privacidad</Link>.
                                    </RedirectStyled>
                                }
                                id="privacyPolicy"
                                name="privacyPolicy"
                                className="w-full mt-2"
                                error={errors.privacy?.message}
                                register={register("privacy")}
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
