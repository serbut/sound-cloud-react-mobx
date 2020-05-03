import { action, autorun, computed, observable } from 'mobx';
import { load } from '../api';
import { CollectionItemType, StorageKey } from '../enums';
import { Collection, CollectionItem } from '../models/api';
import { Track } from '../models/track';
import { isPreview } from '../utils';
import { PlayerStore } from './player-store';

type StorageState = Pick<Queue, 'shuffle' | 'originItems'>;

const prevState: StorageState = JSON.parse(
  localStorage.getItem(StorageKey.PlayQueueState) || '{}'
);

export class Queue {
  @observable originItems: Track[] = prevState.originItems || [];
  @observable isLoading = false;
  @observable shuffle: boolean = prevState.shuffle || false;
  public nextHref: string | null | undefined;

  private player: PlayerStore;
  private skipPreviews = true;

  constructor(player: PlayerStore) {
    this.player = player;

    autorun(() => {
      const { shuffle, originItems } = this;
      const stateSnapshot = { shuffle, originItems };

      localStorage.setItem(
        StorageKey.PlayQueueState,
        JSON.stringify(stateSnapshot)
      );
    });

    autorun(() => {
      if (
        typeof this.trackIndex === 'number' &&
        this.trackIndex + 5 >= this.items.length
      ) {
        this.loadMore();
      }
    });
  }

  @computed get items() {
    if (this.skipPreviews) {
      return this.originItems.filter((el) => !isPreview(el));
    }
    return this.originItems;
  }

  @computed get trackIndex() {
    if (this.player.track) {
      const index = this.items.findIndex((i) => i.id === this.player.track?.id);
      return index >= 0 ? index : null;
    }
  }

  @computed get prevTrack() {
    if (typeof this.trackIndex === 'number') {
      return this.items[this.trackIndex - 1];
    }
  }

  @computed get nextTrack() {
    if (typeof this.trackIndex !== 'number') {
      return null;
    }

    if (this.shuffle) {
      return this.items[Math.floor(Math.random() * this.items.length)];
    }

    return this.items[this.trackIndex + 1];
  }

  @action clearItems() {
    this.originItems = [];
  }

  @action toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  private loadMore() {
    if (this.isLoading || !this.nextHref) {
      return;
    }

    this.isLoading = true;
    load<Collection<Track | CollectionItem>>(this.nextHref).then(
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
