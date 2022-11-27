// @ts-nocheck
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, device } from '../../theme'
import ColaboradoresBanner from '../../assets/logos/Colaboradores-Banner.jpg'
import BarcelonaBanner from '../../assets/logos/barcelona-banner.jpg'
import Contributors from '../organisms/Contributors'
import { Text } from '../atoms'

const BannerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.Desktop} {
    padding: 0 11rem 0 11rem;
  }
  @media ${device.Laptop} {
    padding: 0 6rem 0 6rem;
  }
  @media ${device.Tablet} {
    padding: 0 8rem 0 8rem;
  }

  .colaboradores-text {
    margin-top: 25rem;
  }
  .contributors-avatar {
    margin-top: 2rem;
  }
  .footer {
    margin-bottom: 2rem;
  }
  .directorio {
    margin-top: 25rem;
  }
  h4 {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: bold;
    margin-bottom: 0;
    color: ${colors.redPink};
  }
`
const Img = styled.img`
  position: absolute;
  left: 0;
  height: 23rem;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
`

function Banner({ students }) {
  const srcImg = students ? ColaboradoresBanner : BarcelonaBanner

  return (
    <BannerStyled alignItems="center">
      <Img src={srcImg} alt="banner image" />
      {students ? (
        <>
          <Text as="h4" className="colaboradores-text" text="Colaboradores" />
          <Text text="Usuarios de github.com que han contribuido" />
          <Contributors />
          <Text as="h4" text="Perfiles" />
          <Text className="footer" text="ReactJS y Node Juniors Developers en Barcelona" />
        </>
      ) : (
        <Text
          as="h4"
          className="directorio"
          text="Un directorio abierto desarrollado por los alumnos de Barcelona Activa"
        />
      )}
    </BannerStyled>
  )
}

Banner.propTypes = {
  students: PropTypes.bool,
}

export default styled(Banner)``
