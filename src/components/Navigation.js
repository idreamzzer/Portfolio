import React from 'react';
import { Link, IndexLink } from 'react-router'
import CSSTransition from 'react-addons-css-transition-group'

import '../assets/sass/navigation.sass'

const LINKS = [
  {
    to: '/about',
    text: 'Обо мне'
  },
  {
    to: '/work',
    text: 'Мои работы'
  },
  {
    to: '/contact',
    text: 'Контакты'
  },
  {
    to: '/todo',
    text: 'TODO'
  }
]

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isNavActive: true
    }
  }

  handlerNavigation() {
    if (this.state.isNavActive) {
      this.setState({isNavActive: false})
    } else {
      this.setState({isNavActive: true})
    }
  }

  render() {

    let isNavActive = (this.state.isNavActive) ? '' : 'navigation--active'

    let renderItems = LINKS.map((link, i) => {
      return <li key={i} className="navigation__item">
              <Link to={link.to} className="navigation__link" activeClassName="navigation__link--active">{link.text}</Link>
              <div className="navigation__overlay"></div>
            </li>
    })

    return (
      <header className="header">
        <nav className={`navigation box header__navigation ${isNavActive}`}>
          <CSSTransition
            component="ul"
            className="navigation__list"
            transitionName="transition"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppear={true}
            transitionAppearTimeout={1000}>
            <li className="navigation__item">
              <IndexLink to="/" className="navigation__link" activeClassName="navigation__link--active">Главная</IndexLink>
              <div className="navigation__overlay"></div>
            </li>

            {renderItems}
          </CSSTransition>
        </nav>

        <div className="header__handler-navigation box" onClick={this.handlerNavigation.bind(this)}>x</div>
      </header>

    );
  }

}

Navigation.contextTypes = {
  color: React.PropTypes.string
}

export default Navigation;
