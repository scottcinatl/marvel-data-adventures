import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

/**
 * The Styles for the `BannerImage` component.
 */
const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    background: {
      color: 'white',
      image: 'url("./images/marvel-banner-image.jpg")',
      repeat: 'no-repeat',
      position: 'contain',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  titleText: {
    fontFamily: 'Bangers, cursive',
    letterSpacing: '1px',
    color: theme.palette.primary.main,
  },
})

/**
 * Renders the `BannerImage` component.
 */
const BannerImage = ({ classes, searchComics, searchHeroes, showComics }) => (
  <div style={{ marginTop: '3rem' }}>
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography className={classes.titleText} variant="display3" align="center" color="textPrimary" gutterBottom>
          Search the Marvel Universe
        </Typography>
        <Typography variant="title" align="center" color="textSecondary" paragraph>
          The entire Marvel Universe is now at the tip of your fingers! You can choose to search Marvel's database by
          comic or hero.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button variant={showComics ? 'outlined' : 'contained'} color="primary" onClick={searchHeroes}>
                Search Heroes
              </Button>
            </Grid>
            <Grid item>
              <Button variant={showComics ? 'contained' : 'outlined'} color="primary" onClick={searchComics}>
                Search Comics
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </div>
)

/**
 * Renders the `BannerImage` component.
 */
export default withStyles(styles)(BannerImage)
