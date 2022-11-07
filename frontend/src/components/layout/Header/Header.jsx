import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { colors, Container, device } from '../../../theme'
import logo from '../../../assets/logos/logo.png'
import { Text, Title } from '../../atoms'
import UserAccess from './UserAccess'

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .header__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media ${device.Tablet} {
      flex-direction: row;
    }

    .header__logo-group {
      display: flex;
      align-items: center;
      justify-content: ${(props) => (props.justifyTitle ? 'center' : 'left')};
      width: 229px;
      color: ${(props) => (props.logoColor ? props.logoColor : colors.darkRed)};
      font-size: 15px;
      opacity: 1;
      text-decoration: none;

      & .header__logo {
        width: 144px;
        height: 36px;
      }

      & .header__logo-text {
        font-family: 'Roboto Mono';
        font-size: 1rem;
        font-weight: bold;
        margin-left: 5px;
        width: 77px;
        display: flex;
        align-self: center;
        letter-spacing: -1.5px;
        color: ${colors.redPink};
      }
    }
  }
`

export const StyledSubHeader = styled.div`
  width: 100vw;
  background-color: ${(props) =>
    props.headerColor ? props.headerColor : `${colors.transparentBlue}`};
  border: ${(props) => (props.headerColor ? `` : `1px solid ${colors.palerBlue}`)};
  border-left: none;
  border-right: none;
  margin-bottom: 1rem;
  padding: 10px;

  h1 {
    width: 100%;
    font-size: 26px;
    line-height: 36px;
    font-weight: normal;
    text-align: ${(props) => (props.justifyTitle ? 'center' : 'left')};
    color: ${(props) => (props.fontColor ? props.fontColor : `${colors.grey}`)};
  }
`
export const StyledHeaderHome = styled.div`
  width: 100vw;
  background-color: ${colors.lightGrey2};
  border: ${(props) => (props.headerColor ? `` : `1px solid ${colors.lightGrey2}`)};
  border-left: none;
  border-right: none;

  p {
    width: 100%;
    font-size: 20px;
    line-height: 36px;
    font-weight: normal;
    margin: 10px 0px;
    text-align: ${(props) => (props.justifyTitle ? 'center' : 'left')};
    color: ${(props) => (props.fontColor ? props.fontColor : `${colors.grey}`)};
  }
`
export const ContainerMenu = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 36px;
  margin: 10px 0px;
`

function Header({ title, logoColor, menu, hideTitle }) {
  return (
    <HeaderStyled logoColor={logoColor}>
      <Container>
        <div className="header__container">
          <Link className="header__logo-group" to="/">
            <img src={logo} alt="ITAcademy Logo" className="header__logo" />
            <Text as="span" text="_directory" className="header__logo-text" />
          </Link>
          <UserAccess />
        </div>
      </Container>
      {menu && (
        <StyledHeaderHome>
          <Container>
            <ContainerMenu>{menu}</ContainerMenu>
          </Container>
        </StyledHeaderHome>
      )}
      {title && !hideTitle && (
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
  hideTitle: PropTypes.bool,
}

export default Header
