import React from 'react'
import Body from '../../components/layout/Body/Body'
import { Menu } from '../../components/molecules'

function Business() {
  return (
    <Body menu={<Menu />} title="Para empresas">
      <p>Empresas</p>
    </Body>
  )
}

export default Business
