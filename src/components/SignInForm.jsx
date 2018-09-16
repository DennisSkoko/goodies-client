import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import Form from '../components/Form'
import FormInput from '../components/FormInput'
import rules from '../util/rules'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4
  }
})

class SignInForm extends Component {
  constructor (props) {
    super(props)

    this.validators = {
      email: rules.isEmail(),
      password: rules.isLength({ min: 6 })
    }
  }

  handleSubmit = form => {
    // TODO: implement
  }

  render () {
    return (
      <Form
        className={this.props.className}
        onSubmit={this.handleSubmit}
        validators={this.validators}
      >
        <FormInput
          component={TextField}
          name='email'
          label='Email'
          margin='normal'
          helperText='Must be a valid email address'
          fullWidth
          required
        />

        <FormInput
          component={TextField}
          name='password'
          type='password'
          label='Password'
          margin='normal'
          helperText='Must be atleast 6 characters long'
          fullWidth
          required
        />

        <Button
          className={this.props.classes.button}
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
        >
          Sign in
        </Button>
      </Form>
    )
  }
}

SignInForm.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignInForm)
