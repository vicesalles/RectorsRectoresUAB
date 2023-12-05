import {SET_CURRENT_RECTOR} from '../actions/types';

import rectorsData from '../data/rectors';

const initialState ={
    currentRector: null,
    rectors: rectorsData
}

function rectors(state=initialState,action){
    
    const {type,payload} = action;
   
    switch(type){
        case SET_CURRENT_RECTOR:        
            return {
                ...state,
                currentRector:payload
            }
        default:
            return state
    }
}

export default rectors;


