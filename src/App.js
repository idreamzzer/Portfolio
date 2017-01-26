import React, { Component } from 'react';
import tinycolor from 'tinycolor2'

import Card from './components/Card'
import ColorPicker from './components/ColorPicker'

import './assets/sass/main.sass'


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
      color: COLORS[1]
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
      main: {
        background: `linear-gradient(to top right, ${color}, ${tinycolor(color).lighten(20).toString()})`
      }
    }

    return (
      <div className="App">

        <div className="main" style={styles.main} >

          <ColorPicker defaultcolors={COLORS} color={color} onChangeColor={this.onChangeColor.bind(this)} />

          <Card color={color} avatar={AVATAR} socials={SOCIALS} />
        </div>

      </div>
    );
  }
}

export default App;
