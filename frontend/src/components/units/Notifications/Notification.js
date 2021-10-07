import React from "react";
import {NotificationStyled} from "./Notification.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const Notification = ({message, isSuccess}) => {
	return (
		<NotificationStyled className={isSuccess ? "success" : "error"}>
			<FontAwesomeIcon
				icon={isSuccess ? faCheckCircle : faExclamationCircle}
				style={{color: "white", width: "30px", height: "30px"}}
			/>
			<p className="notification--message">{message}</p>
		</NotificationStyled>
	);
};

export default Notification;
