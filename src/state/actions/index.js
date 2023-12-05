import _ from 'lodash';
import {SET_CURRENT_RECTOR,SET_CURRENT_VIDEO,SET_FILTRADES,SET_HISTORIES,INITIAL_HISTORIES} from './types';
import store from '../store';

//Data
import rectors from '../data/rectors';


/**
 * @description Sets Current Rector
 * @param {String} r id rector 
 */
export const setCurrentRector = (r) => (dispatch) =>{
   
    //Getting Rector info
    const payload = rectors.find((rec)=>rec.url===r);    
    //Video Actual
    dispatch(setCurrentVideo(r))
    // Rector actual
    dispatch({type:SET_CURRENT_RECTOR,payload})       
        
}

/**
 * @description Sets the current video for playing
 * @param {String} v 
 */
export function setCurrentVideo(v) {     
    
    return dispatch => {   
        
        const h = store.getState().videos.videos.filter((vd)=>vd.id===v)[0].events;            
        dispatch({type:SET_CURRENT_VIDEO,payload:v});
        dispatch({type:SET_HISTORIES, payload:h});       

    }

}


/**
 * @description Sets all the "Histories". This is the Initial State
 */
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


/**
 * @description Searches for a given text.
 * @param {String} txt queried text
 * @param {Boolean} isGlobal defines the search scope
 */
export function searchText(txt,isGlobal=false){

    const histories = store.getState().histories.histories;

    //Checks if we're on global search scope and if the query is empty
    if(isGlobal&&txt.length===0){
        //Returns an empty array for cleaning the list
        return {type:SET_FILTRADES, payload:[]}

    }else{

        const resultat = histories.filter((h)=>{
        
            //Historia text
            const text = h.txt;            
            //Search for titles
            const titols = text.toLowerCase().includes(txt.toLowerCase())
            //Search for tags
            const tags = h.tags.filter((t)=>t.toLowerCase().includes(txt.toLowerCase()))
            //Checks if there's result either in the titols or the tags
            const resposta = titols || tags.length>0   
            return resposta
    
        })
    
        return {type:SET_FILTRADES, payload:resultat}

    }
    

}