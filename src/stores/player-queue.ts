import { action, computed, observable } from 'mobx';

import { loadMore } from '../api';
import { Track } from '../models/track';
import { isPreview } from '../utils';
import { PlayerStore } from './player-store';

export class Queue {
  @observable originItems: Track[] = [];
  @observable isLoading = false;
  public nextHref: string | null = null;

  private player: PlayerStore;

  constructor(player: PlayerStore) {
    this.player = player;
  }

  @computed get items() {
    if (this.player.skipPreviews)
      return this.originItems.filter((el) => !isPreview(el));
    else return this.originItems;
  }

  @computed get trackIndex() {
    if (this.player.track) {
      // TODO
      // @ts-ignore
      return this.items.findIndex((i) => i.id === this.player.track.id);
    }
    return null;
  }

  @computed get prevTrack() {
    if (!this.trackIndex) {
      return null;
    }
    return this.items[this.trackIndex - 1];
  }

  @computed get nextTrack() {
    if (!this.trackIndex) {
      return null;
    }
    return this.items[this.trackIndex + 1];
  }

  @computed get randomTrack() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }

  loadMore() {
    if (this.isLoading || !this.nextHref) return;

    this.isLoading = true;
    loadMore(this.nextHref).then(
      action((data) => {
        this.filterData(data.collection).forEach((el: Track) =>
          this.originItems.push(el)
        );
        this.nextHref = data.next_href;
        this.isLoading = false;
      })
    );
  }

  private filterData(data: Track[]) {
    return data
      .filter(
        (el) =>
          (Object.prototype.hasOwnProperty.call(el, 'origin') && el.origin) ||
          true
      )
      .filter((el) => el.type === 'track' || el.type === 'track-repost')
      .map((el) => el.origin || el);
  }
}
