import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import { HeaderStyled, StyledSubHeader } from './Header.styles'
import { Container } from '../../../theme'
import logo from '../../../assets/logos/logo.png'
import Dropdown from '../../atoms/Dropdown'

const profilePicture = 'https://randomuser.me/api/portraits/men/22.jpg'

function Header({
  title,
  logoColor,
  headerColor,
  fontColor,
  justifyTitle,
  isLoggedIn = true,
  isTitleVisible = true,
}) {
  const justifyTitleB = justifyTitle === 'center'

  // 'Mi Perfil' dropdown children useState/ArrayConst mockup
  const children = [
    { path: '/profile', text: 'Editar perfil' },
    { path: '/my-bills', text: 'Mis facturas' },
    { path: '/user-ads', text: 'Mis Anuncios' },
    { path: '/new-ad', text: 'Publicar Anuncio' },
    { path: '/ads', text: 'Anuncios' },
    { path: '/', text: 'Cerrar sesión' },
  ]

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const handleClick = () => {
    setDropdownVisible(!dropdownVisible)
  }

  return (
    <HeaderStyled justifyTitle={justifyTitleB} logoColor={logoColor}>
      <Container>
        <div className="header__container">
          <Link className="header__logo-group" to="/">
            <img src={logo} alt="ITAcademy Logo" className="header__logo" />
            <span className="header__logo-text">_directory</span>
          </Link>
          <div className="header__profile">
            <button
              id="dropdownButton"
              type="button"
              className="header__profile-button"
              onClick={handleClick}
            >
              <img className="header__profile-image" src={profilePicture} alt="Profile" />
              <span className="header__profile-title">Mi Perfil</span>
            </button>
            {dropdownVisible ? (
              <Dropdown setDropdownVisible={setDropdownVisible} parentId="dropdownButton">
                {isLoggedIn ? (
                  <ul>
                    {children?.map(({ path, text }) => (
                      <li key={text}>
                        <Link key={text} to={path}>
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Dropdown>
            ) : null}
          </div>
          {/* <Dropdown isLoggedIn={isLoggedIn} profilePicture={profilePicture} /> */}
        </div>
      </Container>
      <StyledSubHeader headerColor={headerColor} fontColor={fontColor} justifyTitle={justifyTitleB}>
        <Container>
          <h1>{title}</h1>
        </Container>
      </StyledSubHeader>
    </HeaderStyled>
  )
}

Header.propTypes = {
  title: PropType.string.isRequired,
  logoColor: PropType.string,
  headerColor: PropType.string,
  fontColor: PropType.string,
  justifyTitle: PropType.string,
  isLoggedIn: PropType.bool,
  isTitleVisible: PropType.bool,
}

export default Header
