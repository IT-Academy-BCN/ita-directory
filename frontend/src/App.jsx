import React from 'react'
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
import Students from './pages/Students/Students'
import Business from './pages/Business/Business'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ad/:id" component={Ad} />
      <Route exact path="/new-ad" component={CreateNewAd} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
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
