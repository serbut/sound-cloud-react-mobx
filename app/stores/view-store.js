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
}

export default new ViewState();
