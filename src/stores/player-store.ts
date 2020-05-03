import { action, observable } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { getNextHref } from '../api';
import { StorageKey } from '../enums';
import { Track } from '../models/track';
import { Queue } from './player-queue';

const TIME_STEP = 15;
const VOLUME_STEP = 0.25;

const storageSet = (key: StorageKey, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

const storageGet = (key: StorageKey, defaultValue: any) =>
  JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));

export class PlayerStore {
  queue = new Queue(this);

  @observable track: Track | null = storageGet(StorageKey.Track, null);
  @observable isLoading = false;
  @observable isPlaying = false;
  @observable currentTime = storageGet(StorageKey.CurrentTime, 0);
  @observable volume = storageGet(StorageKey.Volume, 1);
  @observable muted = storageGet(StorageKey.Muted, false);
  @observable repeat = storageGet(StorageKey.Loop, false);
  @observable shuffle = storageGet(StorageKey.Shuffle, false);
  @observable skipPreviews = true; // TODO: move to config store

  private volumeBeforeMuted = 0;

  isSelected = createTransformer(
    (track: Track) =>
      this.track &&
      this.track.id === track.id &&
      (this.isPlaying ? 'isPlaying' : 'isPaused')
  );

  @action playTrack(track = this.track, queue?: Track[]) {
    if (!track) {
      return;
    }

    if (this.track?.id === track.id) {
      return (this.isPlaying = !this.isPlaying);
    }

    this.track = track;
    this.currentTime = 0;
    this.isPlaying = true;

    storageSet(StorageKey.Track, track);

    if (queue) {
      this.queue.originItems = queue;
      this.queue.nextHref = getNextHref();
    }

    if (
      this.queue.trackIndex &&
      this.queue.trackIndex + 5 >= this.queue.items.length
    ) {
      this.queue.loadMore();
    }
  }

  @action setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @action setCurrentTime(value: number) {
    this.currentTime = value;
    storageSet(StorageKey.CurrentTime, value);
  }

  @action toggleMuted() {
    if (!this.muted) {
      this.volumeBeforeMuted = this.volume;
      this.volume = 0;
      this.muted = true;
      storageSet(StorageKey.Muted, true);
      return;
    }

    this.volume = this.volumeBeforeMuted;
    this.muted = false;
    storageSet(StorageKey.Muted, false);
  }

  @action toggleShuffle() {
    this.shuffle = !this.shuffle;
    storageSet(StorageKey.Shuffle, this.shuffle);
  }

  @action toggleRepeat() {
    this.repeat = !this.repeat;
    storageSet(StorageKey.Loop, this.repeat);
  }

  @action setVolume(value: number) {
    this.muted = false;
    this.volume = value;
    storageSet(StorageKey.Volume, value);
  }

  @action seekForward(offset = TIME_STEP) {
    if (!this.track) {
      return;
    }
    this.currentTime = Math.min(
      this.currentTime + offset,
      this.track.duration / 1000
    );
  }

  @action seekBackward(offset = TIME_STEP) {
    if (!this.track) {
      return;
    }
    this.currentTime = Math.max(this.currentTime - offset, 0);
  }

  increaseVolume(offset = VOLUME_STEP) {
    if (this.muted) {
      this.toggleMuted();
    }
    this.setVolume(Math.min(this.volume + offset, 1));
  }

  decreaseVolume(offset = VOLUME_STEP) {
    if (this.muted) {
      this.toggleMuted();
    }
    this.setVolume(Math.max(this.volume - offset, 0));
  }

  toggleSkipPreviews() {
    this.skipPreviews = !this.skipPreviews;
  }
}

export default new PlayerStore();
