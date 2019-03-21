import {combineReducers} from 'redux';
import rectors from './rectors';


const mainReducer = combineReducers({
   rectors:rectors
})

export default mainReducer;