import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Form'

const FormInput = ({ name, component: Component, ...props }) => (
  <Consumer>
    {({ handleFieldChange, fields }) => (
      <Component
        {...props}
        onChange={handleFieldChange}
        name={name}
        error={!fields[name].valid && fields[name].touched}
      />
    )}
  </Consumer>
)

FormInput.proptypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired
}

export default FormInput
