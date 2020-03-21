import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';

const Root = (props) => (
  <Router>
      <Route path='/'>
          <App/>
      </Route>
  </Router>
);

export default hot(Root);
