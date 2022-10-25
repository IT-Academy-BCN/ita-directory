import React from 'react'
import { Banner } from '../../components/atoms'
import Body from '../../components/layout/Body/Body'
import { Menu } from '../../components/molecules'
import HelmetComponent from '../../components/organisms/HelmetComponent'

function Students() {
  return (
    <Body menu={<Menu />}>
      <HelmetComponent text="Alumnos" />
      <Banner students />
    </Body>
  )
}

export default Students
