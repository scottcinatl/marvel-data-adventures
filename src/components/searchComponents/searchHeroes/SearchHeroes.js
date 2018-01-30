import React, { Component } from 'react'
import './SearchHeroesStyles.css'

class SearchHeroes extends Component {
  render() {
    return (
      <div className="search-form" id="search-form">
        <div className="search-form-container">
          <input
            className="search-input"
            type="text"
            value={this.props.searchHeroQuery}
            onChange={this.props.handleHeroChange}
          />
          <button className="send-button" onClick={this.props.handleHeroClick}>
            Search Heroes
          </button>
        </div>
      </div>
    )
  }
}

export default SearchHeroes
