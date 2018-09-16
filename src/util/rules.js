import _ from 'lodash/fp'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

export default {
  isEmail: () => _.curry(isEmail)(_, {
    domain_specific_validation: true
  }),

  isLength: options => _.curry(isLength)(_, options)
}
