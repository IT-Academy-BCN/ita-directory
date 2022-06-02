import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { paths } from '../../utils'
import { colors } from '../../theme'
import { Text } from '../atoms'

const menu = [
  {
    to: paths.home,
    name: 'El directorio',
  },
  {
    to: '/students',
    name: 'Para alumnos',
  },
  {
    to: '/business',
    name: 'Para empresas',
  },
]
function Menu() {
  return (
    <Container>
      {menu.map((item) => {
        return (
          <Link to={item.to}>
            <Text as="span" text={item.name} pr={item.name === 'Para empresas' ? '0px' : '15px'} />
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
