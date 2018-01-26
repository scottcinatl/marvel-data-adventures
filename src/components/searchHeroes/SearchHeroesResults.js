import React, { Component } from 'react'
import './SearchHeroesStyles.css'

import SearchHeroesResultItem from './SearchHeroesResultItem'

class SearchHeroesResults extends Component {
  render() {
    console.log('this.props.heroResultsList: ', this.props.heroResultsList)
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
