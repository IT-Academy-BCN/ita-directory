import React from 'react'
import { Logo, Routes, StyledHeader } from './styles'
import { Link } from 'react-router-dom'

const Header = ({ title }) => {
  return (
    <div>
      <Logo> Mi Empresa</Logo>
      <StyledHeader>
        <Routes>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
          <h1>{title}</h1>
        </Routes>
      </StyledHeader>
    </div>
  )
}

export default Header
