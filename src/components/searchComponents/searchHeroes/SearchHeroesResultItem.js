import React, { Component } from 'react'

import './SearchHeroesStyles.css'

class SearchHeroesResultItem extends Component {
  render() {
    console.log(this.props.hero)
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
              <a className="card__text" href={this.props.hero.urls[0].url} target="_blank">
                Click To Learn More About: {this.props.hero.name}
              </a>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default SearchHeroesResultItem
