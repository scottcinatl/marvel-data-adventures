import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>View Source Code</h2>
        <a href="https://developer.marvel.com/">
          <h1>Data provided by Marvel. © 2014 Marvel</h1>
        </a>
      </div>
    )
  }
}

export default Footer
