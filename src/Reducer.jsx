const reducer = (state,action) =>{
  if(action.type === 'HOME'){
    return {
         ...state,
         name :action.payload.title,
         title:action.payload.txt,
         img:action.payload.img,
         btntxt:action.payload.btn
    }
  } else if(action.type === 'ABOUT'){
    return {
         ...state,
         name :action.payload.title,
         title:action.payload.txt,
         img:action.payload.img,
         btntxt:action.payload.btn
    }
  }else if(action.type === 'SERVICES'){
    return {
      ...state,
      arra:action.payload
    }
  }
  return state;
}

export default reducer


// reducer 
// let  [state , updatestate ] = useReducer(reduce , initailvalue )