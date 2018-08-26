import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from '../components/Loading'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => import('../views/Welcome')
  },
  {
    path: '/browse',
    component: () => import('../views/Browse')
  },
  {
    path: '/sign-in',
    exact: true,
    component: () => import('../views/SignIn')
  }
]

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
