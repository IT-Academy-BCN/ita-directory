import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import Modal from '../Modal/Modal'
import { UserModalStyled, ButtonWrapper } from './UserModal.style'
import Colors from '../../../theme/colors'

function UserModal({ nombreUsuario, currentUserState, active, hideModal, updateUserStatus }) {
  // Aquí ponemos el estado inicial, pero no se actualiza al volver a renderizar cuando se actualizan las props.
  const [selectValue, setSelectValue] = useState(currentUserState)

  // Aquí actualizamos el estado cuando cambian las props.
  useEffect(() => {
    setSelectValue(currentUserState)
  }, [currentUserState])

  const handleSelect = (val) => {
    setSelectValue(val)
  }

  const handleClick = (val) => {
    setSelectValue(val)
    updateUserStatus(nombreUsuario, val)
    closeModal()
  }

  const closeModal = () => {
    hideModal()
  }

  return (
    <Modal
      active={active}
      iconClose
      color={Colors.extraDarkBlue}
      fontSize="26px"
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
            textColor={Colors.lightGray}
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
            onClick={(e) => handleClick(selectValue, nombreUsuario)}
          />
        </ButtonWrapper>
      }
    >
      <UserModalStyled currentUserState={currentUserState}>
        <p>Cambiar el estado del usuario {nombreUsuario}</p>

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="estado-usuario">Estado usuario</label>
        <select
          name="estado-usuario"
          id="estado-usuario"
          defaultValue={currentUserState}
          onChange={(e) => {
            handleSelect(e.target.value)
          }}
        >
          <option value="">Selecciona status</option>
          <option value="aprobado" className="aprobado">
            Activo
          </option>
          <option value="pending" className="pending">
            Pendiente
          </option>
          <option value="rejected" className="rejected">
            Suspendido
          </option>
        </select>
      </UserModalStyled>
    </Modal>
  )
}

UserModal.propTypes = {
  nombreUsuario: PropTypes.string.isRequired,
  currentUserState: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  updateUserStatus: PropTypes.func.isRequired,
}

export default UserModal
