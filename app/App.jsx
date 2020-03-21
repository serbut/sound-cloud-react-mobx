import key from 'keymaster';
import {observer, Provider} from 'mobx-react';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import AppBar from './components/AppBar';
import Callback from './components/Callback';
import Explore from './components/Explore';
import PageNotFound from './components/PageNotFound';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';
import Search from './components/Search/Search';
import Stream from './components/Stream';
import Track from './components/Track/Track';
import User from './components/User/User';
import playerStore from './stores/player-store';
import sessionStore from './stores/session-store';
// import ScrollToTopBtn from './components/ScrollToTopBtn';
import viewStore from './stores/view-store';

class App extends React.Component {
  componentDidMount() {
    key('space', (e) => { e.preventDefault(); playerStore.playTrack() });
    key('right', () => playerStore.stepForward());
    key('left', () => playerStore.stepBackward());
    key('shift+right', () => playerStore.playNext());
    key('shift+left', () => playerStore.playPrev());
    key('shift+up', () => { playerStore.increaseVolume(); this.showVolumeControl(); });
    key('shift+down', () => { playerStore.decreaseVolume(); this.showVolumeControl(); });
    key('shift+l', () => playerStore.toggleLoop());
    key('m', () => { playerStore.toggleMuted(); this.showVolumeControl(); });
    key('s', () => playerStore.toggleShuffle());
    key('l', () => sessionStore.toggleLike(playerStore.track));
    key('p', () => viewStore.togglePlaylist());
  }

  showVolumeControl() {
    viewStore.volumeControlOpen = true;
    clearTimeout(this._timerId);
    this._timerId = setTimeout(() => viewStore.volumeControlOpen = false, 1000);
  }

  render() {
    return (
      // <MuiThemeProvider>
        // TODO: refactor to use context
        <Provider playerStore={playerStore} viewStore={viewStore} sessionStore={sessionStore}>
          <div style={{paddingBottom: playerStore.track ? 64 : 0}}>
            <AppBar />

            <Route exact path="/" render={() => (<Redirect to="/explore" />)} />
            <Switch>
              <Route path='/callback'>
                <Callback/>
              </Route>
              <Route path='/stream'>
                <Stream/>
              </Route>
              <Route path='/explore'>
                <Explore/>
              </Route>
              <Route path='/search'>
                <Search/>
              </Route>
              <Route path='/users/:user/tracks/:track'>
                <Track/>
              </Route>
              <Route path='/users/:user/playlists/:playlist'>
                <Playlist/>
              </Route>
              <Route path='/users/:user'>
                <User/>
              </Route>
              <Route path='*'>
                <PageNotFound/>
              </Route>
            </Switch>

            <Player />
            {/*<ScrollToTopBtn />*/}
          </div>
        </Provider>
      // </MuiThemeProvider>
    );
  }
}

export default observer(App);
