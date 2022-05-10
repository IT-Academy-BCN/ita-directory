import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Notification from './Notification'

const NotificationsStyled = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  max-height: 94vh;
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
