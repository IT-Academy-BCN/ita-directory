import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
// import StyledLoogin from './styles'

// import ProtectedRoute from "components/composed/ProtectedRoute";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// Userflow
import Login from 'screens/UserFlow/Login/Login'
import Footer from 'components/layout/Footer/Footer'

// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

// import loquesea from "components/units/AsyncButton";

const App = () => {
  const [view, setView] = useState('')
  const [token, setToken] = useState()

  const handleLogin = (token) => {
    setToken(token)
    setView('home')
  }
  return (
    <>
      <Login onLogin={handleLogin} />
      <Footer />
      {/* Userflow */}
      {/* <Route exact path="/login" component={Login} /> */}

      {/* <Route exact path="/registration" component={Registration} /> */}
      {/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}

      {/* Caregiver */}
      {/* <ProtectedRoute exact path="/" component={Home} /> */}
      {/* <ProtectedRoute component={Page404} /> */}
    </>
  )
}

export default App
