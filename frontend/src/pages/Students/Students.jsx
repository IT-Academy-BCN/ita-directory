import React from 'react'
import { Banner } from '../../components/atoms'
import Body from '../../components/layout/Body/Body'
import { Menu } from '../../components/molecules'

function Students() {
  return (
    <Body menu={<Menu />} title="Para alumnos">
      <Banner students />
    </Body>
  )
}

export default Students
