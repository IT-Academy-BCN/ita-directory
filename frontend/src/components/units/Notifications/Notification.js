import {faCheckCircle, faCheckDouble, faChessKnight, faCross, faExclamationCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {deleteNotification} from 'store/notificationSlice';
import styled, {keyframes} from 'styled-components';

const InRight = keyframes`
from {
  transform: translateX(100%);
  
}
to {
  transform: translateX(0);
}
`
const NotificationStyled = styled.div`
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

function Notification({message, id, icon}) {
    const dispatch = useDispatch();

    useEffect(() => {
        const autoCloseFn = window.setTimeout(() => {
            closeNotification();
        }, 4500);
        return () => autoCloseFn;
    }, []);

    const closeNotification = () => {
        dispatch(deleteNotification(id))
    }

    return (
        <NotificationStyled>
            <NotificationIconStyled>
                <FontAwesomeIcon
                    icon={icon}
                    style={{color: "red", width: "50px", height: "30px"}}
                />
            </NotificationIconStyled>
            <NotificationMessageStyled>{message}</NotificationMessageStyled>
        </NotificationStyled>
    )
}

export default Notification
