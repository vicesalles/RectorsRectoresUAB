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
        return vids.map((v,i)=>
            <CartaVideo 
                pausaVideoGeneral={this.props.pausaVideoGeneral} 
                key={`Carta-${i}`} 
                animacio={i*1000} 
                in={this.props.in} 
                video={v}/>
           )
    }

    render(){        
        const {classes} = this.props;
        return( <Grid className={classes.graella} container justifyContent="flex-start" alignContent="center">
                    {this.cardFactory(this.props.videos)}
                </Grid>)
    }
}

export default withStyles(estilGraella)(GraellaArxiu);