import { action, computed, observable } from 'mobx';

import { loadMore } from '../api';
import { CollectionItemType } from '../enums';
import { CollectionItem } from '../models/api';
import { Track } from '../models/track';
import { isPreview } from '../utils';
import { PlayerStore } from './player-store';

export class Queue {
  @observable originItems: Track[] = [];
  @observable isLoading = false;
  public nextHref: string | null | undefined;

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
    loadMore<Track | CollectionItem>(this.nextHref).then(
      action((data) => {
        Queue.filterData(data.collection).forEach((track: Track) =>
          this.originItems.push(track)
        );
        this.nextHref = data.next_href;
        this.isLoading = false;
      })
    );
  }

  private static filterData(data: (Track | CollectionItem)[]) {
    return data
      .map((item) => {
        if ('origin' in item) {
          if (
            item.type === CollectionItemType.Track ||
            item.type === CollectionItemType.TrackRepost
          ) {
            return item.origin;
          }
          return null;
        }
        return item;
      })
      .filter(Boolean) as Track[];
  }
}
