import {SET_CURRENT_RECTOR,SET_CURRENT_VIDEO} from './types';

//Data
import rectors from '../data/rectors';


// Sets Current Rector
export function setCurrentRector(r){

    console.log('acció setCurrentRector',r);
    const payload = rectors.find((rec)=>rec.url===r);
    
    setCurrentVideo(r);
    

    return {type:SET_CURRENT_RECTOR,payload}

}

// Sets Current Video
export function setCurrentVideo(v){

    return {type:SET_CURRENT_VIDEO,payload:v}

}