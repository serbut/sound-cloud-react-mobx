import { action, observable } from 'mobx';
import { RootStore } from './root-store';

export class ViewStore {
  @observable playlistOpen = false;

  constructor(private rootStore: RootStore) {}

  @action togglePlaylist() {
    this.playlistOpen = !this.playlistOpen;
  }
}
