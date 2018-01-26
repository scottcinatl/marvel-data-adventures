import React, { Component } from 'react'
import './App.css'

import comicsSearchButton from './comics-search-button.png'
import heroesSearchButton from './heroes-search-button.png'

import NavigationBar from './components/layoutComponents/NavigationBar'
import BannerImage from './components/layoutComponents/BannerImage'
import SearchGuide from './components/layoutComponents/SearchGuide'

import SearchHeroes from './components/searchHeroes/SearchHeroes'
import SearchHeroesResults from './components/searchHeroes/SearchHeroesResults'

import SearchComics from './components/searchComics/SearchComics'
import SearchComicsResults from './components/searchComics/SearchComicsResults'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchHeroQuery: 'V',
      heroResultsList: [],
      searchComicQuery: '2008',
      comicResultsList: [],
      hideSearchHeroesForm: true,
      hideSearchComicsForm: true,
    }

    this.handleHeroChange = this.handleHeroChange.bind(this)
    this.handleHeroClick = this.handleHeroClick.bind(this)

    this.handleComicChange = this.handleComicChange.bind(this)
    this.handleComicClick = this.handleComicClick.bind(this)
  }

  handleHeroClick() {
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
    this.setState({ hideSearchHeroesForm: !this.state.hideSearchHeroesForm })
  }

  toggleSearchComics() {
    this.setState({ hideSearchComicsForm: !this.state.hideSearchComicsForm })
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

        <img src={heroesSearchButton} onClick={this.toggleSearchHeroes.bind(this)} className="search-images" />
        {!this.state.hideSearchHeroesForm && (
          <div>
            <SearchHeroes
              searchHeroQuery={this.state.searchHeroQuery}
              handleHeroChange={this.handleHeroChange}
              handleHeroClick={this.handleHeroClick}
            />
            <SearchHeroesResults heroResultsList={this.state.heroResultsList} />
          </div>
        )}
        <img src={comicsSearchButton} onClick={this.toggleSearchComics.bind(this)} className="search-images" />
        {!this.state.hideSearchComicsForm && (
          <div>
            <SearchComics
              searchComicQuery={this.state.searchComicQuery}
              handleComicChange={this.handleComicChange}
              handleComicClick={this.handleComicClick}
            />
            <SearchComicsResults comicResultsList={this.state.comicResultsList} />
          </div>
        )}
      </div>
    )
  }
}

export default App
