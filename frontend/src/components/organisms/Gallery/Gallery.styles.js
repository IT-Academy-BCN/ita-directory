import styled from 'styled-components'
import { device } from '../../../theme'

const GalleryStyled = styled.div`
  width: 100%;
  padding-right: 3rem;
  padding-left: 3rem;

  @media ${device.Tablet} {
    width: 80%;
  }
`
export default GalleryStyled
