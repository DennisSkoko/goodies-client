import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    maxWidth: '500px',
    margin: '0 auto'
  }
}

const ErrorDisplay = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant='display3' align='center' gutterBottom>
      Ops!
    </Typography>
    <Typography>
      An error occurred when trying to fulfill the request. Please try again
      or report this issue to us by contacting us.
    </Typography>
  </div>
)

ErrorDisplay.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ErrorDisplay)
