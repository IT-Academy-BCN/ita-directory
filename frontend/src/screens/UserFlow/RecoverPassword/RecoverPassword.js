import {useEffect, useState} from "react";
import axios from "axios";
import Notification from "components/units/Notifications/Notification";
/* import {StyledParagraph} from "./RecoverPassword.styles"; */

// Layout Components
import Body from "components/layout/Body/Body";

// Units Components
import AsyncButton from "components/units/Button/Button";
import Input from "components/units/Input/Input";

// Styles
import {Container, Form} from "../UserFlow.styles";

//Form validation
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import recoverPasswordSchema from "validation/recoverPasswordSchema";
import {useDispatch} from "react-redux";
import {newNotification, NotificationTypes} from "store/notificationSlice";

const RecoverPassword = () => {
    const [animatedState, setAnimatedState] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const closeNotification = () => setMessage(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(recoverPasswordSchema),
    });

    const submitForm = (data) => {
        const {email} = data;
        sendEmail(email);
    };

    const sendEmail = async (email) => {
        setAnimatedState(true);
        setIsLoading(true);
        setTimeout(() => {
            setAnimatedState(false);
            setIsLoading(false);
        }, 2000);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/users/v1/recover-password`,
                email
            );
            response.data.message === "Access token granted."
                ? setIsSuccess(true)
                : setIsSuccess(false);
            setMessage("The instructions to recover your password has been sent to your email");
            dispatch(
                newNotification({
                    message: message,
                    type: NotificationTypes.succes,
                }))
        } catch (error) {
            if (error.name === "Error") {
                setIsSuccess(false);
                setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`);
                dispatch(
                    newNotification({
                        message: message,
                        type: NotificationTypes.error,
                    }))
            }
        }
    };

    useEffect(() => {
        if (message) {
            dispatch(
                newNotification({
                    message: message,
                    type: isSuccess ? NotificationTypes.succes : NotificationTypes.error,
                })
            )
            setMessage(null);
        }
    });

    return (
        <>
            <Body title="Cambiar contraseña" justifyTitle="center">
                <Container>
                    <Form onSubmit={handleSubmit(submitForm)} noValidation>
                        {/* <StyledParagraph>
                            Si has olvidado la contraseña introduce tu email y te enviaremos un
                            enlace para cambiarla.
                        </StyledParagraph> */}
                        <Input
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            register={register("email")}
                            error={errors.email?.message}
                        />
                        <AsyncButton
                            text="Enviar"
                            loadingText="Enviando"
                            iconPosition="left"
                            type="submit"
                            className="w-full blue-gradient mt-6"
                            isLoading={isLoading}
                            animated={animatedState}
                        />
                    </Form>
                </Container>
            </Body>
        </>
    );
};

export default RecoverPassword;
