import { action, autorun, computed, observable } from 'mobx';
import { load } from '../api';
import { CollectionItemType, StorageKey } from '../enums';
import { Collection, CollectionItem } from '../models/api';
import { Track } from '../models/track';
import { isPreview } from '../utils';
import { PlayerStore } from './player-store';

type StorageState = Pick<Queue, 'shuffle'>;

const prevState: StorageState = JSON.parse(
  localStorage.getItem(StorageKey.PlayQueueState) || '{}'
);

export class Queue {
  @observable originItems: Track[] = [];
  @observable isLoading = false;
  @observable shuffle: boolean = prevState.shuffle || false;
  public nextHref: string | null | undefined;

  private player: PlayerStore;

  constructor(player: PlayerStore) {
    this.player = player;

    autorun(() => {
      const { shuffle } = this;
      const stateSnapshot = { shuffle };

      localStorage.setItem(
        StorageKey.PlaybackState,
        JSON.stringify(stateSnapshot)
      );
    });
  }

  @computed get items() {
    if (this.player.skipPreviews) {
      return this.originItems.filter((el) => !isPreview(el));
    }
    return this.originItems;
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

    if (this.shuffle) {
      return this.items[Math.floor(Math.random() * this.items.length)];
    }

    return this.items[this.trackIndex + 1];
  }

  loadMore() {
    if (this.isLoading || !this.nextHref) return;

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

  @action clearItems() {
    this.originItems = [];
  }

  @action toggleShuffle() {
    this.shuffle = !this.shuffle;
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
