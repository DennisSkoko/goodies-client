import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const renderLinks = links => links.map((link, i) => (
  <Button color='inherit' key={i}>{link.title}</Button>
))

const Navbar = ({ classes, links }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography
        className={classes.title}
        variant='title'
        color='inherit'
      >
        Goodies
      </Typography>

      {renderLinks(links)}
    </Toolbar>
  </AppBar>
)

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes
    .arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired
    }))
    .isRequired
}

const styles = {
  title: {
    flexGrow: 1
  }
}

export default withStyles(styles)(Navbar)
