import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { HeaderStyled, StyledSubHeader } from './Header.styles'
import { Container } from '../../../theme'
import logo from '../../../assets/logos/logo.png'

const profilePicture = 'https://randomuser.me/api/portraits/men/21.jpg'

function Header({ title, logoColor, headerColor, fontColor, justifyTitle, isTitleVisible = true }) {
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClick = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const justifyTitleB = justifyTitle === 'center'

  return (
    <HeaderStyled justifyTitle={justifyTitleB} logoColor={logoColor}>
      <Container>
        <div className="header__container">
          <Link className="header__logo-group" to="/">
            <img src={logo} alt="ITAcademy Logo" className="header__logo" />
            <span className="header__logo-text">_directory</span>
          </Link>
          {isLoggedIn ? (
            <div className="header__profile">
              <button type="button" className="header__profile-button" onClick={handleClick}>
                <img className="header__profile-image" src={profilePicture} alt="Profile" />
                <span className="header__profile-title">Mi perfil</span>
              </button>
              {dropdownVisible ? (
                <div className="header__profile-dropdown">
                  <ul>
                    <li>
                      <Link to="/profile">Editar perfil</Link>
                    </li>
                    <li>
                      <Link to="/my-bills">Mis facturas</Link>
                    </li>
                    <li>
                      <Link to="/user-ads">Mis Anuncios</Link>
                    </li>
                    <li>
                      <Link to="/new-ad">Publicar Anuncio</Link>
                    </li>
                    <li>
                      <Link to="/">Cerrar sesión</Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
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
  title: PropTypes.string.isRequired,
  logoColor: PropTypes.string,
  headerColor: PropTypes.string,
  fontColor: PropTypes.string,
  justifyTitle: PropTypes.string,
  isTitleVisible: PropTypes.bool,
}

export default Header
