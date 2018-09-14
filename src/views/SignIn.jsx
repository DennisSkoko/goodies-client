import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import SignInForm from '../components/SignInForm'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8
  },

  form: {
    maxWidth: '600px',
    margin: '0 auto'
  }
})

const SignIn = ({ classes }) => (
  <div className={classes.root}>
    <Typography align='center' variant='display2'>SignIn</Typography>
    <SignInForm className={classes.form} />
  </div>
)

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignIn)
