import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import './api';
import Root from './Root';
import './styles/index.less';


const renderApp = () => {
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./Root', () => {
    renderApp();
  });
}
