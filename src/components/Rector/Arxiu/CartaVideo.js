import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

//Components
import {Card,CardActionArea,CardMedia,CardContent} from '@material-ui/core/';
import Fade from '@material-ui/core/Fade';
import { Typography } from '@material-ui/core';
import LaunchRounded from '@material-ui/icons/LaunchRounded';

// Estil
const estilVideoArxiu = {    
    card: {
        maxWidth: 345,
        marginRight: 15,
        flex:1
      },
      media: {
        height: 140,
      },
      titolSeccio:{
          fontSize:24,
          marginTop:12,
          marginBottom: 12
      }
    };

class CartaVideo extends Component {
    
    render(){
        
        const {video,classes} = this.props;
        const { id,titol } = video;
        
        return(
            <Fade in={true} timeout={{enter:this.props.animacio}}>
                    <Card className={classes.card}>
                        <CardActionArea href={`https://www.youtube.com/watch?v=${id}&sub_confirmation=1`} target="_blank">
                            <CardMedia
                                className={classes.media}
                                image={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                                title={titol}
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {titol}
                                </Typography> <LaunchRounded/>                      
                            </CardContent>
                        </CardActionArea>                  
                    </Card>
                    </Fade>)
    }
}

export default withStyles(estilVideoArxiu)(CartaVideo);