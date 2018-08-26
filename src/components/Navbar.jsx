import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const renderLinks = links => links.map(({ title, to }, i) => (
  <Button
    key={i}
    color='inherit'
    component={Link}
    to={to}
  >
    {title}
  </Button>
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
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }))
    .isRequired
}

const styles = {
  title: {
    flexGrow: 1
  }
}

export default withStyles(styles)(Navbar)
