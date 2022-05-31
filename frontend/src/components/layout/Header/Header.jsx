import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { HeaderStyled, StyledSubHeader } from './Header.styles'
import { Container } from '../../../theme'
import logo from '../../../assets/logos/logo.png'
import { Text, Dropdown, Li, Ul } from '../../atoms'

const profilePicture = 'https://randomuser.me/api/portraits/men/22.jpg'

function Header({ title, logoColor, headerColor, fontColor, justifyTitle, isTitleVisible = true }) {
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)

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
    <HeaderStyled logoColor={logoColor}>
      <Container>
        <div className="header__container">
          <Link className="header__logo-group" to="/">
            <img src={logo} alt="ITAcademy Logo" className="header__logo" />
            <Text as="span" text="_directory" className="header__logo-text" />
          </Link>
          <div className="header__profile">
            <button
              id="dropdownButton"
              type="button"
              className="header__profile-button"
              onClick={handleClick}
            >
              <img className="header__profile-image" src={profilePicture} alt="Profile" />
              <Text as="span" text="Mi Perfil" className="header__profile-title" />
            </button>
            {dropdownVisible ? (
              <Dropdown setDropdownVisible={setDropdownVisible} parentId="dropdownButton">
                {isLoggedIn ? (
                  <Ul>
                    {children?.map(({ path, text }) => (
                      <Li key={text}>
                        <Link key={text} to={path}>
                          {text}
                        </Link>
                      </Li>
                    ))}
                  </Ul>
                ) : null}
              </Dropdown>
            ) : null}
          </div>
        </div>
      </Container>
      <StyledSubHeader headerColor={headerColor} fontColor={fontColor}>
        <Container>
          <h1>{title}</h1>
        </Container>
      </StyledSubHeader>
    </HeaderStyled>
  )
}

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  logoColor: PropTypes.string,
  headerColor: PropTypes.string,
  fontColor: PropTypes.string,
  justifyTitle: PropTypes.string,
  isTitleVisible: PropTypes.bool,
}

export default Header
