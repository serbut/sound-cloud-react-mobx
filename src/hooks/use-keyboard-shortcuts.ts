import key from 'keymaster';
import { useContext, useEffect } from 'react';
import { AppContext } from '../app-context';

const useKeyboardShortcuts = () => {
  const { playerStore, viewStore, sessionStore } = useContext(AppContext);

  useEffect(() => {
    key('space', (e) => {
      e.preventDefault();
      playerStore.playTrack();
    });
    key('right', () => playerStore.stepForward());
    key('left', () => playerStore.stepBackward());
    key('shift+right', () => playerStore.playNext());
    key('shift+left', () => playerStore.playPrev());
    key('shift+up', () => {
      playerStore.increaseVolume();
    });
    key('shift+down', () => {
      playerStore.decreaseVolume();
    });
    key('shift+l', () => playerStore.toggleLoop());
    key('m', () => {
      playerStore.toggleMuted();
    });
    key('s', () => playerStore.toggleShuffle());
    key(
      'l',
      () => playerStore.track && sessionStore.toggleLike(playerStore.track)
    );
    key('p', () => viewStore.togglePlaylist());
  }, [playerStore, sessionStore, viewStore]);
};

export default useKeyboardShortcuts;
