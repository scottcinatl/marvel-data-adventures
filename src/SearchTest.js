import React, { Component } from 'react'

class SearchHeroes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      heroList: [],
      searchEntry: 'a',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  fetchData(searchEntry) {
    fetch(
      'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' +
        searchEntry +
        '&limit=100&apikey=d0d94d675d2eb3ab553dfef27e495567',
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
          this.setState({
            heroResult: data,
          })
        },
        () => {
          this.setState({
            requestFailed: true,
          })
        },
      )
  }

  componentDidMount() {
    let searchEntry = this.state.searchEntry
    this.fetchData(searchEntry)
  }

  handleChange(event) {
    this.setState({ searchEntry: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.fetchData()
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.heroResult) return <p>Loading...</p>

    const heroList = this.state.heroResult.data.results

    return (
      <div>
        <div>
          <form>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" onSubmit={() => this.handleSubmit()} />
          </form>
          {console.log('Search Entry: ' + this.state.searchEntry)}
        </div>
        <div>
          {heroList.map(hero => (
            <div key={hero.name}>
              <h4>{hero.name}</h4>
              <img alt={hero.name} src={hero.thumbnail.path + '/portrait_uncanny.' + hero.thumbnail.extension} />
              <p style={{ fontStyle: 'italic' }}>Comics Available: {hero.comics.available}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SearchHeroes
