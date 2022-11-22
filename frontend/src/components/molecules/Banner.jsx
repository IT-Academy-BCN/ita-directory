// @ts-nocheck

import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../theme'
import Students from '../atoms/Contributors/Students'
import BannerBcn from '../atoms/Contributors/BannerBcn'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    font-weight: bold;
    color: ${colors.redPink};
  }
`

function Banner({ students }) {
  return <Section>{students ? <Students /> : <BannerBcn />}</Section>
}

Banner.propTypes = {
  students: PropTypes.bool,
}

export default Banner
