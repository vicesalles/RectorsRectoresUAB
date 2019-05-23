import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

//Estil

const styles = {    
  
      bigAvatar: {
      margin: 10,
      width: 90,
      height: 90,
    },
    fitxaRector:{
        margin:10,
        minWidth:300,
        padding:10

    },
    fotoRector: {
      height: 400,
    }
   
};

class CartaRector extends Component{    

    render(){

        const {classes} = this.props;
        const r = this.props.rector;

        return(<Grid item lg={3} md={6} xs={12}>            
                <Card>                    
                    <CardMedia image={`/img/xl/${r.url}.jpg`} title={r.cognoms} className={classes.fotoRector}/>                
                    <CardContent>
                        <Typography variant="h4">
                            {r.nom} {r.cognoms}
                        </Typography>
                        <Typography variant="h5">
                            {r.mandat}
                        </Typography> 
                    </CardContent>
                    <CardActions>
                        <Button size="large" href={`/#/r/${r.url}/`} color="primary">Entrevista</Button>
                        <Button size="large" href={`${r.vikipedia}`} target="_blank" color="primary">Viquipedia</Button>
                    </CardActions>
                </Card>
            </Grid>)
    }
}

export default withRouter(withStyles(styles)(CartaRector));