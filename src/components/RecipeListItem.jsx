import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 2}px 0`,
    padding: '12px'
  }
})

const RecipeListItem = ({ classes, recipe }) => (
  <Paper className={classes.root}>
    <Typography>{recipe.name}</Typography>
  </Paper>
)

RecipeListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default withStyles(styles)(RecipeListItem)
