import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import About from './pages/About';
import Card from './components/Card';
import Work from './pages/Work';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Card} />
      <Route path="about" component={About} />
      <Route path="work" component={Work} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
