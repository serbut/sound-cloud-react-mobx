import React from 'react';

import playerStore from './stores/player-store';
import sessionStore from './stores/session-store';
import viewStore from './stores/view-store';

export const StoresContext = React.createContext({
  sessionStore,
  playerStore,
  viewStore,
});
