import React from 'react';
import { Link } from 'react-router'
import tinycolor from 'tinycolor2'
import Radium from 'radium'

import '../assets/sass/navigation.sass'

const NAVITEMS = [
  {link: 'about', text: 'Обо мне'},
  {link: 'work', text: 'Мои работы'},
  {link: 'contact', text: 'Контакты'}
]

class CardNav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isHover: false
    }
  }

  render() {

    let color = this.props.color

    let styles = {
      linkText: {
        color: tinycolor(color).darken(30).toString(),
        ':hover': {
          color: '#fff'
        }
      },
      linkEffect: {
        background: tinycolor(color).darken(3).toString()
      }
    }

    let renderItems = NAVITEMS.map((item, i) => {
      return <Link to={item.link} key={i} className="card-nav__link" style={styles.link} >
        <div className="card-nav__link-effect"><span className="card-nav__link-effect--top" style={styles.linkEffect}></span><span className="card-nav__link-effect--bottom" style={styles.linkEffect}></span></div>
        <span key={i} className="card-nav__link-text" style={styles.linkText}>{item.text}</span>
      </Link>
    })

    return (
      <nav className="card-nav">
        {renderItems}
      </nav>
    );
  }

}

export default Radium(CardNav);
