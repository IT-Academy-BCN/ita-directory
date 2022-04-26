import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Notification from './Notification'

const NotificationStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 999999;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
`

function Notifications() {
  const notifications = useSelector((state) => state.notification.notifications)

  return (
    <div>
      {notifications.map((item) => (
        <NotificationStyled>
          <Notification message={item.message} icon={item.icon} />
        </NotificationStyled>
      ))}
    </div>
  )
}

export default Notifications
