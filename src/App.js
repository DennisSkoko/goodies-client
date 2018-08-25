import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const App = ({ classes }) => (
  <CssBaseline>
    <Typography className={classes.title} variant='display4'>
      Goodies
    </Typography>
  </CssBaseline>
)

const styles = {
  title: {
    textAlign: 'center'
  }
}

export default withStyles(styles)(App)
