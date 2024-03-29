// @ts-nocheck
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  {
    to: '/ads',
    name: 'Anuncios',
  },
]
const Container = styled.div`
  a {
    text-decoration: none;
  }
`

function Menu() {
  const location = useLocation()
  return (
    <Container>
      {menu.map((item, index) => (
        <Link to={item.to} key={item.to}>
          <Text
            as="span"
            text={item.name}
            style={{ color: location.pathname === item.to ? colors.redPink : colors.black }}
            pr={index === menu.length - 1 ? '0px' : '15px'}
          />
        </Link>
      ))}
    </Container>
  )
}

export default Menu
