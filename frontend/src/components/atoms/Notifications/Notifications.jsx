import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Notification from './Notification'

const NotificationsStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 999999;
  top: 12px;
  right: 12px;
  display: flex;
  max-height: 100vh;
  flex-direction: column;
`

function Notifications() {
  const notifications = useSelector((s) => s.notification.notifications)
  return (
    <NotificationsStyled>
      {Object.values(notifications).map((n) => (
        <Notification key={n.id} id={n.id} message={n.message} icon={n.icon} colorIcon={n.color} />
      ))}
    </NotificationsStyled>
  )
}

export default React.memo(Notifications)
