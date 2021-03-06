import React from 'react';
import { Link, IndexLink } from 'react-router'
import CSSTransition from 'react-addons-css-transition-group'

import '../assets/sass/navigation.sass'

import LINKS from '../data/LINKS'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isNavActive: true
    }

    this.onHover = this.onHover.bind(this)
    this.onLeave = this.onLeave.bind(this)
  }

  handlerNavigation() {
    if (this.state.isNavActive) {
      this.setState({isNavActive: false})
    } else {
      this.setState({isNavActive: true})
    }
  }

  onHover(e) {
    e.currentTarget.children[1].classList.add('navigation__overlay--active')
  }
  onLeave(e) {
    e.currentTarget.children[1].classList.remove('navigation__overlay--active')
  }

  render() {

    let color = this.context.color

    let isNavActive = (this.state.isNavActive) ? '' : 'navigation--active'

    let renderItems = LINKS.map((link, i) => {
      return <li key={i} className="navigation__item" onMouseOver={this.onHover} onMouseLeave={this.onLeave}>
              <Link to={link.to} className="navigation__link" activeClassName="navigation__link--active">{link.text}</Link>
              <div className="navigation__overlay" style={{background: color}}></div>
            </li>
    })

    return (
      <CSSTransition
        component="header"
        className="header"
        transitionName="transition"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}
        transitionAppearTimeout={1000}>

        <nav className={`navigation box header__navigation ${isNavActive}`}>
          <CSSTransition
            component="ul"
            className="navigation__list"
            transitionName="transition"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppear={true}
            transitionAppearTimeout={400}>
            <li className="navigation__item" onMouseOver={this.onHover} onMouseLeave={this.onLeave}>
              <IndexLink to="/" className="navigation__link" activeClassName="navigation__link--active">Главная</IndexLink>
              <div className="navigation__overlay" style={{background: color}}></div>
            </li>

            {renderItems}
          </CSSTransition>
        </nav>

        <div className="header__handler-navigation box" onClick={this.handlerNavigation.bind(this)}>x</div>
      </CSSTransition>

    );
  }

}

Navigation.contextTypes = {
  color: React.PropTypes.string
}

export default Navigation;
