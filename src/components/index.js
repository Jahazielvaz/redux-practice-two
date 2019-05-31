import React from 'react';
import store from '../store';
import action from '../actions';

const MyMessage = (props) => {
  return(
    <div>
      <h1>{props.msg}</h1>
      <button onClick={secondAction}>Second Action</button>
    </div>
  )
}

const secondAction = () => store.dispatch(action)


export default MyMessage;
