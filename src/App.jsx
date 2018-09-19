import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ApolloProvider } from 'react-apollo'

import Navbar from './components/Navbar'
import Outlet from './routing/Outlet'
import Router from './routing/Router'
import ThemeProvider from './style/ThemeProvider'
import client from './lib/graphql'

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
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CssBaseline>
          <Navbar links={links} />
          <Outlet />
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  </Router>
)

export default App
