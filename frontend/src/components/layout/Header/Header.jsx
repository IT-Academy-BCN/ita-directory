import React from 'react'
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

  return (
    <HeaderStyled justifyTitle={justifyTitleB} logoColor={logoColor}>
      <Container>
        <div className="header__container">
          <Link className="header__logo-group" to="/">
            <img src={logo} alt="ITAcademy Logo" className="header__logo" />
            <span className="header__logo-text">_directory</span>
          </Link>
          <Dropdown isLoggedIn={isLoggedIn} profilePicture={profilePicture} />
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
