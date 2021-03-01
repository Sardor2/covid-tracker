import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  ,
  document.getElementById('root')
);


