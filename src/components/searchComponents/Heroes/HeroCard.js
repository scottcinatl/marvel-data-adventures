import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import LinkIcon from '@material-ui/icons/Link'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

/**
 * The Styles for the `HeroCard` component.
 */
const styles = theme => ({
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    maxWidth: 400,
    minWidth: 400,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    height: 324,
    paddingTop: '56.25%', // 16:9
  },
})

/**
 * Renders the `HeroCard` component.
 */
class HeroCard extends React.Component {
  state = { expanded: false }

  /**
   * Handles the state change that toggles the expanded card.
   */
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { appearences, classes, description, heroLink, image, name } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader title={name} />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography component="p">Comic Appearences: {appearences}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Learn More" href={heroLink}>
            <LinkIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>{description}</CardContent>
        </Collapse>
      </Card>
    )
  }
}

/**
 * The PropTypes for the `HeroCard` component.
 */
HeroCard.propTypes = {
  appearences: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  description: PropTypes.string,
  heroLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

/**
 * Renders the `HeroCard` component.
 */
export default withStyles(styles)(HeroCard)
