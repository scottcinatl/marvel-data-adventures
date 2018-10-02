import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import deadpoolImage from '../assets/deadpool-waiting.png'
import thanosImage from '../assets/thanos-failed.png'
import ComicCard from './ComicCard'
import './SearchComicsStyles.css'

/**
 * The Styles for the `SearchComicsResults` component.
 */
const styles = theme => ({
  cards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  cardItem: {
    display: 'flex',
    padding: '1rem',
  },
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
  loadingContainer: {
    marginTop: '50px',
  },
  titleText: {
    fontFamily: 'Bangers, cursive',
    letterSpacing: '1px',
    color: theme.palette.primary.main,
  },
})

/**
 * Renders the `SearchComicsResults` component.
 */
const SearchComicsResults = ({ classes, comicResultsList, loading, searchComics, searchComicQuery, searchHeroes }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-wrapper">
          <div className="loading-text">
            LOADING COMICS FROM {searchComicQuery}
            <span className="dot-one"> .</span>
            <span className="dot-two"> .</span>
            <span className="dot-three"> .</span>
          </div>
          <img className="loading-deadpool" alt="deadpool-loading" src={deadpoolImage} />
        </div>
      </div>
    )
  }

  const comicList = comicResultsList
  if (comicList.length === 0) {
    return (
      <div className="loading-container">
        <div className="loading-wrapper">
          <div className="loading-text">{searchComicQuery} IS AN INVALID ENTRY, TRY A NEW SEARCH!</div>
          <img className="loading-thanos" alt="thanos-failed" src={thanosImage} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <ul className={classes.cards}>
        {comicResultsList.map((comic, index) => (
          <li className={classes.cardItem} key={comic.id}>
            {comic.description != null && (
              <ComicCard
                comicLink={comic.urls[0].url}
                comicSeries={comic.series.name}
                description={comic.description}
                image={comic.thumbnail.path + '/portrait_uncanny.' + comic.thumbnail.extension}
                issueNumber={comic.issueNumber}
                title={comic.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Renders the `SearchComicsResults` component.
 */
export default withStyles(styles)(SearchComicsResults)
