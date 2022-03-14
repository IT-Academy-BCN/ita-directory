import React, {useEffect, useState} from "react";
import {NotificationStyled} from "./Notification.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const Notification = () => {
	const {alerts} = useSelector((state) => state.notifications);

	const [alert, setAlert] = useState({type: "", message: ""});
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (alerts.length > 0) {
			setAlert(alerts[alerts.length - 1]);
			setShow(true);
			setTimeout(() => {
				setShow(false);
			}, 3000);
		}
	}, [alerts]);

	const onClose = () => {
		setShow(false);
	};

	const iconUrl = alert.type === "success" ? faCheckCircle : faExclamationCircle;

	return show ? (
		<NotificationStyled isSuccess={alert.type}>
			<div className="color">
				<FontAwesomeIcon
					icon={iconUrl}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<p>{alert.message}</p>

				<button onClick={onClose}>X</button>
			</div>
		</NotificationStyled>
	) : null;
};

export default Notification;
