import { createStore } from 'redux';
import reducer from '../reducer';

 const initialState = {
   msg: "This is my initial State"
 }
const store = createStore(reducer, initialState)

export default store;
