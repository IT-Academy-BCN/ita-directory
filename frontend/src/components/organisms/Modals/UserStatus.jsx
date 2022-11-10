import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import Modal from '../Modal/Modal'
import { colors } from '../../../theme'

const UserStatusNameToId = {
  Active: 1,
  Pending: 2,
  Suspended: 3,
  Deleted: 4,
}

const UserStatusStyled = styled.div`
  margin-bottom: 25px;
  p {
    color: ${colors.lightGray};
    width: auto;
    letter-spacing: 0px;
    opacity: 1;
    font-size: 16px;
    width: 90%;
    margin-bottom: 15px;
  }

  label {
    display: none;
  }

  select {
    text-transform: uppercase;
    padding: 0.5em;
    font-size: 20px;
    border-radius: 5px;
    font-weight: bold;
    width: 100%;

    color: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.userStatus === ('rejected' || 3)
        ? colors.redColor
        : props.userStatus === ('aprobado' || 1)
        ? colors.darkGreen
        : colors.grey};

    border-color: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.userStatus === ('rejected' || 3)
        ? colors.redColor
        : props.userStatus === ('aprobado' || 1)
        ? colors.darkGreen
        : colors.grey};

    option {
      text-transform: uppercase;
    }
    option.aprobado {
      color: ${colors.darkGreen};
    }
    option.pending {
      color: ${colors.grey};
    }
    option.rejected {
      color: ${colors.redColor};
    }
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGray};
`

function UserStatus({ name, userStatusId, active, hideModal, updateUserStatus }) {
  // Aquí ponemos el estado inicial, pero no se actualiza al volver a renderizar cuando se actualizan las props.
  const [selectValue, setSelectValue] = useState(userStatusId)

  // Aquí actualizamos el estado cuando cambian las props.
  useEffect(() => {
    setSelectValue(userStatusId)
  }, [userStatusId])

  const handleSelect = (val) => {
    setSelectValue(val)
  }

  const closeModal = () => {
    hideModal()
  }

  const handleClick = (val) => {
    setSelectValue(val)
    updateUserStatus(val)
    closeModal()
  }

  return (
    <Modal
      active={active}
      iconClose
      color={colors.extraDarkBlue}
      fontSize={26}
      hideModal={closeModal}
      title="Cambiar Estado"
      listAdmin
      footer={
        <ButtonWrapper>
          <Button
            text="Cancelar"
            icon="close"
            iconPosition="left"
            type="submit"
            textColor={colors.lightGray}
            onClick={closeModal}
            buttonStyles={{
              background: 'transparent',
              boxShadow: 'none',
              fontSize: '0.95rem',
              fontFamily: 'Arial',
              width: 'auto',
              paddingLeft: 0,
            }}
            iconStyles={{
              paddingRight: '5px',
              width: '1rem',
              fontSize: 20,
            }}
          />

          <Button
            text="Actualizar"
            loadingText="Actualizar"
            iconPosition="left"
            type="submit"
            className="darkBlue"
            buttonStyles={{ marginRight: 0 }}
            onClick={() => handleClick(selectValue)}
          />
        </ButtonWrapper>
      }
    >
      <UserStatusStyled userStatusId={userStatusId}>
        <p>Cambiar el estado del usuario {name}</p>

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="estado-usuario">Estado usuario</label>
        <select
          name="estado-usuario"
          id="estado-usuario"
          value={selectValue}
          onChange={(e) => {
            handleSelect(e.target.value)
          }}
        >
          <option value="">Selecciona status</option>
          <option value={UserStatusNameToId.Active} className="aprobado">
            Activo
          </option>
          <option value={UserStatusNameToId.Pending} className="pending">
            Pendiente
          </option>
          <option value={UserStatusNameToId.Suspended} className="rejected">
            Suspendido
          </option>
          <option value={UserStatusNameToId.Deleted} className="rejected">
            Eliminado
          </option>
        </select>
      </UserStatusStyled>
    </Modal>
  )
}

UserStatus.propTypes = {
  name: PropTypes.string.isRequired,
  userStatusId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  updateUserStatus: PropTypes.func.isRequired,
}

export default UserStatus
