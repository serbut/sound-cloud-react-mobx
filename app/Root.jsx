import React from 'react';
import {hot} from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
// import Explore from './components/Explore';
// import Search from './components/Search/Search';
// import User from './components/User/User';
// import Track from './components/Track/Track';
// import Playlist from './components/Playlist/Playlist';
// import Stream from './components/Stream';
// import Callback from './components/Callback';
// import UserAbout from './components/User/UserAbout';
// import UserTracks from './components/User/UserTracks';
// import UserPlaylists from './components/User/UserPlaylists';
// import UserLikes from './components/User/UserLikes';
// import UserFollowings from './components/User/UserFollowings';
// import PageNotFound from './components/PageNotFound';

const Root = (props) => (
  <Router>
      <Route path='/' component={App}>
          <App/>
      </Route>
  </Router>
);

export default hot(Root);
