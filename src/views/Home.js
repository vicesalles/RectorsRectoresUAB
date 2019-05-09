import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

//Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CartaRector from '../components/Home/CartaRector';
import HistoriesGeneral from '../components/HistoriesGeneral/HistoriesGeneral';
import Searcher from '../components/Searcher/Searcher';

//Accions
import {globalHistories} from '../state/actions';

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
      },
      histories:{
        marginTop:20
      },
      cercador:{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop:30,
          marginLeft: 0,
          width:"100%",
          
      }
  
     
  };

class Home extends Component{

    //Crea les Cartes dels Rectors
    factory = (rectors) =>{

        return rectors.map(r=>{
            return <CartaRector rector={r}/>
        })

    }

    componentDidMount(){
        //Estableix es histories
        this.props.dispatch(globalHistories());
    }

    render(){
        const { classes } = this.props;
        return (<Grid container>
                    <AppBar position="fixed">
                        <Toolbar variant="regular">   
                            <Typography variant="h5" color="inherit" align="left">
                                Rectors i Rectores de la UAB: 50 anys.
                            </Typography>                                      
                        </Toolbar>
                    </AppBar>               
                    <Grid container spacing={24} direction="row" justify="center" alignItems="center" alignContent="center" className={classes.graellaRectors}>
                        {this.factory(this.props.rectors)}
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center" alignContent="center" className={classes.cercador}>
                            <Typography variant="h2" color={"primary"} align="left">
                                Cerca per temes
                            </Typography> 
                        <Searcher/>
                    </Grid>
                    <Grid container className={classes.histories}                    
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
                       
                        <HistoriesGeneral/>
                    </Grid>

                </Grid>)
    }

}

function mapStateToProps(state){
    const {rectors} = state;   
    return rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Home)));