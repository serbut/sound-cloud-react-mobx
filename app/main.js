import 'react-hot-loader'; // Make sure react-hot-loader is required before react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';
import './api';
import Root from './Root';
import 'react-virtualized/styles.css';
import './styles/index.less';

ReactDOM.render(<Root />, document.getElementById('root'));

// TODO: hot-loader not working, update webpack and check again, if not probably remove it
// TODO: add eslint & prettier
// TODO: update React
// TODO: update MobX
// TODO: update React Router
// TODO: update Material UI
