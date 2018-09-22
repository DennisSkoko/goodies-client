import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import RecipeListItem from './RecipeListItem'

const RecipeList = ({ recipes }) => (
  <Fragment>
    {recipes.map(recipe => (
      <RecipeListItem key={recipe.id} recipe={recipe} />
    ))}
  </Fragment>
)

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    RecipeListItem.Naked.propTypes.recipe
  ).isRequired
}

export default RecipeList
