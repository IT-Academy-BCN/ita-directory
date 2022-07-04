/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import Modal from '../Modal/Modal'
// STYLES
import { ButtonWrapper, EditModalStyled, PhotoWrapper } from './EditProfile.style'
import Colors from '../../../theme/colors'
import { msgs, validatePassword } from '../../../utils/userFlow'
import InputGroup from '../../molecules/InputGroup'
import { Text } from '../../atoms'

function EditProfile({ currentNombre, currentEmail, active, hideModal, updateUserData }) {
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const actualizar = () => {
    if (password === '') {
      // eslint-disable-next-line no-alert
      alert('Debes introducir una nueva contraseña')
    }
    if ((password !== '' && !validatePassword(password)) || password2 !== password) {
      // eslint-disable-next-line no-alert
      alert('La contraseña no es correcta o no coincide')
    } else {
      updateUserData(currentNombre, currentEmail)
      hideModal()
    }
  }

  const resetForm = () => {
    setPassword('')
    hideModal()
  }

  return (
    <Modal
      color={Colors.extraDarkBlue}
      fontSize={26}
      iconClose
      active={active}
      hideModal={resetForm}
      title="Editar perfil"
      footer={
        <ButtonWrapper>
          <Button
            text="Cancelar"
            iconPosition="left"
            type="submit"
            icon="close"
            textColor={Colors.lightGray}
            onClick={resetForm}
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
              width: '1rem',
              fontSize: 20,
            }}
          />
          <Button
            text="Actualizar"
            iconPosition="right"
            type="submit"
            className="darkBlue"
            onClick={actualizar}
            buttonStyles={{ marginRight: 0 }}
          />
        </ButtonWrapper>
      }
    >
      <EditModalStyled>
        <PhotoWrapper>
          <div className="containerImage" />
          <div className="profileContain">
            <div className="StyledSubtitle">Fotografía de perfil</div>
            <div className="StyledTextProfile">
              <Text text="Sube tu fotografía de perfil, tamaño recomendado 1000x1000. Formato.JPG, .JPEG, .PNG, y .GIF." />
            </div>
            <Button
              text="Subir"
              loadingText="Subiendo"
              type="submit"
              className="blue-gradientWidth"
              isLoading={false}
            />
          </div>
        </PhotoWrapper>

        <div className="inputsWrapper">
          <label htmlFor="userName">
            <InputGroup
              id="userName"
              name="userName"
              label="Nombre de usuario"
              type="text"
              value={currentNombre}
              disabled
              placeholder={currentNombre}
              className="disableInput"
            />
          </label>

          <label>
            <InputGroup
              id="email"
              name="email"
              label="Email"
              type="text"
              disabled
              placeholder={currentEmail}
              className="disableInput"
              value={currentEmail}
            />
          </label>
        </div>

        <div className="inputsWrapper">
          <label>
            <InputGroup
              label="Nueva contraseña"
              type="password"
              placeholder="Introducir contraseña"
              onChange={(e) => setPassword(e.target.value)}
              id="passName"
              name="passName"
              error={password !== '' && !validatePassword(password) ? msgs.passwordError : ''}
            />
          </label>
          <label>
            <InputGroup
              label="Confirmar contraseña"
              type="password"
              placeholder="Confirma tu contraseña"
              onChange={(e) => setPassword2(e.target.value)}
              id="confirmPassName"
              name="confirmPassName"
              error={
                password2 !== '' && password2 !== password ? 'Both passwords must be equal' : ''
              }
            />
          </label>
        </div>
        <Button
          onClick={actualizar}
          text="Guardar"
          type="submit"
          className="green-gradient"
          disabled={!(validatePassword(password) && password2 === password)}
        />
      </EditModalStyled>
    </Modal>
  )
}

EditProfile.propTypes = {
  currentNombre: PropTypes.string,
  currentEmail: PropTypes.string,
  active: PropTypes.bool,
  hideModal: PropTypes.func,
  updateUserData: PropTypes.func,
}

export default EditProfile
