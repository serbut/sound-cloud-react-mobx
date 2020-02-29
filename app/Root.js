import React from 'react';
import {hashHistory, IndexRedirect, Route, Router} from 'react-router';
import App from './components/App';
import Explore from './pages/Explore';
import Search from './pages/Search';
import User from './pages/User';
import UserContent from './pages/UserContent';
import Track from './pages/Track';
import Playlist from './pages/Playlist';
import Stream from './pages/Stream';
import Callback from './pages/Callback';


const Root = (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={App} test='test'>
      <IndexRedirect to='explore'/>
      <Route path='callback' component={Callback} />
      <Route path='stream' component={Stream} />
      <Route path='explore(/:genre)' component={Explore} />
      <Route path='search/:type' component={Search} />
      <Route path=':user' component={User}>
        <Route path=':section' component={UserContent} />
      </Route>
      <Route path=':user/tracks/:track' component={Track} />
      <Route path=':user/playlists/:playlist' component={Playlist} />
    </Route>
  </Router>
);

export default Root;
