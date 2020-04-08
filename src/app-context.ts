import React from 'react';
import * as api from './api';

import playerStore from './stores/player-store';
import sessionStore from './stores/session-store';
import viewStore from './stores/view-store';

export const AppContext = React.createContext<{
  sessionStore: typeof sessionStore;
  playerStore: typeof playerStore;
  viewStore: typeof viewStore;
  api: typeof api;
}>({} as any);
