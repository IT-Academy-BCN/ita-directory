import React from 'react'
import { Logo, StyledHeader } from './styles'

const Header = ({ title }) => {
  return (
    <div>
      <Logo> Mi Empresa</Logo>
      <StyledHeader>
        <h1>{title}</h1>
      </StyledHeader>
    </div>
  )
}

export default Header
