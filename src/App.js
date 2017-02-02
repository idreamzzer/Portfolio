import React, { Component } from 'react';
import tinycolor from 'tinycolor2'
import CSSTransition from 'react-addons-css-transition-group'

import detectMobile from './helpers/detectMobile'

import Particles from 'react-particles-js'
import particlesConfig from './assets/particlesjs-config.json'

import ColorPicker from './components/ColorPicker'
import Navigation from './components/Navigation'
import Overlay from './components/Overlay'

import './assets/sass/main.sass'
import 'bootstrap-grid-only/bootstrap.css'

import AVATAR from './assets/img/avatar.jpg'

const COLORS = ['#9FE29F', '#A1E2E3', '#E4A4BA']


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: COLORS[1],
      isMobile: false,
      isParticlesEnabled: true
    }
  }

  getChildContext() {
    return {color: this.state.color};
  }

  componentWillMount() {
    let isMobile = detectMobile()
    if (isMobile) {
      this.setState({isMobile: true})
    }
  }

  componentDidMount() {

    if (localStorage.getItem('color')) {
      this.setState({color: localStorage.getItem('color')})
    }

    if (!localStorage.getItem('visited')) {
      let loader = document.querySelector('#loader')
      setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
          loader.style.display = 'none'
        }, 400)
      }, 1500)

      localStorage.setItem('visited', 'true')
    }
  }

  handlerParticles() {
    (this.state.isParticlesEnabled)
    ? this.setState({isParticlesEnabled: false})
    : this.setState({isParticlesEnabled: true})
  }

  onChangeColor(color) {
    this.setState({color})
    localStorage.setItem('color', color)
  }

  render() {
    let isMobile = this.state.isMobile
    let color = this.state.color

    let styles = {
      particles: {
        background: `linear-gradient(to top right, ${tinycolor(color).darken(10).toString()}, ${tinycolor(color).lighten(10).toString()})`
      }
    }

    let children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        color: color,
        avatar: AVATAR,
        isMobile: isMobile,
        key: location.pathname
      })
    })

    let renderParticles = () => {
      if (!this.state.isMobile) {

        if (this.state.isParticlesEnabled) {
          return <Particles params={particlesConfig} />
        }
        return null

      }
      return null
    }

    let renderNavigation = (location.pathname !== '/') ? <Navigation /> : null

    return (
      <div className="App">

        <div className="main">

          <Overlay />

          <CSSTransition
            component="div"
            className="particles"
            transitionName="transition-particles"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={700}>
            <div id="particles-js" style={styles.particles}>
              {renderParticles()}
            </div>
          </CSSTransition>

          <ColorPicker defaultcolors={COLORS} color={color} onChangeColor={this.onChangeColor.bind(this)} handlerParticles={this.handlerParticles.bind(this)} isParticlesEnabled={this.state.isParticlesEnabled} />

          {renderNavigation}

          <CSSTransition
            component="div"
            className="content"
            transitionName="transition"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppear={true}
            transitionAppearTimeout={1200}>

            {children}
          </CSSTransition>

        </div>

      </div>
    );
  }
}

App.childContextTypes = {
  color: React.PropTypes.string
}

export default App;
