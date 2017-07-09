import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import store from './redux/index';


import App from './App/AppContainer';


const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
};

render(App);
