import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppBar from './components/AppBar';
import Callback from './components/Callback';
import Explore from './components/Explore';
import PageNotFound from './components/PageNotFound';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';
import PlayerQueue from './components/PlayQueue';
import { PrivateRoute } from './components/PrivateRoute';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Search from './components/Search/Search';
import Stream from './components/Stream';
import Track from './components/Track/Track';
import User from './components/User/User';
import useAudio from './hooks/use-audio';
import useKeyboardShortcuts from './hooks/use-keyboard-shortcuts';

const App = () => {
  useAudio();
  useKeyboardShortcuts();

  return (
    <Router>
      <AppBar />
      <Route exact path="/" render={() => <Redirect to="/explore" />} />
      <Switch>
        <Route path="/callback">
          <Callback />
        </Route>
        <PrivateRoute path="/stream">
          <Stream />
        </PrivateRoute>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/users/:user/tracks/:track">
          <Track />
        </Route>
        <Route path="/users/:user/playlists/:playlist">
          <Playlist />
        </Route>
        <Route path="/users/:user">
          <User />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Player />
      <PlayerQueue />
      <ScrollToTopBtn />
    </Router>
  );
};

export default observer(App);
