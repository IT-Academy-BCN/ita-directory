import React from 'react'
import styled from 'styled-components'
import LinkMenu from '../atoms/LinkMenu'
import { colors } from '../../theme'

function Menu() {
  return (
    <Container>
      <LinkMenu to="/" as="span" text="El directorio" fontSize={3} />
      <LinkMenu to="/collaborators" as="span" text="Para alumnos" fontSize={3} />
      <LinkMenu to="/" as="span" text="Para empresas" fontSize={3} />
    </Container>
  )
}

const Container = styled.div`
  a {
    text-decoration: none;
    &:active {
      color: ${colors.redPink};
    }
  }
`

export default Menu
