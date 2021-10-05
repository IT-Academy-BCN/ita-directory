import React from "react";
import {StyleNotificationSuccess, StyleNotificationMessage} from "./Notifications.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

function NotificationsSuccess({email, messageSuccess}) {
	return (
		<div>
			<StyleNotificationSuccess>
				<FontAwesomeIcon
					icon={faCheckCircle}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<StyleNotificationMessage>
					{email} {messageSuccess}
				</StyleNotificationMessage>
			</StyleNotificationSuccess>
		</div>
	);
}

export default NotificationsSuccess;
