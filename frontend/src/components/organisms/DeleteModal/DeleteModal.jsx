import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import Modal from '../Modal/Modal'
import useInput from '../../../hooks/useInput'
import { Wrapper, StyledSmall, ButtonWrapper } from './DeleteModal.style'
import { colors } from '../../../theme'
import InputGroup from '../../molecules/InputGroup'

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
      color={colors.extraDarkBlue}
      iconClose
      fontSize="26px"
      active={active}
      hideModal={resetForm}
      title="Eliminar Usuario"
      footer={
        <ButtonWrapper>
          <Button
            text="Cancelar"
            iconPosition="left"
            type="submit"
            icon="close"
            textColor={colors.lightGray}
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
              width: '1rem',
              fontSize: 20,
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
        <InputGroup
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
