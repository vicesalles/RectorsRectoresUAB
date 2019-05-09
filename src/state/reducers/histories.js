import {SET_HISTORIES,SET_FILTRADES,INITIAL_HISTORIES} from '../actions/types';

const initialState = {
    histories:[],
    filtrades:[]
};

function histories(state = initialState, action) {
  
  const { type, payload } = action;
  
  switch (type) {

    case INITIAL_HISTORIES:

        return {
            histories:payload,
            filtrades:[]
        };
   
    case SET_HISTORIES:
        
        return {
            filtrades:payload,
            histories:payload
        }
    
    case SET_FILTRADES:
        return{
            ...state,
            filtrades:payload
        }

    default:
      return state;
  }
}

export default histories;
