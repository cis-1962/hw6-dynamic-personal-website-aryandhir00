import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider, useDispatch} from 'react-redux';
import {store} from './app/store'
import Home from './components/home';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
);