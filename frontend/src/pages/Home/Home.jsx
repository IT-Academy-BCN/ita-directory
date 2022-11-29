import React from 'react'
import styled from 'styled-components'
import Body from '../../components/layout/Body/Body'
import { Banner } from '../../components/atoms'
import { MapOfDistricts } from '../../components/organisms'
import { Container, device } from '../../theme'
import { Menu } from '../../components/molecules'

const HomeContainer = styled(Container)`
  flex-direction: column;
  min-height: calc(100vh - 360px);

  @media ${device.Tablet} {
    min-height: calc(100vh - 300px);
  }

  a {
    &:hover {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      color: blue;
    }
  }
`

function Home() {
  return (
    <Body menu={<Menu />} title="El directorio" justifyTitle="center" hideTitle>
      <HomeContainer data-testid="homeContainerTest">
        <Banner />
        <MapOfDistricts />
      </HomeContainer>
    </Body>
  )
}

export default Home
