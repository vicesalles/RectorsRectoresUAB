import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

//Components Material Ui
import {Card,CardActionArea,CardMedia,CardContent,Typography,Fade} from '@material-ui/core/';
import LaunchRounded from '@material-ui/icons/LaunchRounded';

class CartaVideo extends Component {
 
    render(){
        
        const {video,classes} = this.props;
        const { id,titol } = video;
        
        return(
            <Fade in={this.props.in} timeout={{enter:this.props.animacio}}>
                    <CardActionArea className={classes.card} onClick={()=>{this.props.pausaVideoGeneral()}} href={`https://www.youtube.com/watch?v=${id}&sub_confirmation=1`} target="_blank">
                        <Card>                           
                                <CardMedia
                                    className={classes.media}
                                    image={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                    title={titol}
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {titol}
                                    </Typography> <LaunchRounded/>                      
                                </CardContent>
                                        
                        </Card>
                    </CardActionArea>    
                    </Fade>)
    }
}

// Estil
const estilVideoArxiu = {    
    card: {
        maxWidth: 345,
        marginRight: 15,
        flex:1
      },
      media: {
        minHeight: 180,
      },
      titolSeccio:{
          height:180,
          fontSize:24,
          marginTop:12,
          marginBottom: 12
      }
    };

export default withStyles(estilVideoArxiu)(CartaVideo);