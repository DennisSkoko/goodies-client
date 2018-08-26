import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  progress: {
    margin: [[theme.spacing.unit * 8, 'auto', 0]],
    display: 'block'
  }
})

const Loading = ({ classes }) => (
  <CircularProgress className={classes.progress} size={120} />
)

export default withStyles(styles)(Loading)
