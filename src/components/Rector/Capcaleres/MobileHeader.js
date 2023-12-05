import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
//Material UI components
import {AppBar,Toolbar,Typography,IconButton,Avatar,Grid} from '@material-ui/core';
//Icon
import HomeIcon from '@material-ui/icons/Home';

class MobileHeader extends Component {

    render(){
         //Classes
         const { classes } = this.props;

         return(<AppBar position="fixed">
         <Toolbar variant="dense" className={classes.barraMobil}>  
                 <IconButton href="./">
                     <HomeIcon className={classes.smallAvatar}/>             
                 </IconButton>             
                 <IconButton size="small" href={this.props.currentRector.vikipedia} target="_blank">
                    <Avatar alt={this.props.currentRector.cognoms} src={`./img/l/${this.props.currentRector.url}.jpg`} className={classes.smallAvatar}/>               
                 </IconButton>      
                 
                 <Grid className={classes.cap}>
                     <Grid container direction="row" justify="flex-start">
                         <Typography variant="h1" color="inherit" align="left">
                             {`${this.props.currentRector.nom} ${this.props.currentRector.cognoms}`}
                         </Typography>  
                    </Grid>                      
                 </Grid>      
         </Toolbar>
     </AppBar> )
    }

  }

  //Estil

const styles = {
  root: {
    flexGrow: 1,
  },
  cap:{
      marginLeft:15,
      color:"#FFFFFF"
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  smallAvatar: {       
      width: 30,
      height: 30,
    },
    wikiBu: {        
      width: 15,
      height: 15,
    },
    mandat:{
        fontFamily:"Roboto"
    },
    barraMobil:{
      marginLeft:0,
      paddingLeft:0
    }
};

  export default withRouter(withStyles(styles)(MobileHeader));