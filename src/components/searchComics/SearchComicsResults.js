import React, { Component } from 'react'
import './SearchComicsStyles.css'

import SearchComicsResultItem from './SearchComicsResultItem'

class SearchComicsResults extends Component {
  render() {
    console.log('this.props.comicResultsList: ', this.props.comicResultsList)
    return (
      <div>
        <ul className="cards">
          {this.props.comicResultsList.map((comic, index) => <SearchComicsResultItem comic={comic} key={index} />)}
        </ul>
      </div>
    )
  }
}

export default SearchComicsResults
