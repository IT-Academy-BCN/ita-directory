import styled from 'styled-components'
import Body from '../../components/layout/Body/Body'
import { Banner } from '../../components/atoms'
import { MapOfDistricts } from '../../components/organisms'
import { Container, device } from '../../theme'
import { Menu } from '../../components/molecules'
import HelmetComponent from '../../components/organisms/HelmetComponent'

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

// const pages = [
//   { title: 'Ad', route: '/ad' },
//   { title: "Admin users' List", route: '/lista-usuarios-admins' },
//   { title: 'Ads', route: '/ads' },
//   { title: 'Bill', route: '/my-bill/:id' },
//   { title: 'Dashboard', route: '/dashboard' },
//   { title: 'Home', route: '/' },
//   { title: 'Login', route: '/login' },
//   { title: 'My Bills', route: '/my-bills' },
//   { title: 'New Ad', route: '/new-ad' },
//   { title: 'Profile', route: '/profile' },
//   { title: 'Recover Password', route: '/recover-password' },
//   { title: 'Register', route: '/register' },
//   { title: 'Search', route: '/search' },
//   { title: "User's Ads", route: '/user-ads' },
//   { title: 'Change Password', route: '/change-password/:token' },
// ]

function Home() {
  return (
    <Body menu={<Menu />} justifyTitle="center">
      <HelmetComponent text="El directorio" />
      <HomeContainer data-testid="homeContainerTest">
        <Banner />
        <MapOfDistricts />
      </HomeContainer>
    </Body>
  )
}

export default Home
