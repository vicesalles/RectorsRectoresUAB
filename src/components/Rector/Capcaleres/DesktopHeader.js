import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';

//Estil

const styles = {
    root: {
      flexGrow: 1,
    },
    cap:{
        marginLeft:10
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
    mediumAvatar: {
        margin: 10,
        width: 30,
        height: 30,
      },
      wikiBu: {        
        width: 17,
        height: 17,
      },
      containerWiki:{
        marginLeft:10
      },
      nomRector:{
        fontSize: 18,
        fontFamily:"Hubot Sans, sans-serif",
        fontWeight:"bold",
        marginBottom: 0,
        paddingBottom: 5        
      },
      mandat:{
          fontFamily:"Hubot Sans, sans-serif",
          marginTop: 1
      }
  };

class DesktopHeader extends Component {
    
    render(){

        //Classes
        const { classes } = this.props;

        return(<AppBar position="fixed">
        <Toolbar variant="dense">  
                <IconButton href="./">
                    <HomeIcon className={classes.mediumAvatar}/>             
                </IconButton>                   
                <Avatar alt={this.props.currentRector.cognoms} src={`./img/l/${this.props.currentRector.url}.jpg`} className={classes.bigAvatar}/>
                <Grid className={classes.cap}>
                    <Grid container direction="row">                    
                        <Grid container direction="column">
                            <Typography variant="h1" className={classes.nomRector} color="inherit" align="left">
                                {`${this.props.currentRector.nom} ${this.props.currentRector.cognoms}`}
                            </Typography>   
                            <Typography component="p" color="inherit" align="left">
                            {this.props.currentRector.mandat}
                            </Typography>
                        </Grid>
                        
                    </Grid> 
                </Grid>     
                <Grid className={classes.containerWiki}>
                            <IconButton size="small" href={this.props.currentRector.vikipedia} target="_blank">
                                <Avatar alt="Wikipedia" src={`./img/bu/wiki.png`} className={classes.wikiBu}/>                 
                            </IconButton>   
                </Grid>  
        </Toolbar>
    </AppBar> )


    }

}


export default withRouter(withStyles(styles)(DesktopHeader));