import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const final = () => {
  return (ReactDOM.render(<App />, document.getElementById('root')))
};

final();

store.subscribe(final);


serviceWorker.unregister();
