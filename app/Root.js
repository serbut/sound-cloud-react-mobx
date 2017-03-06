import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './components/App';
import Explore from './pages/Explore';
import Search from './pages/Search';
import User from './pages/User/index';
import UserCategory from './pages/User/UserCategory';
import UserAbout from './pages/User/UserAbout';
import Track from './pages/Track';
import Playlist from './pages/Playlist';
import Stream from './pages/Stream';
import Callback from './pages/Callback';


const Root = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App} test='test'>
      <IndexRedirect to='explore'/>
      <Route path='callback' component={Callback} />
      <Route path='stream' component={Stream} />
      <Route path='explore(/:genre)' component={Explore} />
      <Route path='search/:cat' component={Search} />
      <Route path=':user' component={User}>
        <IndexRedirect to='tracks'/>
        <Route path='about' component={UserAbout} />
        <Route path=':cat' component={UserCategory} />
      </Route>
      <Route path=':user/tracks/:track' component={Track} />
      <Route path=':user/playlists/:playlist' component={Playlist} />
    </Route>
  </Router>
);

export default Root;
