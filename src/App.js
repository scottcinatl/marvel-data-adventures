import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import './App.css'
import BannerImage from './components/layoutComponents/BannerImage'
import Footer from './components/layoutComponents/Footer'
import NavigationBar from './components/layoutComponents/NavigationBar'
import SearchComics from './components/searchComponents/Comics/SearchComics'
import SearchComicsResults from './components/searchComponents/Comics/SearchComicsResults'
import SearchHeroes from './components/searchComponents/Heroes/SearchHeroes'
import SearchHeroesResults from './components/searchComponents/Heroes/SearchHeroesResults'

/**
 * Custom settings for the Material UI theme.
 * https://material-ui.com/customization/themes/
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
      dark: '#f6685e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      dark: '#00b1ca',
      contrastText: '#f44336',
    },
  },
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchHeroQuery: 'A',
      heroResultsList: [],
      searchComicQuery: '2013',
      comicResultsList: [],
      hideSearchHeroesForm: false,
      hideSearchComicsForm: true,
      loading: true,
    }
  }

  /**
   * Fetches data requested by the user for heroes from the Marvel API.
   */
  handleHeroSearch = () => {
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

  /**
   * Fetches data requested by the user for comics from the Marvel API.
   */
  handleComicSearch = () => {
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

  /**
   * Handles the changes in the `HeroSearch` component form.
   */
  handleHeroChange = event => {
    this.setState({ searchHeroQuery: event.target.value })
  }

  /**
   * Handles the changes in the `ComicSearch` component form.
   */
  handleComicChange = event => {
    this.setState({ searchComicQuery: event.target.value })
  }

  /**
   * Toggles state to show the `HeroSearch` component and results and hide the `ComicSearch` component.
   */
  showHeroesSearch = () => {
    const comicFormState = this.state.hideSearchComicsForm
    if (comicFormState === false) {
      this.setState({
        hideSearchComicsForm: true,
        hideSearchHeroesForm: false,
      })
    }
  }

  /**
   * Toggles state to show the `ComicSearch` component and results and hide the `HeroSearch` component.
   */
  showComicsSearch = () => {
    const heroFormState = this.state.hideSearchHeroesForm
    if (heroFormState === false) {
      this.setState({
        hideSearchHeroesForm: true,
        hideSearchComicsForm: false,
      })
    }
  }

  componentDidMount() {
    this.handleHeroSearch()
    this.handleComicSearch()
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <NavigationBar />
          <BannerImage
            showComics={this.state.hideSearchHeroesForm}
            searchComics={this.showComicsSearch}
            searchHeroes={this.showHeroesSearch}
          />

          {!this.state.hideSearchHeroesForm && (
            <div>
              <SearchHeroes
                searchHeroQuery={this.state.searchHeroQuery}
                handleHeroChange={this.handleHeroChange}
                handleHeroClick={this.handleHeroSearch}
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
                handleComicClick={this.handleComicSearch}
              />
              <SearchComicsResults
                comicResultsList={this.state.comicResultsList}
                searchComicQuery={this.state.searchComicQuery}
                loading={this.state.loading}
              />
            </div>
          )}

          <Footer />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
