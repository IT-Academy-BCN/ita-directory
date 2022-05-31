import React from 'react'
import styled from 'styled-components'
import LinksMenu from '../atoms/menu/LinksMenu'
import { colors, font } from '../../theme'

function Menu() {
  return (
    <Container>
      <LinksMenu to="/" as="span" text="El directorio" />
      <LinksMenu to="/collaborators" as="span" text="Para alumnos" />
      <LinksMenu to="/" as="span" text="Para empresas" />
    </Container>
  )
}

const Container = styled.div`
  a {
    text-decoration: none;
    color: black;
    &:active {
      color: ${colors.redPink};
    }
  }
  span {
    padding-right: 10px;
    font-size: ${font.sm};
  }
`

export default Menu
