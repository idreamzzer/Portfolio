import React from 'react'
import tinycolor from 'tinycolor2'
import Radium from 'radium'

import Profile from './Profile'
import About from './About'

import '../assets/sass/card.sass'



class Card extends React.Component {
  render() {
    let color = this.props.color

    let styles = {
      card: {
        boxShadow: `0px 0px 200px ${tinycolor(color).darken(25).toString()}`
      },
      sideLeft: {
        background: tinycolor(color).darken(3).toString()
      }
    }

    return (<div className="card" style={styles.card}>

      <div className="card__side card__side--left" style={styles.sideLeft}>
        <Profile color={this.props.color} avatar={this.props.avatar} />
      </div>

      <div className="card__side card__side--right">
        <About color={this.props.color} />
      </div>

    </div>)
  }
}

export default Radium(Card)
