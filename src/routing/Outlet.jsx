import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from '../pages/Loading'
import routes from './routes'

const Outlet = () => (
  <Switch>
    {routes.map(({ component, ...props }, i) => (
      <Route
        key={i}
        {...props}
        component={Loadable({ loading: Loading, loader: component })}
      />
    ))}
  </Switch>
)

export default Outlet
