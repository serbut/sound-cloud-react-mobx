import React from 'react';
import { observer, Provider } from 'mobx-react';
import key from 'keymaster';
import {Switch} from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from './components/AppBar';
// import Player from './components/Player/Player';
// import ScrollToTopBtn from './components/ScrollToTopBtn';
import viewStore from './stores/view-store';
import playerStore from './stores/player-store';
import sessionStore from './stores/session-store';

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
        <Provider playerStore={playerStore} viewStore={viewStore} sessionStore={sessionStore}>
          <div style={{paddingBottom: playerStore.track ? 64 : 0}}>
            {/*<AppBar router={this.props.router} />*/}

            <Switch>
              {/*<IndexRedirect to='explore'/>*/}
              {/*<Route path='callback' component={Callback} />*/}
              {/*<Route path='stream' component={Stream} />*/}
              {/*<Route path='explore' component={Explore} />*/}
              {/*<Route path='search' component={Search} />*/}
              {/*<Route path='users/:user' component={User}>*/}
              {/*  <Route path='tracks' component={UserTracks} />*/}
              {/*  <Route path='playlists' component={UserPlaylists} />*/}
              {/*  <Route path='likes' component={UserLikes} />*/}
              {/*  <Route path='followings' component={UserFollowings} />*/}
              {/*  <Route path='about' component={UserAbout} />*/}
              {/*</Route>*/}
              {/*<Route path='users/:user/tracks/:track' component={Track} />*/}
              {/*<Route path='users/:user/playlists/:playlist' component={Playlist} />*/}
              {/*<Route path='*' component={PageNotFound} />*/}
            </Switch>

            {/*<Player />*/}
            {/*<ScrollToTopBtn />*/}
          </div>
        </Provider>
      // </MuiThemeProvider>
    );
  }
}

export default observer(App);
