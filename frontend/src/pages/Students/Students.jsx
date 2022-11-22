// @ts-nocheck

import { Banner } from '../../components/atoms'
import Body from '../../components/layout/Body/Body'
import { Menu } from '../../components/molecules'

function Students() {
  return (
    <Body title="Para alumnos" menu={<Menu />} hideTitle>
      <Banner students />
    </Body>
  )
}

export default Students
