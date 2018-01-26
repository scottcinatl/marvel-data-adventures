import React, { Component } from 'react'

import './SearchHeroesStyles.css'

class SearchHeroesResultItem extends Component {
  render() {
    return (
      <div>
        <li className="cards__item" key={this.props.key}>
          <div className="card-heroes">
            <img
              className="card__image"
              alt={this.props.hero.name}
              src={this.props.hero.thumbnail.path + '/landscape_incredible.' + this.props.hero.thumbnail.extension}
            />
            <div className="card__content">
              <p className="card__title">{this.props.hero.name}</p>
              <p className="card__text">Comic Appearances: {this.props.hero.comics.available}</p>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default SearchHeroesResultItem
