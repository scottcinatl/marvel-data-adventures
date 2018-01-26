import React, { Component } from 'react'
import './SearchComicsStyles.css'

class SearchComics extends Component {
  render() {
    console.log(this.props.searchComicQuery)
    return (
      <div className="search-form">
        <div className="search-form-container">
          <input
            className="search-input"
            type="text"
            value={this.props.searchComicQuery}
            onChange={this.props.handleComicChange}
          />
          <button className="send-button" onClick={this.props.handleComicClick}>
            Search Comics By Year
          </button>
        </div>
      </div>
    )
  }
}

export default SearchComics
