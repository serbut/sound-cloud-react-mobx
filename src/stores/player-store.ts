import { action, autorun, computed, observable } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { StorageKey } from '../enums';
import { Track } from '../models/track';
import { RootStore } from './root-store';

const TIME_STEP = 15;
const VOLUME_STEP = 0.25;

type StorageState = Pick<
  PlayerStore,
  'track' | 'currentTime' | 'volume' | 'repeat'
>;

const prevState: StorageState = JSON.parse(
  localStorage.getItem(StorageKey.PlaybackState) || '{}'
);

export class PlayerStore {
  @observable track: Track | null | undefined = prevState.track;
  @observable isLoading = false;
  @observable isPlaying = false;
  @observable currentTime: number = prevState.currentTime || 0;
  @observable volume: number = prevState.volume || 1;
  @observable repeat: boolean = prevState.repeat || false;

  @computed get muted() {
    return this.volume === 0;
  }

  private volumeBeforeMuted: number | null | undefined;

  isSelected = createTransformer(
    (track: Track) =>
      this.track &&
      this.track.id === track.id &&
      (this.isPlaying ? 'isPlaying' : 'isPaused')
  );

  constructor(private rootStore: RootStore) {
    autorun(() => {
      const { track, currentTime, volume, repeat } = this;
      const stateSnapshot: StorageState = {
        track,
        currentTime,
        volume,
        repeat,
      };

      localStorage.setItem(
        StorageKey.PlaybackState,
        JSON.stringify(stateSnapshot)
      );
    });
  }

  @action playTrack(track = this.track) {
    if (!track) {
      return;
    }

    if (this.track?.id === track.id) {
      return (this.isPlaying = !this.isPlaying);
    }

    this.track = track;
    this.currentTime = 0;
    this.isPlaying = true;
  }

  @action setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @action setCurrentTime(value: number) {
    this.currentTime = value;
  }

  @action toggleRepeat() {
    this.repeat = !this.repeat;
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

  @action mute() {
    if (this.volume > 0) {
      this.volumeBeforeMuted = this.volume;
      this.volume = 0;
      return;
    }

    this.volume = this.volumeBeforeMuted || 1;
  }

  @action setVolume(value: number) {
    this.volumeBeforeMuted = null;
    this.volume = value;
  }

  @action increaseVolume(offset = VOLUME_STEP) {
    this.volumeBeforeMuted = null;
    this.volume = Math.min(this.volume + offset, 1);
  }

  @action decreaseVolume(offset = VOLUME_STEP) {
    this.volume = Math.max(this.volume - offset, 0);
  }
}
