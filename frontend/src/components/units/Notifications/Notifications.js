import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import Notification from "./Notification";

const ContainerStyled = styled.div`
    box-sizing: border-box;
    position: absolute;
    z-index: 999999;
    top: 12px;
	right: 12px;
    display: flex;
    flex-direction: column;
    `
function Notifications() {
    const notifications = useSelector((state) => state.notification.notifications);
    const [workingNotifications, setWorkingNotifications] = useState([]);

    useEffect(() => {
        setWorkingNotifications(notifications)
    }, [notifications, setWorkingNotifications]);

    return <div>{workingNotifications.map((item) =>
        <ContainerStyled>
            <Notification
                id={Math.random().toString(36).slice(2)}
                message={item.message}
                type={item.type}
            />
        </ContainerStyled>
    )}</div>;
}

export default Notifications;
