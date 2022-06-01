import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { paths } from '../../utils'
import { colors } from '../../theme'
import { Text } from '../atoms'

const menu = [
  {
    to: paths,
    name: 'El directorio',
  },
  {
    to: '/alumnos',
    name: 'Para alumnos',
  },
  {
    to: '/empresas',
    name: 'Para empresas',
  },
]
function Menu() {
  return (
    <Container>
      {menu.map((item) => {
        return (
          <Link to={item.to}>
            <Text as="span" text={item.name} />
          </Link>
        )
      })}
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
