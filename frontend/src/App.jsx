import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Ad from './pages/Ad/Ad'
import ProtectedRoute from './components/organisms/ProtectedRoute'
import {
  Students,
  Business,
  Home,
  Login,
  Registration,
  CreateNewAd,
  RecoverPassword,
  AdList,
  UserAds,
  Profile,
  Bill,
  MyBills,
  ListaUsuariosAdmins,
  Dashboard,
} from './pages'
import { paths } from './utils'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ad/:id" component={Ad} />
      <Route exact path="/new-ad" component={CreateNewAd} />
      <Route exact path={paths.login} component={Login} />
      <Route exact path={paths.register} component={Registration} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/business" component={Business} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/recover-password" component={RecoverPassword} />
      <ProtectedRoute exact path="/ads" component={AdList} />
      <ProtectedRoute exact path="/lista-usuarios-admins" component={ListaUsuariosAdmins} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/user-ads" component={UserAds} />
      <ProtectedRoute exact path="/my-bills" component={MyBills} />
      <ProtectedRoute path="/my-bills/:id" component={Bill} />
    </Switch>
  )
}

export default App
