import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

//Components
import {Grid,Typography,Fade} from '@material-ui/core/';
import GraellaArxiu from './GraellaArxiu';

class Arxiu extends Component {
    
    render(){
        
        const { classes,currentRector } = this.props;
        
        if(currentRector!==null){
            return(<Fade in={this.props.in} timeout={{enter:this.props.animacio}}><Grid container direction='column'>
                <Typography className={classes.titolSeccio} color="primary" align="left">
                Videos destacats del mandat
                </Typography>
                <GraellaArxiu pausaVideoGeneral={this.props.pausaVideoGeneral} videos={currentRector.videos} in={this.props.in}/>
            </Grid></Fade>)
        }else{
            return(<Grid>
                <Typography className={classes.titolSeccio} color="primary" align="left">
                   
                </Typography>                
            </Grid>)
        }
        
    }
}

// Estil
const estilArxiu = {    
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      titolSeccio:{
          fontSize:18,
          marginTop:12,          
          paddingBottom:18,
          fontFamily:"Hubot Sans, sans-serif",
          fontWeight:"bold"
      }
    };

function mapStateToProps(state){    
    return state.rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(estilArxiu)(Arxiu)));