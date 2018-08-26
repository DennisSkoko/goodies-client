import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Browse from '../views/Browse'
import SignIn from '../views/SignIn'
import Welcome from '../views/Welcome'

const Outlet = () => (
  <Switch>
    <Route path='/' exact component={Welcome} />
    <Route path='/browse' component={Browse} />
    <Route path='/sign-in' exact component={SignIn} />
  </Switch>
)

export default Outlet
