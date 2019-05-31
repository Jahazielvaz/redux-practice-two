const reducer  = (state, action) => {
  console.log(state)
  if(action.type === 'MESSAGE'){
    return {...state, msg: action.myMsg}
  } else if ('MSG_TWO'){
    return state
  }

}

export default reducer;
