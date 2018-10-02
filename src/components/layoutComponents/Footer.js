import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 6,
    '& a': {
      color: '#ffffff',
      textDecoration: 'underline',
    },
  },
})

/**
 * Renders the `Footer` component.
 */
const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <Typography variant="subheading" align="center" gutterBottom>
      <a href="#search-form">Back To Search</a>
    </Typography>
    <Typography variant="subheading" align="center" gutterBottom>
      <a href="https://github.com/scottcinatl/marvel-data-adventures" target="_blank" rel="noopener noreferrer">
        View Source Code
      </a>
    </Typography>
    <Typography variant="subheading" align="center" color="textSecondary" component="p">
      <a href="https://developer.marvel.com/" target="_blank" rel="noopener noreferrer">
        Data provided by Marvel. © 2014 Marvel
      </a>
    </Typography>
  </footer>
)

/**
 * Renders the `Footer` component.
 */
export default withStyles(styles)(Footer)
