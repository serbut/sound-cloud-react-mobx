import { autorun } from 'mobx';

import { formatStreamUrl } from '../api';

export default class AudioService {
  constructor(store) {
    this.store = store;
    this._initialize();
  }

  destroy() {
    this.dispose();
  }

  _initialize() {
    const store = this.store;
    this.audio = document.createElement('audio');
    this.audio.addEventListener('loadstart', () => store.setIsLoading(true));
    this.audio.addEventListener('canplaythrough', () =>
      store.setIsLoading(false)
    );
    this.audio.addEventListener('timeupdate', e =>
      store.setProgress(Math.round(e.target.currentTime))
    );
    // this.audio.addEventListener('progress',
    // e => store.setBuffered(Math.round(e.target.buffered.end(e.target.buffered.length - 1))));
    this.audio.addEventListener('ended', () => store.playNext());
    this.audio.addEventListener('error', this._handeMediaError.bind(this));

    // react to store changes
    this.dispose = autorun(() => {
      if (!store.track) return;

      // update src if needed
      const src = formatStreamUrl(store.track.stream_url);
      if (this.audio.currentSrc !== src) this.audio.src = src;

      // update progress if difference more then 1s
      if (Math.abs(Math.round(this.audio.currentTime) - store.progress) > 1)
        this.audio.currentTime = store.progress;

      // update pause/play
      const playPromise = store.isPlaying
        ? this.audio.play()
        : this.audio.pause();
      if (playPromise !== undefined && typeof playPromise.then === 'function') {
        playPromise.then(null, () => {});
      }

      this.audio.muted = store.muted;
      this.audio.loop = store.loop;
      this.audio.volume = store.volume;
    });
  }

  _handeMediaError(e) {
    this.props.playerStore.isLoading = false;

    switch (e.target.error.code) {
      case e.target.error.MEDIA_ERR_ABORTED:
        console.error('You aborted the video playback.');
        break;
      case e.target.error.MEDIA_ERR_NETWORK:
        console.error('A network error caused the audio download to fail.');
        break;
      case e.target.error.MEDIA_ERR_DECODE:
        console.error(
          'The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.'
        );
        break;
      case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
        console.error(
          'The video audio not be loaded, either because the server or network failed or because the format is not supported.'
        );
        break;
      default:
        console.error('An unknown error occurred.');
        break;
    }
  }
}
