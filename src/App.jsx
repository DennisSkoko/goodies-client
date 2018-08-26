import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navbar from './components/Navbar'
import Outlet from './routing/Outlet'
import Router from './routing/Router'

const links = [
  {
    title: 'Browse',
    to: '/browse'
  },
  {
    title: 'Sign in',
    to: '/sign-in'
  }
]

const App = () => (
  <Router>
    <CssBaseline>
      <Navbar links={links} />
      <Outlet />
    </CssBaseline>
  </Router>
)

export default App
