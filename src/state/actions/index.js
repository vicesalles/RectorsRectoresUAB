import {SET_CURRENT_RECTOR,SET_CURRENT_VIDEO,SET_FILTRADES,SET_HISTORIES} from './types';
import store from '../store';

//Data
import rectors from '../data/rectors';
import { dispatch } from 'rxjs/internal/observable/pairs';


// Sets Current Rector
export const setCurrentRector = (r) => (dispatch) =>{
      
    const payload = rectors.find((rec)=>rec.url===r);    
    //Video Actual
    dispatch(setCurrentVideo(r))
    // Rector actual
    dispatch({type:SET_CURRENT_RECTOR,payload})       
        
}
 


// Sets Current Video

export function setCurrentVideo(v) {     
    
    return dispatch => {
   
        
        const h = store.getState().videos.videos.filter((vd)=>vd.id===v)[0].events;
        console.log('SettingCurrentVideo',h);    
        dispatch({type:SET_CURRENT_VIDEO,payload:v});
        dispatch({type:SET_HISTORIES, payload:h});       

    }

}



//Global Search



//Search text within current video
export function searchCurrentVideoText(txt){

    const histories = store.getState().histories.histories;

       
    const resultat = histories.filter((h)=>{
        const text = h.txt;

        const titols = text.toLowerCase().includes(txt.toLowerCase())
        const tags = h.tags.filter((t)=>t.toLowerCase().includes(txt.toLowerCase()))

        console.log(tags)
        
        const resposta = titols || tags.length>0

        return resposta
    })

    //Cerca entre els tags

    return {type:SET_FILTRADES, payload:resultat}

}