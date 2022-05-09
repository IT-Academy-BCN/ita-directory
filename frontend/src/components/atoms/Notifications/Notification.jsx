import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropType from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { deleteNotification } from '../../../store/notificationSlice'
import Button from '../Button'
import Text from '../Text'

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
  padding: 2px;
  width: 350px;
  height: 'auto';
  border-radius: 10px;
  box-shadow: 0 0 10px #999;
  opacity: 0.8;
  animation: ${InRight} 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const NotificationIconStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;
  margin-left: 5px;
`

function Notification({ message, id, icon, colorIcon }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const autoCloseFn = window.setTimeout(() => {
      closeNotification()
    }, 8000)
    return () => window.clearTimeout(autoCloseFn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeNotification = () => {
    dispatch(deleteNotification(id))
  }

  return (
    <NotificationStyled>
      <NotificationIconStyled>
        <FontAwesomeIcon icon={icon} style={{ color: colorIcon, width: '35px', height: '30px' }} />
      </NotificationIconStyled>
      <Button
        type="close"
        text={<FontAwesomeIcon icon={faTimesCircle} style={{ color: 'black', width: '15px' }} />}
        onClick={closeNotification}
        buttonStyles={{
          position: 'relative',
          background: 'none',
          bottom: '20px',
          left: '315px',
          alignSelf: 'flex-start',
        }}
      />
      <Text text={message} />
    </NotificationStyled>
  )
}

Notification.propTypes = {
  message: PropType.string.isRequired,
  id: PropType.number.isRequired,
  icon: PropType.object.isRequired,
  colorIcon: PropType.string.isRequired,
}

export default React.memo(Notification)
