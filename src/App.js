import React, { Component } from 'react';
import tinycolor from 'tinycolor2'
import ColorPicker from 'react-color-picker'
import 'react-color-picker/index.css'

import Card from './components/Card'

import './assets/sass/main.sass'

import avatar from './assets/img/avatar.jpg'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: '#99d5e0'
    }
  }

  onDrag(color, c) {
    this.setState({
      color
    })
  }

  render() {
    let color = this.state.color
    return (
      <div className="App">

        <div className="main" style={{background: `linear-gradient(to top right, ${color}, ${tinycolor(color).lighten(20).toString()})`}} >

          <div className="color-picker">
            <ColorPicker value={color} onDrag={this.onDrag.bind(this)} />
          </div>

          <Card color={color} avatar={avatar} />
        </div>

      </div>
    );
  }
}

export default App;
