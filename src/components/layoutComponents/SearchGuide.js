import React, { Component } from 'react'

import './SearchGuide.css'

class SearchGuide extends Component {
  render() {
    return (
      <div className="comic-strip-container">
        <h1>A Marvel Search Guide</h1>
        <article class="comic-strip">
          <div class="panel">
            <p class="text top-left">Search Marvel's Database...</p>
            <p class="text bottom-right">...For Heroes or Comic Books!</p>
          </div>
          <div class="panel">
            <p class="text top-left">Make Sure To Follow Directions...</p>
            <p class="text bottom-right">...Or Your Search Results Will End in Tragedy!</p>
          </div>

          <div class="panel">
            <p class="text bottom-right">Good Luck!</p>
          </div>
        </article>
      </div>
    )
  }
}

export default SearchGuide
