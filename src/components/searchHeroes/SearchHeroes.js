import React, { Component } from 'react'
import './SearchHeroesStyles.css'

class SearchHeroes extends Component {
  render() {
    console.log(this.props.searchHeroQuery)
    return (
      <div className="search-form">
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
