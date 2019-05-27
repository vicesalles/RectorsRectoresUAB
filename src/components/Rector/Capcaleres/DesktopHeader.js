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
        marginLeft:25
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
      wikiBu: {        
        width: 15,
        height: 15,
      },
      mandat:{
          fontFamily:"Roboto"
      }
  };

class DesktopHeader extends Component {
    
    render(){

        //Classes
        const { classes } = this.props;

        return(<AppBar position="static">
        <Toolbar variant="dense">  
                <IconButton href="/">
                    <HomeIcon className={classes.bigAvatar}/>             
                </IconButton>                   
                <Avatar alt={this.props.currentRector.cognoms} src={`/img/l/${this.props.currentRector.url}.jpg`} className={classes.bigAvatar}/>
                <Grid className={classes.cap}>
                    <Grid container direction="row" justify="flex-start">
                        <Typography variant="h4" color="inherit" align="left">
                            {`${this.props.currentRector.nom} ${this.props.currentRector.cognoms}`}
                        </Typography>   
                        <IconButton size="small" href={this.props.currentRector.vikipedia} target="_blank">
                            <Avatar alt="Wikipedia" src={`/img/bu/wiki.png`} className={classes.wikiBu}/>                 
                        </IconButton>
                    </Grid> 
                    <Typography component="p" color="inherit" align="left">
                        {this.props.currentRector.mandat}
                    </Typography>
                </Grid>      
        </Toolbar>
    </AppBar> )


    }

}


export default withRouter(withStyles(styles)(DesktopHeader));