import {faCheckCircle, faCheckDouble, faChessKnight, faCross, faExclamationCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CheckCircledIcon, CircleIcon, ColumnsIcon, CrossCircledIcon} from '@radix-ui/react-icons';
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import {deleteNotification, NotificationTypes} from 'store/notificationSlice';
import styled, {keyframes} from 'styled-components';

const InRight = keyframes`
from {
  transform: translateX(100%);
  
}
to {
  transform: translateX(0);
}
`
const ContainerStyled = styled.div`
    background-color: white;
    padding: 30px;
    width: 350px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0 0 10px #999;
    opacity: .8; 
    animation: ${InRight} .5s;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const NotificationMessageStyled = styled.p`
	text-align: left;
`

const NotificationIconStyled = styled.div`
    margin-right: 30px;
`

function Notification_Slice({message, type, id}) {
    const [notificationState, setNotificationState] = useState(true);
    const [notificationType, setNotificationType] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const autoCloseFn = window.setTimeout(() => {
            closeNotification();
        }, 4500);
        return () => autoCloseFn;
    }, []);

    useEffect(() => {
        formatNotification(type);
        console.log('format', notificationType)
    }, []);

    const formatNotification = (type) => {
        switch (type) {
            case NotificationTypes.error:
                return (
                    setNotificationType(
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            style={{color: "red", width: "50px", height: "30px"}}
                        />
                    ));
            case NotificationTypes.succes:
                return (
                    setNotificationType(
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{color: "green", width: "50px", height: "30px"}}
                        />
                    ));
            case NotificationTypes.info:
                return (
                    setNotificationType(
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            style={{color: "blue", width: "50px", height: "30px"}}
                        />
                    ));
            default:
                break;
        }
    };

    const closeNotification = () => {
        setNotificationState(false);
        dispatch(deleteNotification(id))
    }

    return (
        notificationState == true ?
            <ContainerStyled>
                <NotificationIconStyled>{notificationType}</NotificationIconStyled>
                <NotificationMessageStyled>{message}</NotificationMessageStyled>
            </ContainerStyled> : <></>
    )
}

export default Notification_Slice
