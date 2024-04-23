import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Typography,Fade,CardMedia,CardActionArea,CardContent,Card} from '@material-ui/core';

//Estil
const styles = {    
  
    bigAvatar: {
      margin: 10,
      width: 90,
      height: 90,
    },
    fitxaRector:{
        margin:10,
        minWidth:250,
        maxWidth:300,
        padding:10,
        flexBasis:"25 %"
    },
    fotoRector: {
      minHeight:250
    },
    nomRector:{
        fontSize:18,
        marginTop:12,
        fontFamily:"Hubot Sans, sans-serif",
        fontWeight:"bold"
    },
    mandat:{
        marginTop:12,
        fontSize:16
    },
    cartaRector:{
        height:370,              
        "&:hover":{         
            outline:"solid 6px #008539",  
        } 
    }

    
   
};

class CartaRector extends Component{    

    render(){

        const {classes} = this.props;
        const r = this.props.rector;
        
        return(<Grid item lg={3} md={6} xs={12} className={classes.fitxaRector}>       
            <Fade in={true} timeout={{enter:this.props.animacio}} >  
            <CardActionArea className={classes.areaCartaRector} href={`./#/r/${r.url}/`}>    
                <Card elevation={6} className={classes.cartaRector}>             
                          
                        <CardMedia image={`./img/xl/${r.url}.jpg`} title={r.cognoms} className={classes.fotoRector}/>                
                        
                        <CardContent>
                            <Typography variant="h2" className={classes.nomRector}>
                                {r.nom} {r.cognoms}
                            </Typography>
                            <Typography variant="h3" className={classes.mandat}>
                                {r.mandat}
                            </Typography> 
                        </CardContent>
                    
                </Card>
                </CardActionArea>
                </Fade>
            </Grid>)
    }
}

export default withRouter(withStyles(styles)(CartaRector));