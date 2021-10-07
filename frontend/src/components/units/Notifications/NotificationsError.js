import React from "react";
import {
	StyledNotificationContainer,
	StyleNotificationMessage,
	StyleNotificationError,
} from "./Notifications.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const NotificationsError = ({messageError}) => {
	return (
		<StyledNotificationContainer>
			<StyleNotificationError>
				<FontAwesomeIcon
					icon={faExclamationCircle}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<StyleNotificationMessage>{messageError}</StyleNotificationMessage>
			</StyleNotificationError>
		</StyledNotificationContainer>
	);
};

export default NotificationsError;
