import styled from 'styled-components'
import PropTypes from 'prop-types'
import BarcelonaBanner from '../../assets/logos/barcelona-banner.jpg'
import { colors } from '../../theme'
import ColaboradoresBanner from '../../assets/logos/Colaboradores-Banner.jpg'
import Text from './Text'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;

  p {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: bold;
    color: ${colors.redPink};
    margin: 25rem auto 2rem auto;
  }
`

const BannerBcn = styled.img`
  height: 23rem;
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
`
const BannerStudents = styled.img`
  height: 23rem;
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  object-position: bottom;
`
const ContainerText = styled.div`
  text-align: center;
`

function Banner({ students }) {
  return (
    <Section className="banner">
      {students ? (
        <div>
          <BannerStudents src={ColaboradoresBanner} alt="body-banner" className="banner__image" />
          <ContainerText>
            <Text className="banner__title" text="Colaboradores" />
            <Text text="Usuarios de github.com que han contribuido" as="span" />
          </ContainerText>
        </div>
      ) : (
        <div>
          <BannerBcn src={BarcelonaBanner} alt="body-banner" className="banner__image" />
          <Text
            className="banner__title"
            text="Un directorio abierto desarrollado por los alumnos de Barcelona Activa"
          />
        </div>
      )}
    </Section>
  )
}

Banner.propTypes = {
  students: PropTypes.bool,
}

export default Banner
