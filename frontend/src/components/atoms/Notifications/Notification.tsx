import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { deleteNotification } from '../../../store/notificationSlice'
import Icon from '../Icon'
import Text from '../Text'

type TNotification = {
  message: string
  id: number
  icon: string
  colorIcon: string
}

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
  margin-top: 10px;
  padding: 5px;
  width: 350px;
  height: 'auto';
  border-radius: 10px;
  box-shadow: 0 0 10px #999;
  animation: ${InRight} 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${Text} {
    margin-left: -15px;
  }
`
const NotificationIconStyled = styled.div`
  display: flex;
  align-items: center;
`

function Notification({ message, id, icon, colorIcon }: TNotification) {
  const dispatch = useDispatch()

  const closeNotification = () => {
    dispatch(deleteNotification(id))
  }

  useEffect(() => {
    const autoCloseFn = window.setTimeout(() => {
      closeNotification()
    }, 9000)
    return () => window.clearTimeout(autoCloseFn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NotificationStyled>
      <NotificationIconStyled>
        <Icon name={icon} color={colorIcon} />
      </NotificationIconStyled>
      <Icon
        name="close"
        size={20}
        onClick={closeNotification}
        style={{
          position: 'relative',
          background: 'none',
          left: '295px',
          alignSelf: 'flex-start',
          cursor: 'pointer',
        }}
      />

      <Text text={message} />
    </NotificationStyled>
  )
}

export default React.memo(Notification)
