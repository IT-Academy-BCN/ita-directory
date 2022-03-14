import React, {useEffect} from "react";
import {NotificationStyled} from "./Notification.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const Notification = ({message, isSuccess, autoClose, closeNotification}) => {
	useEffect(() => {
		const autoCloseFn = window.setTimeout(() => {
			if (autoClose) {
				closeNotification();
			}
		}, 4500);
		return () => autoCloseFn;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<NotificationStyled isSuccess={isSuccess}>
			<div className="color">
				<FontAwesomeIcon
					icon={isSuccess ? faCheckCircle : faExclamationCircle}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<p>{message}</p>

				<button onClick={() => closeNotification((prev) => !prev)}>X</button>
				
			</div>
		</NotificationStyled>
	);
};

export default Notification;
