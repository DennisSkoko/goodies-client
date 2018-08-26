import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navbar from './components/Navbar'

const links = [
  { title: 'Browse' },
  { title: 'Sign in' }
]

const App = () => (
  <CssBaseline>
    <Navbar links={links} />
  </CssBaseline>
)

export default App
