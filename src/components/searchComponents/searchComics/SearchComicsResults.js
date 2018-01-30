import React, { Component } from 'react'

import SearchComicsResultItem from './SearchComicsResultItem'

import deadpoolImage from '../images/deadpool-waiting.png'
import thanosImage from '../images/thanos-failed.png'

import './SearchComicsStyles.css'

class SearchComicsResults extends Component {
  render() {
    if (this.props.loading)
      return (
        <div className="loading-container">
          <div className="loading-wrapper">
            <div className="loading-text">
              LOADING COMICS FROM {this.props.searchComicQuery}
              <span className="dot-one"> .</span>
              <span className="dot-two"> .</span>
              <span className="dot-three"> .</span>
            </div>
            <img className="loading-deadpool" alt="deadpool-loading" src={deadpoolImage} />
          </div>
        </div>
      )

    const comicList = this.props.comicResultsList
    if (comicList.length === 0) {
      return (
        <div className="loading-container">
          <div className="loading-wrapper">
            <div className="loading-text">{this.props.searchComicQuery} IS AN INVALID ENTRY, TRY A NEW SEARCH!</div>
            <img className="loading-thanos" alt="thanos-failed" src={thanosImage} />
          </div>
        </div>
      )
    }

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
