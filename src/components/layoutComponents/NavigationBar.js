import React, { Component } from 'react'

import './NavigationBar.css'
import marvelAdventuresLogo from './images/marvel-adventures-logo.png'

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <img className="navigation-logo" alt="Marvel-Data-Logo" src={marvelAdventuresLogo} />
      </div>
    )
  }
}

export default NavigationBar
