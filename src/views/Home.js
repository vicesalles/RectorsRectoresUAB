import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import CartaRector from '../components/Home/CartaRector';


//Estil

const styles = {
    
      cap:{
          marginLeft:25
      },
      menuButton: {
        marginLeft: -18,
        marginRight: 10,
      },
      graellaRectors:{       
        marginTop:90,
        minWidth:400
      },
        bigAvatar: {
        margin: 10,
        width: 90,
        height: 90,
      }
  
     
  };

class Home extends Component{

    //Crea les Cartes dels Rectors
    factory = (rectors) =>{

        return rectors.map(r=>{
            return <CartaRector rector={r}/>
        })

    }

    render(){
        const { classes } = this.props;
        return (<Grid container>
                    <AppBar position="fixed">
                        <Toolbar variant="regular">   
                            <Typography variant="h5" color="inherit" align="left">
                                50è Aniversari de la Universitat Autònoma de Barcelona
                            </Typography>                                      
                        </Toolbar>
                    </AppBar>               
                    <Grid container spacing={24} direction="row" justify="center" alignItems="center" alignContent="center" className={classes.graellaRectors}>
                        {this.factory(this.props.rectors)}
                    </Grid>
                </Grid>)
    }

}

function mapStateToProps(state){
    const {rectors} = state;   
    return rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Home)));