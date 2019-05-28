import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

//Carta
import {CardMedia,CardActionArea,CardContent,Card} from '@material-ui/core';

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
        padding:10

    },
    fotoRector: {
      height: 400,
    },
    nomRector:{
        fontSize:18,
        fontWeight:"bold"
    },
    mandat:{
        fontSize:14
    }
   
};

class CartaRector extends Component{    

    render(){

        const {classes} = this.props;
        const r = this.props.rector;
        
        return(<Grid item lg={3} md={6} xs={12} className={classes.fitxaRector}>       
            <Fade in={true} timeout={{enter:this.props.animacio}} >     
                <Card>             
                    <CardActionArea href={`/#/r/${r.url}/`}>       
                        <CardMedia image={`/img/xl/${r.url}.jpg`} title={r.cognoms} className={classes.fotoRector}/>                
                        
                        <CardContent>
                            <Typography variant="h4" className={classes.nomRector}>
                                {r.nom} {r.cognoms}
                            </Typography>
                            <Typography variant="h5" className={classes.mandat}>
                                {r.mandat}
                            </Typography> 
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Fade>
            </Grid>)
    }
}

export default withRouter(withStyles(styles)(CartaRector));