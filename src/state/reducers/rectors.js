const initialState ={
    serra:{
        id:0,
        url:"serra",
        nom:"Antoni",
        cognoms:"Serra Ramoneda",
        mandat:"28.3.1980 – 18.4.1985",
        imatgeActual:"",
        imatgeHistorica:"",
        vikipedia:"https://ca.wikipedia.org/wiki/Antoni_Serra_i_Ramoneda"
    },
    valles:{
        id:"",
        url:"valles",
        nom:"Josep Maria",
        cognoms:"Vallès Casadevall",        
        mandat:"20.3.1990 – 25.3.1994",
        imatgeActual:"",
        imatgeHistorica:"",
        vikipedia:"https://ca.wikipedia.org/wiki/Josep_Maria_Vall%C3%A8s_i_Casadevall"
    }
}

function rectors(state=initialState,action){
    const {type,payload} = action;
    switch(type){
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
        url:"",
        mandat:"",
        imatgeActual:"",
        imatgeHistorica:"",
        vikipedia:""
    }

*/