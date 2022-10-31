import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useUser from '../../../hooks/useUser'
import { colors, device } from '../../../theme'
import { paths } from '../../../utils'
import { Button, Dropdown, Icon, Li, Text, Ul } from '../../atoms'
import ProfileImage from '../../../pages/UserFlow/Profile/ProfileImage'

const UserAccessStyled = styled.div`
  .not-logged-in {
    display: flex;
    align-items: center;
    font-size: 14px;

    .login-link {
      color: #777;
      text-decoration: none;
    }

    ${Button} {
      margin-left: 1rem;
      font-size: 14px;
      height: 32px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .header__profile-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0 2px 4px ${colors.darkerShadow};
    border: 0;
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    position: relative;
    color: ${colors.grey};
    margin-top: 1rem;

    @media ${device.Tablet} {
      margin-top: 0;
    }

    border-left: 0.3rem solid white;
    border-right: 0.3rem solid white;
    &:hover {
      border-left: 0.3rem solid ${colors.redPink};
      border-right: 0.3rem solid ${colors.redPink};
    }

    ${Icon} {
      margin-right: 8px;
    }

    .header__profile-title {
      font-size: 18px;
      display: inline;
      white-space: pre;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .header__profile-dropdown {
    position: absolute;
    padding: 0;
    z-index: 1;
    top: 103px;
    text-align: center;
    background: transparent 0% 0% no-repeat padding-box;
    border: 1px solid ${colors.lighterGrey};
    border-radius: 10px;
    opacity: 1;

    @media ${device.Tablet} {
      top: 50px;
    }
  }
`

const ImgStyle = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    object-fit: cover;
    margin-right: 12px;
  }
`

function UserAccess() {
  const history = useHistory()
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)
  const user = useUser()
  const children = [
    { path: paths.profile, text: 'Editar perfil' },
    { path: paths.bills, text: 'Mis facturas' },
    { path: paths.userAds, text: 'Mis Anuncios' },
    { path: paths.newAd, text: 'Publicar Anuncio' },
    { path: paths.ads, text: 'Anuncios' },
  ]
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const handleClick = () => {
    setDropdownVisible(!dropdownVisible)
  }

  return (
    <UserAccessStyled>
      {!isLoggedIn ? (
        <div className="not-logged-in">
          <Link className="login-link" to={paths.login}>
            Acceder
          </Link>
          <Button
            type="button"
            text="Registrarse"
            className="orange-gradient"
            onClick={() => history.push(paths.register)}
          />
        </div>
      ) : (
        <>
          <button
            id="dropdownButton"
            type="button"
            className="header__profile-button"
            onClick={handleClick}
          >
            {user?.avatar ? (
              <ImgStyle>
                <ProfileImage imgSource={user?.avatar?.path} />
              </ImgStyle>
            ) : (
              <Icon name="account_circle" size={32} />
            )}
            <Text as="span" text="Mi Perfil" className="header__profile-title" />
          </button>
          {dropdownVisible ? (
            <Dropdown setDropdownVisible={setDropdownVisible} parentId="dropdownButton">
              <Ul>
                {children?.map(({ path, text }) => (
                  <Li key={text}>
                    <Link key={text} to={path}>
                      {text}
                    </Link>
                  </Li>
                ))}
                <Li
                  onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('refreshToken')
                    window.location.reload()
                  }}
                >
                  <Link to={paths.home}>Cerrar Sesión</Link>
                </Li>
              </Ul>
            </Dropdown>
          ) : null}
        </>
      )}
    </UserAccessStyled>
  )
}

export default UserAccess
