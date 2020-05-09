import { PlayQueueStore } from './play-queue-store';
import { PlayerStore } from './player-store';
import { SessionStore } from './session-store';
import { ViewStore } from './view-store';

export class RootStore {
  playerStore: PlayerStore;
  playQueueStore: PlayQueueStore;
  sessionStore: SessionStore;
  viewStore: ViewStore;

  constructor() {
    this.playerStore = new PlayerStore(this);
    this.playQueueStore = new PlayQueueStore(this);
    this.sessionStore = new SessionStore(this);
    this.viewStore = new ViewStore(this);
  }
}
