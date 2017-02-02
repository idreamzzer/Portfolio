import React from 'react';
import ColorPickerLine from 'react-color-picker'
import tinycolor from 'tinycolor2'
import Radium from 'radium'

import '../assets/sass/color-picker.sass'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ColorPicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showPalette: false
    }
  }



  togglePalette(e) {
    let showPalette = (this.state.showPalette) ? false : true
    this.setState({showPalette})
  }

  onDrag(color, c) {
    this.props.onChangeColor(color)
  }

  changeColor(color) {
    this.props.onChangeColor(color)
  }

  handlerParticles(e) {
    this.props.handlerParticles(e.target.checked)
  }

  render() {
    let color = this.props.color

    let styles = {
      commonColors: {
        background: `linear-gradient(to bottom, ${tinycolor(color).darken(2).toString()}, transparent)`
      },
      icon: {
        color: tinycolor(color).darken(40).toString(),
        ':hover': {
          color: tinycolor(color).darken(20).toString()
        },
        ':active': {
          color: tinycolor(color).darken(50).toString()
        }
      },
      text: {
        color: tinycolor(color).darken(40).toString()
      }
    }

    let colorPalette = (this.state.showPalette) ?
      <div className="color-picker__palette">
        <div className="color-picker__palette-group box">
          <ColorPickerLine value={color} onDrag={this.onDrag.bind(this)} className="color-picker__palette-line" />

        </div>

        <div className="color-picker__handler-particles-group box">
          <input type="checkbox" id="handlerParticles" className="color-picker__handler-particles" onChange={this.handlerParticles.bind(this)} checked={this.props.isParticlesEnabled} />
          <label htmlFor="handlerParticles" className="color-picker__handler-particles-label">Анимация частиц {this.props.isParticlesEnabled ? 'включена' : 'выключена'}</label>
        </div>
      </div>
      : null

    return (
      <ReactCSSTransitionGroup
        component="div"
        className="color-picker"
        transitionName="transition"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}
        transitionAppearTimeout={1000}>
          <div className="color-picker__handler" onClick={this.togglePalette.bind(this)}>
            <button className="color-picker__button"><i className="fa fa-paint-brush" style={styles.icon} aria-hidden="true"></i></button>
          </div>

          <ReactCSSTransitionGroup
            component="div"
            className="color-picker__palette-transition"
            transitionName="palette-transition"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {colorPalette}
          </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>

    );
  }

}

export default Radium(ColorPicker);
