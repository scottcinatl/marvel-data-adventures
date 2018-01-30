import React, { Component } from 'react'

import './SearchGuide.css'

import avengersIcon from './images/avengers-icon.png'

class SearchGuide extends Component {
  render() {
    return (
      <div className="search-guide-container">
        <div className="comic-strip-container">
          <h1>A Marvel Search Guide</h1>
          <article className="comic-strip">
            <div className="panel starLord">
              <p className="text top-left">Search Marvel's Database...</p>
              <p className="text bottom-right">...For Heroes or Comic Books!</p>
            </div>
            <div className="panel thanos">
              <p className="text top-left">Make Sure To Follow Directions...</p>
              <p className="text bottom-right">...Or Your Search Results Will End in Tragedy!</p>
            </div>

            <div className="panel">
              <p className="text bottom-right">Good Luck!</p>
            </div>
          </article>
        </div>
        <div className="search-instructions-container">
          <div className="search-instructions">
            <div className="search-left">
              <img className="avengers-icon" alt="avengers-icon" src={avengersIcon} />
            </div>
            <div className="search-right">
              <h4 className="search-instructions-title">Search Instructions</h4>
              <div className="search-instructions-content">
                <div>
                  <span>Searching For Heroes:</span>
                  <p>
                    Click on the Heroes button to search Marvel's Database of Heroes by their full name or a single
                    letter.
                  </p>
                </div>
                <div>
                  <span>Searching For Comics:</span>
                  <p>Click on the Comics button to search Marvel's Database for a list of comics by publishing year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchGuide
