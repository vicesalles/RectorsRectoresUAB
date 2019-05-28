import React,{Component} from 'react';
import {withStyles} from '@material-ui/core';

//Components
import {Grid} from '@material-ui/core/';
import CartaVideo from './CartaVideo';


const estilGraella = {

    graella:{
        flex:4,
     paddingLeft: "1em",
     flexWrap:"wrap"
    }

}

class GraellaArxiu extends Component{

    //Create
    cardFactory = (vids) => {
        return vids.map((v,i)=><CartaVideo key={`Carta-${i}`} animacio={i*500} video={v}/>)
    }

    render(){
        const {classes} = this.props;
        return( <Grid className={classes.graella} container spacing={24} direction="row" justify="flex-start" alignContent="center">
                    {this.cardFactory(this.props.videos)}
                </Grid>)
    }
}

export default withStyles(estilGraella)(GraellaArxiu);