import {combineReducers} from 'redux';
import rectors from './rectors';
import videos from './videos';
import histories from './histories';


const mainReducer = combineReducers({
   rectors,
   videos,
   histories
})

export default mainReducer;