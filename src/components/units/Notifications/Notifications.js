import React, {useState} from "react";
import PropTypes from "prop-types";

// Styles
import {NotificationWrapper, NotificationMessage} from "./styles";

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

// submitForm si ha enviado el formulario (true or false)
// isAuthenticated si esta autenticado o ha habido error (true or false)
// nombreUsuario recupera del backend el nombre del user cuando isAuthenticated solo si es true

export const Notifications = ({className, isAuthenticated, nombreUsuario}) => {
	// Valores como prueba
	isAuthenticated = true;
	nombreUsuario = "Kevin";

	const [notification, setNotification] = useState(false);

	// metodo que lanza la notificacion
	const dispatchNotification = () => {
		setNotification(true);
		setTimeout(() => {
			setNotification(false);
		}, 3000);
	};

	return (
		<>
			{notification && (
				<NotificationWrapper
					notification={notification}
					className={`${className} ${isAuthenticated ? "success" : "error"}`}
				>
					<FontAwesomeIcon
						icon={isAuthenticated ? faCheckCircle : faExclamationCircle}
						style={{
							top: "48px",
							left: "949px",
							width: "30px",
							height: "30px",
							color: "#ffffff",
							opacity: "1",
						}}
					/>
					<NotificationMessage>
						{isAuthenticated
							? `Bienvenido de nuevo ${nombreUsuario}. Te estamos redireccionando.`
							: `Ha habido un error con tu usuario o contraseña. Introducelos de nuevo.`}
					</NotificationMessage>
				</NotificationWrapper>
			)}
		</>
	);

	Notifications.propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		className: PropTypes.string,
		nombreUsuario: PropTypes.string,
	};
};
