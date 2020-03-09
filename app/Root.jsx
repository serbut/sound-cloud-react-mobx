import React from 'react';
import {browserHistory, IndexRedirect, Route, Router} from 'react-router';
import App from './App';
import Explore from './components/Explore';
import Search from './components/Search/Search';
import User from './components/User/User';
import Track from './components/Track/Track';
import Playlist from './components/Playlist/Playlist';
import Stream from './components/Stream';
import Callback from './components/Callback';
import UserAbout from './components/User/UserAbout';
import UserTracks from './components/User/UserTracks';
import UserPlaylists from './components/User/UserPlaylists';
import UserLikes from './components/User/UserLikes';
import UserFollowings from './components/User/UserFollowings';
import PageNotFound from './components/PageNotFound';

const Root = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App} test='test'>
      <IndexRedirect to='explore'/>
      <Route path='callback' component={Callback} />
      <Route path='stream' component={Stream} />
      <Route path='explore' component={Explore} />
      <Route path='search' component={Search} />
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
