import { action, observable } from 'mobx';

export class ViewState {
  @observable playlistOpen = false;

  @action togglePlaylist() {
    this.playlistOpen = !this.playlistOpen;
  }
}

export default new ViewState();
