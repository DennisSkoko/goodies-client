import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import ErrorDisplay from '../components/ErrorDisplay'
import RecipeList from '../components/RecipeList'

const GET_RECIPES = gql`{
  recipes {
    id
    name
  }
}`

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8
  },

  progress: {
    display: 'block',
    margin: '0 auto'
  }
})

const Browse = ({ classes }) => (
  <div className={classes.root}>
    <Query query={GET_RECIPES}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <CircularProgress
              className={classes.progress}
              size={100}
            />
          )
        }

        if (error) return <ErrorDisplay />

        return <RecipeList recipes={data.recipes} />
      }}
    </Query>
  </div>
)

Browse.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Browse)
