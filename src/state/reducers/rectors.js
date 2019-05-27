import {SET_CURRENT_RECTOR} from '../actions/types';


const initialState ={
    currentRector: null,
    rectors:[
        {
            id:0,        
            nom:"Antoni",
            cognoms:"Serra Ramoneda",
            url:"serra",
            mandat:"28.3.1980 – 18.4.1985",
            anys:[1980,1985],
            entrevista:"",
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            events:[],
            vikipedia:"https://ca.wikipedia.org/wiki/Antoni_Serra_i_Ramoneda"
        },
        {
            id:1,
            nom:"Ramon",
            cognoms:"Pascual de Sans",   
            url:"pascual",     
            mandat:"13.2.1986 – 20.3.1990",
            anys:[1986,1990],
            entrevista:"",
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            events:[],
            vikipedia:"https://ca.wikipedia.org/wiki/Ramon_Pascual_de_Sans"
        },
        {
            id:2,        
            nom:"Josep M.",
            cognoms:"Vallès Casadevall",  
            url:"valles",      
            mandat:"20.3.1990 – 25.3.1994",
            anys:[1990,1994],
            entrevista:"",
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            events:[],
            vikipedia:"https://ca.wikipedia.org/wiki/Josep_Maria_Vall%C3%A8s_i_Casadevall"
        },
        {
            id:3,        
            nom:"Carles",
            cognoms:"Solà Ferrando",  
            url:"sola",      
            mandat:"25.3.1994 – 21.3.2002",
            entrevista:"",
            anys:[1994,2002],
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            events:[],
            vikipedia:"https://ca.wikipedia.org/wiki/Carles_Sol%C3%A0_i_Ferrando"
        },
        {
            id:4,        
            url: "ferrer", 
            nom:"Lluís",
            cognoms:"Ferrer Caubet",
            mandat:"21.3.2002 – 14.1.2009",
            anys:[2002,2009],
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            bio:"",
            vikipedia:"https://ca.wikipedia.org/wiki/Llu%C3%ADs_Ferrer_i_Caubet",
        },
        {
            id:5,        
            nom:"Ana",
            cognoms:"Ripoll Aracil",  
            url:"ripoll",
            anys:[2009,2012],      
            mandat:"14.1.2009 – 22.6.2012",
            entrevista:"",
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            events:[],
            vikipedia:"https://ca.wikipedia.org/wiki/Ana_Ripoll_Aracil"
        },
        {
            id:6,        
            nom:"Ferran",
            cognoms:"Sancho Pifarré",  
            url:"sancho", 
            anys:[2012,2016],     
            mandat:"22.6.2012 – 6.6.2016",
            entrevista:"",
            videos:[{id:"BWwy6oRwTEU",titol:"III Jocs Intercontinentals d'Armes Prehistòriques (1993)"}],
            events:[],
            vikipedia:"https://ca.wikipedia.org/wiki/Ferran_Sancho_Pifarr%C3%A9"
        }]
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


/*

{
        id:"",
        nom:"",
        cognoms:"",       
        mandat:"",
        imatgeActual:"",
        imatgeHistorica:"",
        vikipedia:""
    }

*/