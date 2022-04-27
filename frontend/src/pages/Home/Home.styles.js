import styled from 'styled-components'
import { Container, device } from '../../theme'

export const HomeContainer = styled(Container)`
  flex-direction: column;
  min-height: calc(100vh - 360px);

  @media ${device.Tablet} {
    min-height: calc(100vh - 300px);
  }

  ul {
    text-align: center;
  }
  li {
    margin: 0.5rem;
  }

  a {
    &:hover {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      color: blue;
    }
  }
`
