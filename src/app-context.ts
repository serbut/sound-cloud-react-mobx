import React from 'react';
import * as api from './api';
import { PlayQueueStore } from './stores/player-queue';
import { PlayerStore } from './stores/player-store';
import { SessionStore } from './stores/session-store';
import { ViewStore } from './stores/view-store';

export const AppContext = React.createContext<{
  playerStore: PlayerStore;
  playQueueStore: PlayQueueStore;
  sessionStore: SessionStore;
  viewStore: ViewStore;
  api: typeof api;
}>({} as any);
