import React, { Component } from 'react';
import tinycolor from 'tinycolor2'
import CSSTransition from 'react-addons-css-transition-group'

import detectMobile from './helpers/detectMobile'

import Particles from 'react-particles-js'
import particlesConfig from './assets/particlesjs-config.json'

import ColorPicker from './components/ColorPicker'
import Navigation from './components/Navigation'

import './assets/sass/main.sass'
import 'bootstrap-grid/dist/grid.min.css'

import AVATAR from './assets/img/avatar.jpg'

const SOCIALS = [
  {href: 'https://twitter.com/idreamzzer', className: 'twitter'},
  {href: 'https://vk.com/dreamzzer', className: 'vk'},
  {href: 'https://github.com/idreamzzer', className: 'github'},
  {href: 'mailto:idreamzzer@gmail.com', className: 'envelope-o'}
]

const COLORS = ['#9FE29F', '#A1E2E3', '#E4A4BA']


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: COLORS[1],
      isMobile: false
    }
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

  }

  onChangeColor(color) {
    this.setState({color})
    localStorage.setItem('color', color)
  }

  render() {
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
        socials: SOCIALS,
        key: location.pathname
      })
    })

    let renderParticles = (!this.state.isMobile) ? <Particles params={particlesConfig} /> : null

    let renderNavigation = (location.pathname !== '/') ? <Navigation /> : null

    return (
      <div className="App">

        <div className="main">

          <div id="particles-js" style={styles.particles}>
            {renderParticles}
          </div>
          <ColorPicker defaultcolors={COLORS} color={color} onChangeColor={this.onChangeColor.bind(this)} />

          {renderNavigation}

          <CSSTransition
            component="div"
            className="content"
            transitionName="transition"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppear={true}
            transitionAppearTimeout={1000}>

            {children}
          </CSSTransition>

        </div>

      </div>
    );
  }
}

export default App;
