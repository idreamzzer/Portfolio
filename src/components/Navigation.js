import React from 'react';
import { Link } from 'react-router'

import '../assets/sass/navigation.sass'

class Navigation extends React.Component {

  render() {

    return (
      <nav className="navigation">
        <Link to="/" className="navigation__link" activeClassName="navigation__link--active">Home</Link>
        <Link to="about" className="navigation__link" activeClassName="navigation__link--active">About</Link>
        <Link to="work" className="navigation__link" activeClassName="navigation__link--active">Work</Link>
        <Link to="contact" className="navigation__link" activeClassName="navigation__link--active">Contact</Link>
      </nav>
    );
  }

}

export default Navigation;
