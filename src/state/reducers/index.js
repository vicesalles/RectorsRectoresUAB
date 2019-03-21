import {combineReducers} from 'redux';
import rectors from './rectors';
import videos from './videos';


const mainReducer = combineReducers({
   rectors,
   videos
})

export default mainReducer;