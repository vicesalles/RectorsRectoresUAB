import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

//Components
import {Grid} from '@material-ui/core/';
import { Typography } from '@material-ui/core';
import GraellaArxiu from './GraellaArxiu';

// Estil
const estilArxiu = {    
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      titolSeccio:{
          fontSize:24,
          marginTop:12,
          marginBottom: 24
      }
    };

class Arxiu extends Component {
    
    render(){
        
        const { classes,currentRector } = this.props;
        
        if(currentRector!==null){
            return(<Grid>
                <Typography className={classes.titolSeccio} color="primary" align="left">
                   Moments en vídeo
                </Typography>
                <GraellaArxiu pausaVideoGeneral={this.props.pausaVideoGeneral} videos={currentRector.videos} in={this.props.in}/>
            </Grid>)
        }else{
            return(<Grid>
                <Typography className={classes.titolSeccio} color="primary" align="left">
                    Moments en vídeo
                </Typography>                
            </Grid>)
        }
        
    }
}

function mapStateToProps(state){    
    return state.rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(estilArxiu)(Arxiu)));