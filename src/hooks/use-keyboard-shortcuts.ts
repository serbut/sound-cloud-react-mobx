import key from 'keymaster';
import { useContext, useEffect } from 'react';
import { AppContext } from '../app-context';

const useKeyboardShortcuts = () => {
  const { playerStore, playQueueStore, viewStore, sessionStore } = useContext(
    AppContext
  );

  useEffect(() => {
    key('space', (e) => {
      e.preventDefault();
      playerStore.playTrack();
    });
    key('right', () => playerStore.seekForward());
    key('left', () => playerStore.seekBackward());
    key('shift+right', () => playerStore.playTrack(playQueueStore.nextTrack));
    key('shift+left', () => playerStore.playTrack(playQueueStore.prevTrack));
    key('shift+up', () => {
      playerStore.increaseVolume();
    });
    key('shift+down', () => {
      playerStore.decreaseVolume();
    });
    key('shift+l', () => playerStore.toggleRepeat());
    key('m', () => {
      playerStore.mute();
    });
    key('s', () => playQueueStore.toggleShuffle());
    key(
      'l',
      () => playerStore.track && sessionStore.toggleLike(playerStore.track)
    );
    key('p', () => viewStore.togglePlaylist());
  }, [playerStore, playQueueStore, sessionStore, viewStore]);
};

export default useKeyboardShortcuts;
