import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Mycomments from './mycomments';
import Favorites from './favorites';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/mycomments" component={Mycomments} />
      <Route path="/favorites" component={Favorites} />
    </Router>
  );
};
export default Pages;
