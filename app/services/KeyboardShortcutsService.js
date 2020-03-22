import key from 'keymaster';

export default class KeyboardShortcutsService {
  constructor(playerStore, viewStore, sessionStore) {
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
      this.showVolumeControl();
    });
    key('shift+down', () => {
      playerStore.decreaseVolume();
      this.showVolumeControl();
    });
    key('shift+l', () => playerStore.toggleLoop());
    key('m', () => {
      playerStore.toggleMuted();
      viewStore.temprorarilyShowVolumeControl();
    });
    key('s', () => playerStore.toggleShuffle());
    key('l', () => sessionStore.toggleLike(playerStore.track));
    key('p', () => viewStore.togglePlaylist());
  }
}
