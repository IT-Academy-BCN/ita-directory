import React, {useEffect, useState} from "react";
import {NotificationStyled} from "./Notification.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle, faCross} from "@fortawesome/free-solid-svg-icons";
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

	const color = alert.type === "success" ? "#07A678" : "#EF3F3E";

	return show ? (
		<NotificationStyled isSuccess={alert.type}>
			<div>
				<FontAwesomeIcon
					icon={iconUrl}
					style={{color: color, width: "30px", height: "30px"}}
				/>

				<p>{alert.message}</p>

				<button onClick={onClose}>x</button>
			</div>
		</NotificationStyled>
	) : null;
};

export default Notification;
