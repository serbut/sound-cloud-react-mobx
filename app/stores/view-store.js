import { observable } from 'mobx';

class ViewState {
  @observable playlistOpen = false;
  @observable volumeControlOpen = false;

  constructor() {
    window.addEventListener('click', () => {
      if (this.playlistOpen) {
        this.playlistOpen = false;
      }
    });
  }

  togglePlaylist() {
    this.playlistOpen = !this.playlistOpen;
  }

  temprorarilyShowVolumeControl() {
    this.volumeControlOpen = true;
    clearTimeout(this._timerId);
    this._timerId = setTimeout(() => (this.volumeControlOpen = false), 1000);
  }
}

export default new ViewState();
