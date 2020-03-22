import { action, computed, observable } from 'mobx';

import { loadMore } from '../api';
import { isPreview } from '../utils';

export class Queue {
  @observable originItems = [];
  @observable isLoading;

  constructor(player) {
    this.player = player;
  }

  @computed get items() {
    if (this.player.skipPreviews)
      return this.originItems.filter(el => !isPreview(el));
    else return this.originItems;
  }

  @computed get trackIndex() {
    return this.items.findIndex(i => i.id === this.player.track.id);
  }

  @computed get prevTrack() {
    return this.items[this.trackIndex - 1];
  }

  @computed get nextTrack() {
    return this.items[this.trackIndex + 1];
  }

  @computed get randomTrack() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }

  loadMore() {
    if (this.isLoading || !this.nextHref) return;

    this.isLoading = true;
    loadMore(this.nextHref).then(
      action(data => {
        this._filterData(data.collection).forEach(el =>
          this.originItems.push(el)
        );
        this.nextHref = data.next_href;
        this.isLoading = false;
      })
    );
  }

  _filterData(data) {
    return data
      .filter(
        el =>
          (Object.prototype.hasOwnProperty.call(el, 'origin') && el.origin) ||
          true
      )
      .filter(el => el.type === 'track' || el.type === 'track-repost')
      .map(el => el.origin || el);
  }
}
