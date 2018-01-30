import React, { Component } from 'react'
import './App.css'

import comicsSearchButton from './images/comics-search-button.png'
import heroesSearchButton from './images/heroes-search-button.png'

import NavigationBar from './components/layoutComponents/NavigationBar'
import BannerImage from './components/layoutComponents/BannerImage'
import SearchGuide from './components/layoutComponents/SearchGuide'

import SearchHeroes from './components/searchComponents/searchHeroes/SearchHeroes'
import SearchHeroesResults from './components/searchComponents/searchHeroes/SearchHeroesResults'

import SearchComics from './components/searchComponents/searchComics/SearchComics'
import SearchComicsResults from './components/searchComponents/searchComics/SearchComicsResults'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchHeroQuery: 'C',
      heroResultsList: [],
      searchComicQuery: '2013',
      comicResultsList: [],
      hideSearchHeroesForm: true,
      hideSearchComicsForm: false,
      loading: true,
    }

    this.handleHeroChange = this.handleHeroChange.bind(this)
    this.handleHeroClick = this.handleHeroClick.bind(this)

    this.handleComicChange = this.handleComicChange.bind(this)
    this.handleComicClick = this.handleComicClick.bind(this)
  }

  handleHeroClick() {
    this.setState({
      loading: true,
    })
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${
        this.state.searchHeroQuery
      }&limit=100&apikey=d0d94d675d2eb3ab553dfef27e495567`,
    )
      .then(response => {
        if (!response.ok) {
          throw Error('Network request failed')
        }

        return response
      })
      .then(data => data.json())
      .then(
        data => {
          const heroList = data.data.results
          this.setState({
            heroResultsList: heroList,
            loading: false,
          })
        },
        () => {
          this.setState({
            requestFailed: true,
          })
        },
      )
  }

  handleComicClick() {
    this.setState({ loading: true })
    fetch(
      `https://gateway.marvel.com:443/v1/public/comics?startYear=${
        this.state.searchComicQuery
      }&orderBy=-onsaleDate&limit=100&apikey=d0d94d675d2eb3ab553dfef27e495567`,
    )
      .then(response => {
        if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })

      .then(data => data.json())
      .then(
        data => {
          const comicList = data.data.results
          this.setState({
            comicResultsList: comicList,
            loading: false,
          })
        },
        () => {
          this.setState({
            requestFailed: true,
          })
        },
      )
  }

  handleHeroChange(event) {
    this.setState({ searchHeroQuery: event.target.value })
  }

  handleComicChange(event) {
    this.setState({ searchComicQuery: event.target.value })
  }

  toggleSearchHeroes() {
    const comicFormState = this.state.hideSearchComicsForm
    if (comicFormState === false) {
      this.setState({
        hideSearchComicsForm: true,
        hideSearchHeroesForm: false,
      })
    }
  }

  toggleSearchComics() {
    const heroFormState = this.state.hideSearchHeroesForm
    if (heroFormState === false) {
      this.setState({
        hideSearchHeroesForm: true,
        hideSearchComicsForm: false,
      })
    }
  }

  componentDidMount() {
    this.handleHeroClick()
    this.handleComicClick()
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <BannerImage />
        <SearchGuide />

        <img
          alt="hero-search-button"
          src={heroesSearchButton}
          onClick={this.toggleSearchHeroes.bind(this)}
          className="search-images"
        />
        <img
          alt="comic-search-button"
          src={comicsSearchButton}
          onClick={this.toggleSearchComics.bind(this)}
          className="search-images"
        />

        {!this.state.hideSearchHeroesForm && (
          <div>
            <SearchHeroes
              searchHeroQuery={this.state.searchHeroQuery}
              handleHeroChange={this.handleHeroChange}
              handleHeroClick={this.handleHeroClick}
            />
            <SearchHeroesResults
              heroResultsList={this.state.heroResultsList}
              searchHeroQuery={this.state.searchHeroQuery}
              loading={this.state.loading}
            />
          </div>
        )}

        {!this.state.hideSearchComicsForm && (
          <div>
            <SearchComics
              searchComicQuery={this.state.searchComicQuery}
              handleComicChange={this.handleComicChange}
              handleComicClick={this.handleComicClick}
            />
            <SearchComicsResults
              comicResultsList={this.state.comicResultsList}
              searchComicQuery={this.state.searchComicQuery}
              loading={this.state.loading}
            />
          </div>
        )}
      </div>
    )
  }
}

export default App
