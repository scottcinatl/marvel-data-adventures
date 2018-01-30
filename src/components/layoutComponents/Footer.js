import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="#search-form">
          <h3>Back To Search</h3>
        </a>
        <h2>View Source Code</h2>
        <a href="https://developer.marvel.com/" target="_blank" rel="noopener noreferrer">
          <h1>Data provided by Marvel. © 2014 Marvel</h1>
        </a>
      </div>
    )
  }
}

export default Footer
