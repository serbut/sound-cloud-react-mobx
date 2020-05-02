import { autorun } from 'mobx';
import { useContext, useEffect } from 'react';
import { formatStreamUrl } from '../api/utils';
import { AppContext } from '../app-context';

const useAudio = () => {
  const { playerStore } = useContext(AppContext);

  useEffect(() => {
    const audioEl = document.createElement('audio');
    let updatingCurrentTime = false;
    let timeoutId: number;

    const onLoadStart = () => playerStore.setIsLoading(true);
    const onCanPlayTrough = () => playerStore.setIsLoading(false);
    const onTimeUpdate = (event: Event) =>
      !updatingCurrentTime &&
      playerStore.setProgress(
        Math.round((event.target as HTMLMediaElement).currentTime)
      );
    const onEnded = () => playerStore.playNext();
    const onError = (event: Event) => {
      playerStore.isLoading = false;
      console.error((event.target as HTMLMediaElement).error);
    };

    audioEl.addEventListener('loadstart', onLoadStart);
    audioEl.addEventListener('canplaythrough', onCanPlayTrough);
    audioEl.addEventListener('timeupdate', onTimeUpdate);
    audioEl.addEventListener('ended', onEnded);
    audioEl.addEventListener('error', onError);

    // react to store changes
    const dispose = autorun(() => {
      if (!playerStore.track) {
        return;
      }

      const src = formatStreamUrl(playerStore.track.stream_url);
      if (audioEl.currentSrc !== src) {
        audioEl.src = src;
      }

      if (
        Math.abs(Math.round(audioEl.currentTime) - playerStore.progress) > 1
      ) {
        updatingCurrentTime = true;
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          updatingCurrentTime = false;
          audioEl.currentTime = playerStore.progress;
        }, 300);
      }

      const playPromise = playerStore.isPlaying
        ? audioEl.play()
        : audioEl.pause();
      if (playPromise !== undefined && typeof playPromise.then === 'function') {
        playPromise.then(null, () => {});
      }

      audioEl.muted = playerStore.muted;
      audioEl.loop = playerStore.loop;
      audioEl.volume = playerStore.volume;
    });

    return () => {
      audioEl.removeEventListener('loadstart', onLoadStart);
      audioEl.removeEventListener('canplaythrough', onCanPlayTrough);
      audioEl.removeEventListener('timeupdate', onTimeUpdate);
      audioEl.removeEventListener('ended', onEnded);
      audioEl.removeEventListener('error', onError);

      dispose();
    };
  }, [playerStore]);
};

export default useAudio;
