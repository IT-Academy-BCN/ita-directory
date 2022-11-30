// @ts-nocheck
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Ad from './pages/Ad/Ad'
import PageNotFound from './pages/PageNotFound/PageNotFound'
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
  Profile,
  UserAds,
  Bill,
  MyBills,
  Dashboard,
  ListaUsuariosAdmins,
} from './pages'
import { paths } from './utils'
import EditAd from './pages/EditAd/EditAd'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ad/:id" component={Ad} />
      <Route exact path="/new-ad" component={CreateNewAd} />
      <Route exact path={paths.login} component={Login} />
      <Route exact path={paths.register} component={Registration} />
      <Route exact path={paths.recoverPassword} component={RecoverPassword} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/business" component={Business} />
      <Route exact path="/ads" component={AdList} />
      <ProtectedRoute exact path={paths.profile} component={Profile} />
      <ProtectedRoute exact path={paths.userAdmin} component={ListaUsuariosAdmins} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/my-ads" component={UserAds} />
      <ProtectedRoute exact path="/my-ads/:id" component={EditAd} />
      <ProtectedRoute exact path="/my-bills" component={MyBills} />
      <ProtectedRoute path="/my-bills/:id" component={Bill} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  )
}

export default App
