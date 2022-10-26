import React from 'react'
import Body from '../../components/layout/Body/Body'
import { Menu } from '../../components/molecules'
import HelmetComponent from '../../components/organisms/HelmetComponent'

function Business() {
  return (
    <Body menu={<Menu />}>
      <HelmetComponent text="Para empresas" />
      <p>Empresas</p>
    </Body>
  )
}

export default Business
