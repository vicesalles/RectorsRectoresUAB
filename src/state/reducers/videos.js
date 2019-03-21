const initialState = {
    currentVideo:"z",
    videos:[
        {id:"z",yt:"cwQgjq0mCdE",events:[

            {
                sec:77,
                txt:"I'm a sick fuck"
            },
            {
                sec:104,
                txt:"Bitch"
            }

        ]}
    ]
}

function videos(state=initialState,action){
    const{type,payload} = action;
    switch(type){
        default:
            return state;
    }
}

export default videos;