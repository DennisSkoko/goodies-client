import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash/fp'

const { Provider, Consumer } = React.createContext()

const createFields = _.mapValues(() => ({
  valid: false,
  dirty: false,
  value: ''
}))

const getAllValues = _.mapValues(_.get('value'))

const makeAllFieldsDirty = _.mapValues(field => ({
  ...field,
  dirty: true
}))

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: createFields(props.validators || {})
    }
  }

  areAllFieldsValid () {
    return Object.values(this.state.fields)
      .every(_.get('valid'))
  }

  isFieldValid ({ name, value }) {
    const validator = this.props.validators[name]

    if (!validator) return true

    if (Array.isArray(validator)) {
      return validator.every(fn => fn(value))
    }

    return validator(value)
  }

  handleFieldChange = ({ target: field }) => {
    if (_.has(field.name, this.state.fields)) {
      this.setState(state => ({
        fields: {
          ...state.fields,
          [field.name]: {
            valid: this.isFieldValid(field),
            dirty: true,
            value: field.value
          }
        }
      }))
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()

    if (this.areAllFieldsValid()) {
      this.props.onSubmit(getAllValues(this.state.fields))
    } else {
      this.setState(state => ({
        fields: makeAllFieldsDirty(state.fields)
      }))
    }
  }

  render () {
    return (
      <Provider value={{
        handleFieldChange: this.handleFieldChange,
        fields: this.state.fields
      }}>
        <form
          className={this.props.className}
          onSubmit={this.handleOnSubmit}
          noValidate
        >
          {this.props.children}
        </form>
      </Provider>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  validators: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.func)
    ])
  )
}

export default Form
export { Consumer }
