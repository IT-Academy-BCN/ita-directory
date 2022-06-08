import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ContainerMenu, HeaderStyled, StyledHeaderHome, StyledSubHeader } from './Header.styles'
import { Container } from '../../../theme'
import logo from '../../../assets/logos/logo.png'
import { Text, Dropdown, Li, Ul, Title } from '../../atoms'
import { paths } from '../../../utils'

const profilePicture = 'https://randomuser.me/api/portraits/men/22.jpg'

function Header({ title, logoColor, menu }) {
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)

  const children = [
    { path: paths.profile, text: 'Editar perfil' },
    { path: paths.bills, text: 'Mis facturas' },
    { path: paths.userAds, text: 'Mis Anuncios' },
    { path: paths.newAd, text: 'Publicar Anuncio' },
    { path: paths.ads, text: 'Anuncios' },
    { path: paths.home, text: 'Cerrar sesión' },
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
      {menu && (
        <StyledHeaderHome>
          <Container>
            <ContainerMenu>{menu}</ContainerMenu>
          </Container>
        </StyledHeaderHome>
      )}
      {title && (
        <StyledSubHeader>
          <Container>
            <Title text={title} order={1} />
          </Container>
        </StyledSubHeader>
      )}
    </HeaderStyled>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  logoColor: PropTypes.string,
  menu: PropTypes.object,
}

export default Header
