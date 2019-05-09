import _ from 'lodash';
import {SET_CURRENT_RECTOR,SET_CURRENT_VIDEO,SET_FILTRADES,SET_HISTORIES,INITIAL_HISTORIES} from './types';
import store from '../store';

//Data
import rectors from '../data/rectors';

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
        dispatch({type:SET_CURRENT_VIDEO,payload:v});
        dispatch({type:SET_HISTORIES, payload:h});       

    }

}


//SET all the histories

export function globalHistories(){

    //Get all the videos and its events
    const vids = store.getState().videos.videos;

    //Join Rector data to any event
    const historesGlobals = vids.map((v)=>{

        const {events} = v;

        //Extreu les histories de cada rector
        return events.map((e)=>{

            //Integra dades de cada rector en cada història
            return Object.assign({},e,{
                nom: `${v.nom} ${v.cognoms}`,
                anys: v.anys.join("-"),
                url:v.id 
            })
        })

    })   

    const histories = _.flatten(historesGlobals).filter((a)=>a!==undefined);

    return{type:INITIAL_HISTORIES,payload:histories}
}

//Global Search

export function globalSearch(txt){
    
}


//Search text within current video
export function searchCurrentVideoText(txt){

    const histories = store.getState().histories.histories;

       
    const resultat = histories.filter((h)=>{
        
        const text = h.txt;
        //Search for titles
        const titols = text.toLowerCase().includes(txt.toLowerCase())
        //Search for tags
        const tags = h.tags.filter((t)=>t.toLowerCase().includes(txt.toLowerCase()))
        const resposta = titols || tags.length>0   
        return resposta

    })

    //Cerca entre els tags

    return {type:SET_FILTRADES, payload:resultat}

}