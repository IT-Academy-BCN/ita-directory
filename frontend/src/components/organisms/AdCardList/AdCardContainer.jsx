import styled from 'styled-components'
import { device } from '../../../theme'

const AdCardContainer = styled.div`
  display: block;

  @media ${device.Mobile} {
    padding: 16px;
    width: 50%;
  }
  @media only ${device.Laptop} {
    padding: 16px;
    width: 33.33%;
  }
`
export default AdCardContainer
