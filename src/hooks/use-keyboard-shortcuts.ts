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
    key('right', () => playerStore.seekForward());
    key('left', () => playerStore.seekBackward());
    key('shift+right', () =>
      playerStore.playTrack(playerStore.queue.nextTrack)
    );
    key('shift+left', () => playerStore.playTrack(playerStore.queue.prevTrack));
    key('shift+up', () => {
      playerStore.increaseVolume();
    });
    key('shift+down', () => {
      playerStore.decreaseVolume();
    });
    key('shift+l', () => playerStore.toggleRepeat());
    key('m', () => {
      playerStore.toggleMuted();
    });
    key('s', () => playerStore.queue.toggleShuffle());
    key(
      'l',
      () => playerStore.track && sessionStore.toggleLike(playerStore.track)
    );
    key('p', () => viewStore.togglePlaylist());
  }, [playerStore, sessionStore, viewStore]);
};

export default useKeyboardShortcuts;
