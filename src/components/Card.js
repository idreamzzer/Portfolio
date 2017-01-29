import React from 'react'
import tinycolor from 'tinycolor2'
import Radium from 'radium'
import CSSTransition from 'react-addons-css-transition-group'

import Profile from './Profile'
import CardNav from './CardNav'

import '../assets/sass/card.sass'



class Card extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOverlayActive: false,
      textOverlay: ''
    }
  }

  handleOverlay(status, text) {
    this.setState({isOverlayActive: status, textOverlay: text})
    setTimeout(() => {
      this.refs.cardLeft.style.display = 'none'
      this.refs.cardRight.style.display = 'none'
    }, 500)
  }

  render() {
    let color = this.props.color

    let styles = {
      card: {
        boxShadow: `0px 0px 100px ${tinycolor(color).lighten(15).toString()}`
      },
      sideLeft: {
        background: tinycolor(color).darken(3).toString()
      },
      overlay: {
        background: tinycolor(color).darken(3).toString()
      }
    }

    let renderOverlay = (this.state.isOverlayActive) ? <div className="card__overlay" style={styles.overlay}>{this.state.textOverlay}</div> : null

    return (<div className="card" ref="card" style={styles.card}>
      <div className="card__wrapper">

        <CSSTransition
          transitionName="transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={700}>
          {renderOverlay}
        </CSSTransition>

        <div ref="cardLeft" className="card__side card__side--left" style={styles.sideLeft}>
          <Profile color={this.props.color} avatar={this.props.avatar} socials={this.props.socials} />
        </div>

        <div ref="cardRight" className="card__side card__side--right">
          <CardNav color={this.props.color} handleOverlay={this.handleOverlay.bind(this)} />
        </div>

      </div>

    </div>)
  }
}

export default Radium(Card)
