import {SET_HISTORIES,SET_FILTRADES} from '../actions/types';

const initialState = {
    histories:[],
    filtrades:[]
};

function histories(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
   
    case SET_HISTORIES:

        console.log('SETTING_HISTORIES',payload);
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
