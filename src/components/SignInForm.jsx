import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2
  }
})

class SignInForm extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <TextField
          label='Email'
          margin='normal'
          fullWidth
        />

        <TextField
          type='password'
          label='Password'
          margin='normal'
          fullWidth
        />

        <Button
          className={this.props.classes.button}
          variant='contained'
          color='primary'
          fullWidth
        >
          Sign in
        </Button>
      </div>
    )
  }
}

SignInForm.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignInForm)
