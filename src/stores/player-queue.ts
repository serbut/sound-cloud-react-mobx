import { action, autorun, computed, observable } from 'mobx';
import { load } from '../api';
import { CollectionItemType, StorageKey } from '../enums';
import { Collection, CollectionItem } from '../models/api';
import { Track } from '../models/track';
import { isPreview } from '../utils';
import { RootStore } from './root-store';

type StorageState = Pick<PlayQueueStore, 'shuffle' | 'originItems'>;

const prevState: StorageState = JSON.parse(
  localStorage.getItem(StorageKey.PlayQueueState) || '{}'
);

export class PlayQueueStore {
  @observable originItems: Track[] = prevState.originItems || [];
  @observable isLoading = false;
  @observable shuffle: boolean = prevState.shuffle || false;

  private nextHref: string | null | undefined;
  private skipPreviews = true;

  constructor(private rootStore: RootStore) {
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
    if (!this.rootStore.playerStore.track) {
      return null;
    }

    const index = this.items.findIndex(
      (i) => i.id === this.rootStore.playerStore.track?.id
    );

    return index >= 0 ? index : null;
  }

  @computed get prevTrack() {
    if (typeof this.trackIndex !== 'number') {
      return null;
    }

    return this.items[this.trackIndex - 1];
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

  @action addItems(data: Track[], nextHref?: string) {
    this.originItems = data;
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
        PlayQueueStore.filterData(data.collection).forEach((track: Track) =>
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
