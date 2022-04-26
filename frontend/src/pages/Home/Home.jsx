import Body from '../../components/layout/Body/Body'
import { HomeContainer } from './Home.styles'
import { Banner } from '../../components/atoms'
import { MapOfDistricts } from '../../components/organisms'

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
    <Body title="Home" justifyTitle="center">
      <HomeContainer>
        <Banner />
        <MapOfDistricts />
      </HomeContainer>
    </Body>
  )
}

export default Home
