/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Body from '../../../components/layout/Body/Body'
import { Button, Input } from '../../../components/atoms'
import Modal from '../../../components/organisms/Modal/Modal'
import { ProfileWrapper, ProfileForm, ProfileImage, ProfileUploadPhoto } from './Profile.styles'
import { Container } from '../../../theme'
import { msgs, validatePassword } from '../../../utils/userFlow'
import useUser from '../../../hooks/useUser'
import { FlexBox } from '../../../theme/wrappers'
import urls from '../../../utils/urls'
import axiosInstance from '../../../utils/axiosInstance'

function Profile() {
  const user = useUser()
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordRepeated, setNewPasswordRepeated] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [loggedinUserInfo, setLoggedinUserInfo] = useState({})
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false)
  const [firstLoad, setFirstLoad] = useState(null)

  const submitUserInfo = () => {
    setLoggedinUserInfo((prev) => {
      return {
        ...prev,
        password: newPassword === '' ? loggedinUserInfo.password : newPassword,
      }
    })
  }

  const handlePhoto = (e) => {
    const image = URL.createObjectURL(e.target.files[0])
    setAvatar(image)
  }

  const handleSaveAvatar = async () => {
    const f = new FormData()
    f.append('avatar', avatar)
    axiosInstance.post(urls.updateAvatar, f, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }

  return (
    <Body title="Editar perfil" justifyTitle="flex-start" isLoggedIn>
      <Container>
        <Modal
          hideModal={() => setShowUploadPhotoModal(false)}
          active={showUploadPhotoModal}
          title="Upload Profile's Photo"
        >
          <ProfileForm className="uploadphoto-modal">
            <input type="file" name="photo" onChange={handlePhoto} />
            <Button
              text="Sube"
              loadingText="Subiendo"
              className="blue-gradient w-36"
              type="button"
            />
          </ProfileForm>
        </Modal>
        <ProfileWrapper className="form-frame">
          <ProfileForm className="profile-photo">
            <ProfileImage>
              <img
                src={avatar || `http://localhost:10910${user?.avatar?.path}`}
                alt="Foto de perfil"
              />
            </ProfileImage>
            <ProfileUploadPhoto>
              <div>
                <p>Fotografía de perfil</p>
                <p>Tamaño recomendado: 1000x1000</p>
                <p>Formatos admitidos: JPG, JPEG, PNG, o GIF</p>
              </div>
              <FlexBox>
                <Button
                  text="Seleccionar"
                  type="button"
                  className="blue-gradient"
                  onClick={() => setShowUploadPhotoModal(true)}
                />
                <Button
                  text="Guardar"
                  type="button"
                  className="green-gradient"
                  onClick={() => handleSaveAvatar()}
                  buttonStyles={{ marginLeft: '0.5rem' }}
                />
              </FlexBox>
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
              <Button
                text="Guardar"
                loadingText="Guardando"
                type="button"
                onClick={() => {
                  if (firstLoad) setFirstLoad(false)
                  submitUserInfo()
                }}
                className="green-gradient"
                disabled={
                  !avatar &&
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
