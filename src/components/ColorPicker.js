import React from 'react';
import ColorPickerLine from 'react-color-picker'
import tinycolor from 'tinycolor2'
import Radium from 'radium'

import '../assets/sass/color-picker.sass'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const COLORS = ['#9FE29F', '#A1E2E3', '#E4A4BA']

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
        <ColorPickerLine value={color} onDrag={this.onDrag.bind(this)} className="color-picker__palette-line" />
        <ul className="color-picker__common-colors" style={styles.commonColors}>
          {COLORS.map((clr, i) => {
            return <li key={i} onClick={this.changeColor.bind(this, clr)} className="color-picker__common-color" style={{background: clr, boxShadow: `0px 0px 10px ${tinycolor(color).darken(30).toString()}`}}></li>
          })}
        </ul>
      </div>
      : null

    return (
      <div className="color-picker">
        <div className="color-picker__handler" onClick={this.togglePalette.bind(this)}>
          <button className="color-picker__button"><i className="fa fa-paint-brush" style={styles.icon} aria-hidden="true"></i></button>
          <span className="color-picker__text" style={styles.text}>Выбери свой цвет</span>
        </div>

        <ReactCSSTransitionGroup
          component="div"
          className="color-picker__palette-transition"
          transitionName="palette-transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {colorPalette}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}

export default Radium(ColorPicker);
