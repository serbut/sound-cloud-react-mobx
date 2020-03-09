import 'react-hot-loader'; // Make sure react-hot-loader is required before react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';
import './api';
import Root from './Root';
import 'react-virtualized/styles.css';
import './styles/index.less';

ReactDOM.render(<Root />, document.getElementById('root'));

// TODO: 1. hot-loader not working, update webpack and check again, if not probably remove it
// TODO: 2. update React, Mobx, and other deps except Material UI
// TODO: 3. update Material UI
