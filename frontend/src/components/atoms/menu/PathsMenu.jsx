import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Collaborators from '../../../pages/Collaborators/Collaborators'
import Home from '../../../pages/Home/Home'

function PathsMenu() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collaborators" component={Collaborators} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default PathsMenu
