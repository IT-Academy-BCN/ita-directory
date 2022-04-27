import React, { useState, useEffect } from 'react'
import Button from '../../atoms/Button/Button'
import Modal from '../Modal/Modal.jsx'
import { UserModalStyled, ButtonWrapper } from './UserModal.style.js'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Colors from '../../../theme/Colors'

const UserModal = ({ nombreUsuario, currentUserState, active, hideModal, updateUserStatus }) => {
  // Aquí ponemos el estado inicial, pero no se actualiza al volver a renderizar cuando se actualizan las props.
  const [selectValue, setSelectValue] = useState(currentUserState)

  // Aquí actualizamos el estado cuando cambian las props.
  useEffect(() => {
    setSelectValue(currentUserState)
  }, [currentUserState])

  const handleSelect = (val) => {
    setSelectValue(val)
  }

  const handleClick = (val, nombreUsuario) => {
    setSelectValue(val)
    updateUserStatus(nombreUsuario, val)
    closeModal()
  }

  const closeModal = () => {
    hideModal()
  }

  return (
    <Modal
      colorModalTitle={Colors.extraDarkBlue}
      active={active}
      hideModal={closeModal}
      title="Cambiar Estado"
      footer={
        <ButtonWrapper>
          <Button
            text="Cancelar"
            iconPosition="left"
            type="submit"
            onClick={closeModal}
            icon={faTimes}
            buttonStyles={{
              color: Colors.lightGrey,
              background: 'transparent',
              boxShadow: 'none',
              fontSize: '0.95rem',
              fontFamily: 'Arial',
              width: 'auto',
              paddingLeft: 0,
            }}
            iconStyles={{
              paddingRight: '5px',
              paddingLeft: '0px',
              width: '1rem',
              height: '1rem',
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

export default UserModal
