import React, { Component } from 'react'

import './NavigationBar.css'
import marvelLogo from './marvel-data-logo.svg'

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <img className="navigation-logo" alt="Marvel-Data-Logo" src={marvelLogo} />
      </div>
    )
  }
}

export default NavigationBar
