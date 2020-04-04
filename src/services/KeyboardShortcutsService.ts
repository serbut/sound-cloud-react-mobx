import key from 'keymaster';
import {PlayerStore} from '../stores/player-store';
import {SessionStore} from '../stores/session-store';
import {ViewState} from '../stores/view-store';

export default class KeyboardShortcutsService {
  constructor(
      playerStore: PlayerStore,
      viewStore: ViewState,
      sessionStore: SessionStore
  ) {
    key('space', e => {
      e.preventDefault();
      playerStore.playTrack();
    });
    key('right', () => playerStore.stepForward());
    key('left', () => playerStore.stepBackward());
    key('shift+right', () => playerStore.playNext());
    key('shift+left', () => playerStore.playPrev());
    key('shift+up', () => {
      playerStore.increaseVolume();
      viewStore.temporarilyShowVolumeControl();
    });
    key('shift+down', () => {
      playerStore.decreaseVolume();
      viewStore.temporarilyShowVolumeControl();
    });
    key('shift+l', () => playerStore.toggleLoop());
    key('m', () => {
      playerStore.toggleMuted();
      viewStore.temporarilyShowVolumeControl();
    });
    key('s', () => playerStore.toggleShuffle());
    key('l', () => playerStore.track && sessionStore.toggleLike(playerStore.track));
    key('p', () => viewStore.togglePlaylist());
  }
}
