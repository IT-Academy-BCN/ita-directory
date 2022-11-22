// @ts-nocheck
import styled from 'styled-components'
import { space } from 'styled-system'
import ColaboradoresBanner from '../../../assets/logos/Colaboradores-Banner.jpg'
import Text from '../Text'
import Contributors from './Contributors'

const Divider = styled.div`
  ${space}
`
const Img = styled.img`
  position: absolute;
  left: 0;
  height: 23rem;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
`
const TextAlign = styled.div`
  text-align: center;
`

function BannerStudents() {
  return (
    <>
      <Img src={ColaboradoresBanner} alt="body-banner" />
      <TextAlign>
        <Divider my="25rem" />
        <Text text="Colaboradores" />
        <Text text="Usuarios de github.com que han contribuido" as="span" />
        <Divider my="2.2rem" />
        <Contributors />
        <Divider my="1rem" />
        <Text text="Perfiles" />
        <Text text="ReactJS y Node Juniors Developers en Barcelona" as="span" />
        <Divider my="10rem" />
      </TextAlign>
    </>
  )
}

export default BannerStudents
