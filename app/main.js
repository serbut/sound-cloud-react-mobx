import 'react-hot-loader'; // Make sure react-hot-loader is required before react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';
import './api';
import App from './App';
import 'react-virtualized/styles.css';
import './styles/index.less';

ReactDOM.render(<App />, document.getElementById('root'));

// TODO: add eslint & prettier
// TODO: use Mobx in strict mode (useStrict)
// TODO: refactor styles
// TODO: refactor all to Function comps with hooks
