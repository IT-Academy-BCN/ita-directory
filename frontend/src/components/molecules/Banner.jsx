// @ts-nocheck
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, device } from '../../theme'
import { BannerStudents, BannerBcn, BannerBarcelona } from '../atoms/Contributors'

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

  p {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: bold;
    color: ${colors.redPink};
  }
`

function Banner({ students }) {
  // return <BannerStyled>{students ? <BannerStudents /> : <BannerBcn />}</BannerStyled>
  return <BannerStyled>{students ? <BannerBarcelona /> : <BannerBcn />}</BannerStyled>
}

Banner.propTypes = {
  students: PropTypes.bool,
}

export default styled(Banner)``
