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
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import LinkIcon from '@material-ui/icons/Link'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

/**
 * The Styles for the `ComicCard` component.
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
 * Renders the `ComicCard` component.
 */
class ComicCard extends React.Component {
  state = { expanded: false }

  /**
   * Handles the state change that toggles the expanded card.
   */
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, comicLink, comicSeries, description, image, issueNumber, title } = this.props

    const comicSeriesText = `Series: ${comicSeries}`

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {issueNumber}
            </Avatar>
          }
          title={title}
        />
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography component="p">{comicSeriesText}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Learn More" href={comicLink}>
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
 * The PropTypes for the `ComicCard` component.
 */
ComicCard.propTypes = {
  classes: PropTypes.object.isRequired,
  comicLink: PropTypes.string.isRequired,
  comicSeries: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  issueNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

/**
 * Renders the `ComicCard` component.
 */
export default withStyles(styles)(ComicCard)
