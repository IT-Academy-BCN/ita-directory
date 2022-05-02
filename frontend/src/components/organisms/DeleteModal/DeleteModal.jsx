import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/Button/Button'
import Modal from '../Modal/Modal'
import Input from '../../atoms/Input/Input'
import useInput from '../../../hooks/useInput'
import { Wrapper, StyledSmall, ButtonWrapper } from './DeleteModal.style'
import { colors } from '../../../theme'

function DeleteModal({ currentUserName, columnSelect, updateDelete, active, hideModal }) {
  const [error, setError] = useState('')

  const [name, bindName, resetName] = useInput('')

  const eliminar = 'ELIMINAR'

  const errorEscritura = () => {
    return name.length === 0 || name !== eliminar
  }

  const handleSubmit = () => {
    if (errorEscritura()) {
      setError('Escribe la palabra ELIMINAR')
      return
    }
    updateDelete(columnSelect, currentUserName)
    hideModal()
    resetForm()
  }

  const resetForm = () => {
    resetName()
    setError()
    hideModal((prev) => !prev)
  }

  return (
    <Modal
      colorModalTitle={colors.extraDarkBlue}
      active={active}
      hideModal={resetForm}
      title="Eliminar Usuario"
      footer={
        <ButtonWrapper>
          <Button
            text="Cancelar"
            iconPosition="left"
            type="submit"
            icon={faTimes}
            onClick={resetForm}
            buttonStyles={{
              color: colors.lightGrey,
              background: 'transparent',
              boxShadow: 'none',
              fontSize: '0.95rem',
              fontFamily: 'Helvetica',
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
            text="Eliminar"
            iconPosition="right"
            type="submit"
            className="darkRed"
            onClick={handleSubmit}
            buttonStyles={{ marginRight: 0 }}
          />
        </ButtonWrapper>
      }
    >
      <Wrapper>
        <Input
          label="Escribe la palabra ELIMINAR para poder continuar"
          type="text"
          name="name"
          {...bindName}
          placeholder="Escribe aqui"
          inputContainerClassName="inputContainer"
        />
      </Wrapper>
      <StyledSmall>{error}</StyledSmall>
    </Modal>
  )
}

DeleteModal.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  columnSelect: PropTypes.string.isRequired,
  updateDelete: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export default DeleteModal
