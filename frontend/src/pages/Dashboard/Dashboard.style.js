import styled from 'styled-components'
import { Container, device } from '../../theme'

export const DashboardContainer = styled(Container)`
  max-width: 90%;

  @media ${device.Tablet} {
    max-width: 80%;
  }
  @media ${device.Laptop} {
    max-width: 70%;
  }
`

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  .marginTop {
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  .marginBottom {
    margin-bottom: 2rem;
    flex-grow: 1;
  }
  .marginLeft {
    flex-grow: 1;
    @media ${device.LaptopLg} {
      padding-left: 2rem;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media ${device.Tablet} {
      width: 100%;
      flex-direction: row;
    }
    @media ${device.Laptop} {
      justify-content: space-between;
    }
  }

  .graphicMargin {
    margin-bottom: 3rem;
    margin-top: 2rem;
    margin-right: 0;
  }
`
