import { extendObservable, observable, action, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { loadMore, getNextHref } from '../api';
import { isPreview } from '../utils';

const TIME_STEP = 15;
const VOLUME_STEP = 0.25;

const filterData = (data) => {
  return data
    .filter(el => el.hasOwnProperty('origin') && el.origin || true)
    .filter(el => el.type === 'track' || el.type === 'track-repost')
    .map(el => el.origin || el);
}

class Queue {
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
    if (this.trackIndex !== 0)
      return this.items[this.trackIndex - 1];
  }

  @computed get nextTrack() {
    if (this.trackIndex !== this.items.length - 1)
      return this.items[this.trackIndex + 1];
  }

  @computed get randomTrack() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }

  loadMore() {
    if (this.isLoading || !this.nextHref)
      return;

    this.isLoading = true;
    loadMore(this.nextHref)
      .then(action(data => {
        filterData(data.collection).forEach(el => this.originItems.push(el));
        this.nextHref = data.next_href;
        this.isLoading = false;
      }))
  }
}

class PlayerStore {
  constructor(trackStore) {
    this.queue = new Queue(this);

    extendObservable(this, {
      track: null,
      isLoading: false,
      isPlaying: false,
      progress: 0,
      buffered: 0,
      volume: 1,
      muted: false,
      loop: false,
      shuffle: false,
      skipPreviews: true
    });
  }

  isSelected = createTransformer(
    track => this.track && this.track.id === track.id && (this.isPlaying ? 'isPlaying' : 'isPaused')
  );

  @action playTrack(track = this.track, queue) {
    if (!track)
      return;

    if (this.track && this.track.id === track.id) {
      return this.isPlaying = !this.isPlaying;
    }

    this.track = track;
    this.progress = 0;
    this.isPlaying = true;


    if (queue) {
      this.queue.originItems = queue;
      this.queue.nextHref = getNextHref();
    }

    if (this.queue.trackIndex + 5 >= this.queue.items.length)
      this.queue.loadMore();
  }

  playPrev() {
    this.playTrack(this.queue.prevTrack);
  }

  playNext() {
    const nextTrack = this.shuffle ? this.queue.randomTrack : this.queue.nextTrack;
    this.playTrack(nextTrack);
  }

  setIsLoading(value) {
    this.isLoading = value;
  }

  setProgress(value) {
    this.progress = value;
  }

  setBuffered(value) {
    this.buffered = value;
  }

  toggleMuted() {
    if (!this.muted) {
      this._volume = this.volume;
      this.volume = 0;
      this.muted = true;
      return;
    }

    this.volume = this._volume;
    this.muted = false;
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  toggleLoop() {
    this.loop = !this.loop;
  }

  setVolume(value) {
    this.muted = false;
    this.volume = value;
  }

  stepForward(offset = TIME_STEP) {
    const timeLeft = this.track.duration / 1000 - this.progress;

    if (!this.isPlaying)
      return;

    if (offset < timeLeft)
      this.progress += offset;
    else
      this.playNext();
  }

  stepBackward(offset = TIME_STEP) {
    if (this.isPlaying)
      this.progress -= Math.min(offset, this.progress);
  }

  increaseVolume(offset = VOLUME_STEP) {
    if (this.muted)
      this.toggleMuted();
    this.setVolume(Math.min(this.volume + offset, 1));
  }

  decreaseVolume(offset = VOLUME_STEP) {
    if (this.muted)
      this.toggleMuted();
    this.setVolume(Math.max(this.volume - offset, 0));
  }

  toggleSkipPreviews() {
    this.skipPreviews = !this.skipPreviews;
  }
}

export default new PlayerStore;
