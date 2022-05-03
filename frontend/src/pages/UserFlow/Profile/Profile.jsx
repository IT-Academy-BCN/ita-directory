/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Layout Components
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'

// Units Components
import AsyncButton from '../../../components/atoms/Button/Button'
import Input from '../../../components/atoms/Input/Input'

// Composed Components
import Modal from '../../../components/organisms/Modal/Modal'

// Style Components
import { ProfileWrapper, ProfileForm, ProfileImage, ProfileUploadPhoto } from './Profile.styles'
import { Container } from '../../../theme'

// *** testing
import people1b from '../../../assets/images/people1b.jpg'
import people4b from '../../../assets/images/people4b.jpg'
import people13b from '../../../assets/images/people13b.jpg'

import initLoggedinUserInfo from '../fakeUser.json'
import { msgs, validatePassword } from '../../../utils/userFlow'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'

const usersPhoto = {
  people1b,
  people4b,
  people13b,
}
// testing ***

function Profile() {
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordRepeated, setNewPasswordRepeated] = useState('')
  const [newPhoto, setNewPhoto] = useState(null)
  const [loggedinUserInfo, setLoggedinUserInfo] = useState({})
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false)
  const [firstLoad, setFirstLoad] = useState(null)
  const dispatch = useDispatch()
  // aquí deberá cargarse info de usuario autenticado correctamente
  // (o de otro modo se le pasará o estará accesible para componente):
  useEffect(() => {
    // *** testing
    const loggedinUserInfoOnLocalStorage = localStorage.getItem('loggedinUserInfo')
    if (loggedinUserInfoOnLocalStorage)
      setLoggedinUserInfo(JSON.parse(loggedinUserInfoOnLocalStorage))
    else setLoggedinUserInfo(initLoggedinUserInfo)
    setFirstLoad(true)
    // testing ***
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('loggedinUserInfo', JSON.stringify(loggedinUserInfo))
      dispatch(
        newNotification({
          message: 'Your new account information was saved succesfully!',
          type: NotificationTypes.succes,
        })
      )
    } catch (e) {
      dispatch(
        newNotification({
          message:
            'Ups, something went wrong saving your new account information. Please, try later or contact us.',
          type: NotificationTypes.error,
        })
      )
    } finally {
      setNewPassword('')
      setNewPhoto(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedinUserInfo])

  useEffect(() => {
    setNewPasswordRepeated('')
  }, [newPassword])

  const changePhoto = () => {
    const photos = Object.keys(usersPhoto)
    const pos = photos.indexOf(newPhoto || loggedinUserInfo.photo)
    setNewPhoto(pos === photos.length - 1 ? photos[0] : photos[pos + 1])
    setShowUploadPhotoModal(false)
  }

  const submitUserInfo = () => {
    setLoggedinUserInfo((prev) => {
      return {
        ...prev,
        photo: newPhoto || loggedinUserInfo.photo,
        password: newPassword === '' ? loggedinUserInfo.password : newPassword,
      }
    })
  }

  return (
    <Body title="Editar perfil" justifyTitle="flex-start" isLoggedIn="true">
      <Container>
        <Modal
          hideModal={() => setShowUploadPhotoModal(false)}
          active={showUploadPhotoModal}
          title="Upload Profile's Photo"
        >
          <ProfileForm className="uploadphoto-modal">
            <input type="file" name="selectfile" />
            <AsyncButton
              text="Sube"
              loadingText="Subiendo"
              className="blue-gradient w-36"
              type="button"
              onClick={changePhoto}
            />
          </ProfileForm>
        </Modal>
        <ProfileWrapper className="form-frame">
          <ProfileForm className="profile-photo">
            <ProfileImage>
              <img src={usersPhoto[newPhoto || loggedinUserInfo.photo]} alt="Foto de perfil" />
            </ProfileImage>
            <ProfileUploadPhoto>
              <div>
                <p>Fotografía de perfil</p>
                <p>Tamaño recomendado: 1000x1000</p>
                <p>Formatos admitidos: JPG, JPEG, PNG, o GIF</p>
              </div>
              <div>
                <AsyncButton
                  text="Subir"
                  type="button"
                  className="blue-gradient w-28"
                  onClick={() => setShowUploadPhotoModal(true)}
                  isLoading={false}
                />
                {newPhoto && (
                  <small className="info-photo-uploaded">
                    Photo uploaded. Remember to save your data!
                  </small>
                )}
              </div>
            </ProfileUploadPhoto>
          </ProfileForm>
          <ProfileForm className="profile-data">
            <div>
              <div>
                <label>Nombre de usuario</label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={loggedinUserInfo.name}
                  disabled
                  minMarginTop
                />
                <p>El nombre de usuario no se puede modificar</p>
              </div>
              <div>
                <label>Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={loggedinUserInfo.email}
                  disabled
                  minMarginTop
                />
                <p>
                  El email no se puede modificar. Ponte en
                  <Link to="#"> contacto</Link> si necesitas actualizarlo.
                </p>
              </div>
            </div>
            <div>
              <div>
                <label>Nueva Contraseña</label>
                <Input
                  type="password"
                  value={newPassword}
                  placeholder="Introducir contraseña"
                  onChange={(e) => setNewPassword(e.target.value)}
                  id="passName"
                  name="password"
                  minMarginTop
                  success={newPassword !== '' && validatePassword(newPassword)}
                  error={newPassword !== '' && !validatePassword(newPassword)}
                  errorText={msgs.passwordError}
                />
              </div>
              <div>
                <label>Confirmar Contraseña</label>
                <Input
                  type="password"
                  value={newPasswordRepeated}
                  placeholder="Confirma tu contraseña"
                  onChange={(e) => setNewPasswordRepeated(e.target.value)}
                  id="confirmPassName"
                  name="confirmPassName"
                  error={newPasswordRepeated !== '' && newPassword !== newPasswordRepeated}
                  errorText="Las 2 contraseñas tienen que ser iguales"
                  success={newPasswordRepeated !== '' && newPassword === newPasswordRepeated}
                  disabled={!validatePassword(newPassword)}
                  minMarginTop
                />
              </div>
            </div>
            <div>
              <AsyncButton
                text="Guardar"
                loadingText="Guardando"
                type="button"
                onClick={() => {
                  if (firstLoad) setFirstLoad(false)
                  submitUserInfo()
                }}
                className="green-gradient"
                disabled={
                  !newPhoto &&
                  (!validatePassword(newPassword) || !(newPassword === newPasswordRepeated))
                }
              />
            </div>
          </ProfileForm>
        </ProfileWrapper>
      </Container>
    </Body>
  )
}

export default Profile
