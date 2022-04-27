import React from 'react'
import { Icon } from './components/atoms'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Ad from './pages/Ad/Ad'
import CreateNewAd from './pages/CreateNewAd/CreateNewAd'
import Login from './pages/UserFlow/Login/Login'
import Registration from './pages/UserFlow/Registration/Registration'
import RecoverPassword from './pages/UserFlow/RecoverPassword/RecoverPassword'
import Profile from './pages/UserFlow/Profile/Profile'
import AdList from './pages/AdList/AdList'
import ListaUsuariosAdmins from './pages/ListaUsuariosAdmins/ListaUsuariosAdmins'
import Dashboard from './pages/Dashboard/Dashboard'
import MyBills from './pages/MyBills/MyBills'
import Bill from './pages/MyBills/Bill'
import UserAds from './pages/UserAds/UserAds'
import ProtectedRoute from './components/organisms/ProtectedRoute'
import Search from './pages/Search/Search'
import ChangePassword from './pages/UserFlow/ChangePassword/ChangePassword'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Notifications from './components/atoms/Notifications/Notifications'

// import SalesLineChart from './pages/Sales/SalesLineChart'
// import SalesByMonth from './pages/Sales/SalesByMonth'
// import SalesByType from './pages/Sales/SalesByType'
const noExiste = () => {
  console.log('Branch 34-mapa-con-marcador-personalizado')
}

function App() {
  return (
    <>
      <Notifications />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ad/:id" component={Ad} />
        <Route exact path="/new-ad" component={CreateNewAd} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
        <ProtectedRoute>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/recover-password" component={RecoverPassword} />
          <Route exact path="/ads" component={AdList} />
          <Route exact path="/lista-usuarios-admins" component={ListaUsuariosAdmins} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user-ads" component={UserAds} />
          <Route exact path="/my-bills" component={MyBills} />
          <Route path="/my-bills/:id" children={<Bill />} />
        </ProtectedRoute>
        {/* <Route path="mi-ruta" children={noExiste} />
        <Route path="/search" component={Search} />
        <Route path="/change-password/:token" component={ChangePassword} />
        <Route path="*" component={PageNotFound} />
        <Route exact path="/sales-line-chart" component={SalesLineChart} dashboard={false} />
        <Route exact path="/sales-by-month" component={SalesByMonth} />
        <Route exact path="/sales-by-type" component={SalesByType} dashboard={false} /> */}
      </Switch>
    </>
  )
}

export default App
