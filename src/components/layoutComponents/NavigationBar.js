import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

/**
 * The Styles for the `NavigationBar` component.
 */
const styles = {
  root: {
    flexGrow: 1,
  },
  text: {
    fontFamily: 'Bangers, cursive',
    letterSpacing: '2px',
  },
}

/**
 * Renders the `NavigationBar` component.
 */
const NavigationBar = ({ classes, props }) => {
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography className={classes.text} variant="headline" color="inherit">
            Marvel Data Adventures
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

/**
 * The PropTypes for the `BannerImage` component.
 */
NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

/**
 * Renders the `NavigationBar` component.
 */
export default withStyles(styles)(NavigationBar)
