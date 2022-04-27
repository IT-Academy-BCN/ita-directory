import styled from 'styled-components'
import { device } from '../../../theme'

export const GalleryStyled = styled.div`
  width: 90%;
  padding-right: 3rem;
  padding-left: 3rem;

  @media ${device.Tablet} {
    width: 80%;
  }
`
