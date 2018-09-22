import React from 'react'
import PropTypes from 'prop-types'

import { Consumer } from './Form'

const FormInput = ({ name, component: Component, helperText, ...props }) => (
  <Consumer>
    {({ handleFieldChange, fields }) => {
      const invalid = !fields[name].valid && fields[name].dirty

      return (
        <Component
          {...props}
          onChange={handleFieldChange}
          name={name}
          error={invalid}
          helperText={invalid && helperText ? helperText : ''}
        />
      )
    }}
  </Consumer>
)

FormInput.proptypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  helperText: PropTypes.string
}

export default FormInput
