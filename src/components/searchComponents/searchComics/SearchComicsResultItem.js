import React, { Component } from 'react'

import './SearchComicsStyles.css'

class SearchComicsResultItem extends Component {
  render() {
    return (
      <div>
        <li className="cards__item" key={this.props.key}>
          <div className="card-comics">
            <img
              className="card__image"
              alt={this.props.comic.name}
              src={this.props.comic.thumbnail.path + '/portrait_uncanny.' + this.props.comic.thumbnail.extension}
            />
            <div className="card__content">
              <h2 className="card__title">Title: {this.props.comic.title}</h2>
              <h3 className="card__text">Series: {this.props.comic.series.name}</h3>
              <p className="card__text">Issue Number: {this.props.comic.issueNumber}</p>
              <a className="card__text" href={this.props.comic.urls[0].url} target="_blank">
                Click To Learn More About: {this.props.comic.title}
              </a>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default SearchComicsResultItem
