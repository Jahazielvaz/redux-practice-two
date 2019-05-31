import React, { Component } from 'react';
import './App.css';
import MyMessage from './components';
import store from './store';
import action from './actions';


class App extends Component {


  render(){

    return (
      <div className="App">
        <MyMessage msg={store.getState().msg} />
      </div>
    );
  }
}

export default App;
