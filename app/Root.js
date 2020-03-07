import React from 'react';
import {hashHistory, IndexRedirect, Route, Router} from 'react-router';
import App from './App';
import Explore from './pages/Explore';
import Search from './pages/Search';
import User from './pages/User';
import Track from './pages/Track';
import Playlist from './pages/Playlist';
import Stream from './pages/Stream';
import Callback from './pages/Callback';
import UserAbout from './components/UserAbout';
import UserTracks from './components/UserTracks';
import UserPlaylists from './components/UserPlaylists';
import UserLikes from './components/UserLikes';
import UserFollowings from './components/UserFollowings';
import PageNotFound from './pages/PageNotFound';

const Root = (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={App} test='test'>
      <IndexRedirect to='explore'/>
      <Route path='callback' component={Callback} />
      <Route path='stream' component={Stream} />
      <Route path='explore(/:genre)' component={Explore} />
      <Route path='search/:type' component={Search} />
      <Route path='users/:user' component={User}>
        <Route path='tracks' component={UserTracks} />
        <Route path='playlists' component={UserPlaylists} />
        <Route path='likes' component={UserLikes} />
        <Route path='followings' component={UserFollowings} />
        <Route path='about' component={UserAbout} />
      </Route>
      <Route path='users/:user/tracks/:track' component={Track} />
      <Route path='users/:user/playlists/:playlist' component={Playlist} />
      <Route path='*' component={PageNotFound} />
    </Route>
  </Router>
);

export default Root;
