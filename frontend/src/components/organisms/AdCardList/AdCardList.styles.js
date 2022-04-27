import styled from 'styled-components'
import { device } from '../../../theme'

const AdCardListStyled = styled.div`
  .list-scroll {
    display: grid;
    grid-gap: 1.5rem;

    @media ${device.Tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.Laptop} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default AdCardListStyled
