import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import './SearchComicsStyles.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  margin: {
    maxWidth: 700,
    margin: '0 auto',
    paddingLeft: 100,
    paddingRight: 100,
  },
  textField: {
    color: theme.palette.primary.main,
    fontFamily: 'Bangers, cursive !important',
    fontSize: '1.8em',
    width: '100%',
  },
})

const SearchComics = ({ classes, handleComicChange, handleComicClick, searchComicQuery }) => {
  return (
    <div className={classes.margin}>
      <Grid container alignItems="baseline">
        <Grid className={classes.searchContainer} item xs={12} sm={9}>
          <TextField
            id="standard-full-width"
            fullWidth
            label="Year"
            InputProps={{
              className: classes.textField,
            }}
            onChange={handleComicChange}
            value={searchComicQuery}
          />
        </Grid>
        <Grid className={classes.buttonContainer} item xs={12} sm={3}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleComicClick}>
            Find Comics
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(SearchComics)
