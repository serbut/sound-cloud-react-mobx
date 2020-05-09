import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-virtualized/styles.css';
import './api';
import * as api from './api';
import App from './App';
import { AppContext } from './app-context';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { RootStore } from './stores/root-store';

const rootStore = new RootStore();

const context = {
  ...rootStore,
  api,
};

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={context}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
