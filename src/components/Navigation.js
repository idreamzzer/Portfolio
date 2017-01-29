import React from 'react';
import { Link } from 'react-router'
import CSSTransition from 'react-addons-css-transition-group'

import '../assets/sass/navigation.sass'

class Navigation extends React.Component {

  render() {

    return (
      <CSSTransition
        component="nav"
        className="navigation"
        transitionName="transition"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}
        transitionAppearTimeout={1000}>
          <Link to="/" className="navigation__link" activeClassName="navigation__link--active">Home</Link>
          <Link to="about" className="navigation__link" activeClassName="navigation__link--active">About</Link>
          <Link to="work" className="navigation__link" activeClassName="navigation__link--active">Work</Link>
          <Link to="contact" className="navigation__link" activeClassName="navigation__link--active">Contact</Link>
      </CSSTransition>

    );
  }

}

export default Navigation;
