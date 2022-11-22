// @ts-nocheck
import styled from 'styled-components'
import { space } from 'styled-system'

import BarcelonaBanner from '../../../assets/logos/barcelona-banner.jpg'
import Text from '../Text'

const Divider = styled.div`
  ${space}
`

const Img = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  height: 23rem;
  width: 100%;
  object-fit: cover;
`

function BannerBcn() {
  return (
    <>
      <Img src={BarcelonaBanner} alt="body-banner" />
      <Divider my="11.5rem" />
      <Text text="Un directorio abierto desarrollado por los alumnos de Barcelona Activa" />
    </>
  )
}

export default BannerBcn
