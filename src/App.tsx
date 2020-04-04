import { observer } from 'mobx-react';
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
// import Playlist from './components/Playlist/Playlist';
import ScrollToTopBtn from './components/ScrollToTopBtn';
// import Search from './components/Search/Search';
import Stream from './components/Stream';
import Track from './components/Track/Track';
// import User from './components/User/User';
import AudioService from './services/AudioService';
import KeyboardShortcutsService from './services/KeyboardShortcutsService';
import { StoresContext } from './stores-context';
import playerStore from './stores/player-store';
import sessionStore from './stores/session-store';
import viewStore from './stores/view-store';

const stores = {
  playerStore,
  viewStore,
  sessionStore,
};

class App extends React.Component {
  componentDidMount() {
    new AudioService(playerStore);
    new KeyboardShortcutsService(playerStore, viewStore, sessionStore);
  }

  render() {
    return (
      <StoresContext.Provider value={stores}>
        <Router>
          <div style={{ paddingBottom: playerStore.track ? 64 : 0 }}>
            <AppBar />

            <Route exact path="/" render={() => <Redirect to="/explore" />} />
            <Switch>
              <Route path="/callback">
                <Callback />
              </Route>
              <Route path="/stream">
                <Stream />
              </Route>
              <Route path="/explore">
                <Explore />
              </Route>
              {/*  <Route path="/search">*/}
              {/*    <Search />*/}
              {/*  </Route>*/}
              <Route path="/users/:user/tracks/:track">
                <Track />
              </Route>
              {/*  <Route path="/users/:user/playlists/:playlist">*/}
              {/*    <Playlist />*/}
              {/*  </Route>*/}
              {/*  <Route path="/users/:user">*/}
              {/*    <User />*/}
              {/*  </Route>*/}
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>

            <Player />
            <ScrollToTopBtn />
          </div>
        </Router>
      </StoresContext.Provider>
    );
  }
}

export default observer(App);
