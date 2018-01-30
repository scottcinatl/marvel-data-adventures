import React, { Component } from 'react'
import './SearchHeroesStyles.css'

import SearchHeroesResultItem from './SearchHeroesResultItem'
import deadpoolImage from '../images/deadpool-waiting.png'

class SearchHeroesResults extends Component {
  render() {
    if (this.props.loading)
      return (
        <div className="loading-container">
          <div className="loading-wrapper">
            <div className="loading-text">
              LOADING HEROES WITH {this.props.searchHeroQuery}
              <span className="dot-one"> .</span>
              <span className="dot-two"> .</span>
              <span className="dot-three"> .</span>
            </div>
            <img className="loading-deadpool" alt="deadpool-loading" src={deadpoolImage} />
          </div>
        </div>
      )

    return (
      <div>
        <ul className="cards">
          {this.props.heroResultsList.map((hero, index) => <SearchHeroesResultItem hero={hero} key={index} />)}
        </ul>
      </div>
    )
  }
}

export default SearchHeroesResults
