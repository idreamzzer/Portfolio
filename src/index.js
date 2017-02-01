import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';
import Project from './pages/Project';
import Work from './pages/Work';
import Card from './components/Card';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Card} />
      <Route path="about" component={About} />
      <Route path="work" component={Work} />
      <Route path="work/project/:projectId" component={Project} />
      <Route path="contact" component={Contact} />
      <Route path="todo" component={Todo} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
