// @ts-nocheck
import React from 'react'
import Body from '../../components/layout/Body/Body'
import { Menu, Banner } from '../../components/molecules'

function Students() {
  return (
    <Body title="Para alumnos" menu={<Menu />} hideTitle>
      <Banner students />
    </Body>
  )
}

export default Students
