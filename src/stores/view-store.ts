import { observable } from 'mobx';

export class ViewState {
  @observable playlistOpen = false;
  @observable volumeControlOpen = false;

  private timeoutID: number | undefined;

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

  temporarilyShowVolumeControl() {
    this.volumeControlOpen = true;
    clearTimeout(this.timeoutID);
    this.timeoutID = window.setTimeout(
      () => (this.volumeControlOpen = false),
      1000
    );
  }
}

export default new ViewState();
