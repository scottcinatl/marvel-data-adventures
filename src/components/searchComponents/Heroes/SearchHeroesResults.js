import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import deadpoolImage from '../../../assets/deadpool-waiting.png'
import thanosImage from '../../../assets/thanos-failed.png'
import HeroCard from './HeroCard'
import './SearchHeroesStyles.css'

/**
 * The Styles for the `SearchHeroesResults` component.
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
 * Renders the `SearchHeroesResults` component.
 */
const SearchHeroesResults = ({ classes, heroResultsList, loading, searchHeroQuery, searchHeroes }) => {
  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-wrapper">
          <div className="loading-text">
            LOADING HEROES WITH {searchHeroQuery}
            <span className="dot-one"> .</span>
            <span className="dot-two"> .</span>
            <span className="dot-three"> .</span>
          </div>
          <img className="loading-deadpool" alt="deadpool-loading" src={deadpoolImage} />
        </div>
      </div>
    )

  const heroList = heroResultsList
  if (heroList.length === 0) {
    return (
      <div className="loading-container">
        <div className="loading-wrapper">
          <div className="loading-text">{searchHeroQuery} IS AN INVALID ENTRY, TRY A NEW SEARCH!</div>
          <img className="loading-thanos" alt="thanos-failed" src={thanosImage} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <ul className="cards">
        {heroResultsList.map((hero, index) => (
          <li className={classes.cardItem} key={hero.id}>
            <HeroCard
              appearences={hero.comics.available}
              description={hero.description}
              heroLink={hero.urls[0].url}
              image={hero.thumbnail.path + '/portrait_uncanny.' + hero.thumbnail.extension}
              name={hero.name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Renders the `SearchHeroesResults` component.
 */
export default withStyles(styles)(SearchHeroesResults)
