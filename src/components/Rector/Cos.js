import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import _ from 'lodash';

//Components
import Searcher from '../Searcher/Searcher';
import Arxiu from './Arxiu/Arxiu';
import { Grid,Typography, CircularProgress,Paper,Slide, Card, CardActionArea } from '@material-ui/core';

//Animacions
import Fade from '@material-ui/core/Fade';

//Accions
import {setCurrentRector} from '../../state/actions';


// Estil
const styles = theme => ({    
    
    histories:{
      marginTop:20
    },
    cercador:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop:30,
        marginLeft: "2.5%",
        width:"95%",
        
    },
    reproductor:{
        width:"100%",
        display:"hidden"
    },
    graellaRector:{
        marginTop:20
    },
    toolbar:theme.mixins.toolbar,
    carregador:{
        marginTop:"5em",
        justify:"center",
        alignContent:"center",
        alignItems:"center"
    },
    esdevenimentBu:{
      fontFamily: theme.typography.fontFamily,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1em 1em 1em 1em",
      cursor: "pointer",
      marginTop: "1em",
      width: "100%",
      fontSize: 18
    }

   
});

class Cos extends Component {

    state= {
        current:"",
        ready:false,
        width:100,
        playerOptions : { }
    }

    //REFS

    //Ref for the player's container
    containerReproductor = React.createRef();

    //Ref for the player
    reproductor = React.createRef();
 
    //Navigate to a given second of the video
    navigateTo = (s) => {
        console.log('Navegant',s);    
        this.reproductor.current.internalPlayer.seekTo(s);  
    }

    //Pause video
    pause = () => {
        console.log('pausa!', this.reproductor.current.internalPlayer);
        this.reproductor.current.internalPlayer.pauseVideo();
        
    }

    //Returns the 16:9 height for a given width
    setzeNou = (amplada) =>{
        return amplada*9/16
    }
    
    //Generates an event list for the current video
    eventsFactory = (evs) => {
        return evs.map((ev,i)=>{
            return(<Slide in={true} timeout={{enter:i*100}}><CardActionArea><Paper className={this.props.classes.esdevenimentBu} elevation={6} key={i} onClick={()=>this.navigateTo(ev.sec)}>{ev.txt}</Paper></CardActionArea></Slide>)
        })
    }

    componentDidMount(){       

        //Setting the player size       
        const ampladaPare = this.containerReproductor.current.clientWidth;           
        const ampladaPlayer = window.innerWidth > 960 ? ampladaPare : this.containerReproductor.current.parentNode.clientWidth/1.075;
        

        //GETTING URL PARAMS

        //Getting rector
        const {id} = this.props.match.params;

        //Getting seconds
        const secs = parseInt(this.props.match.params.secs);

        //Setting Current Rector
        this.props.dispatch(setCurrentRector(id));
        const current = _.find(this.props.videos,{id});
        this.setState({current})   
        
        //IF there're seconds on the params, navigate to there 
        if(secs!==0 && !isNaN(secs)){  
                   
           this.setState({width:ampladaPlayer, playerOptions:{             
               width: ampladaPlayer,        
               height: this.setzeNou(ampladaPlayer),                      
               playerVars:{                 
                   autoplay: 1,            
                   modestbranding:1,
                   widget_referrer:"Web Rectors i rectores",
                   rel: 0,
                   color:'white',
                   iv_load_policy:3,
                   start:secs
               }
              }
            });    

         }else{
            
            this.setState({width:ampladaPlayer, playerOptions:{             
                width: ampladaPlayer,        
                height: this.setzeNou(ampladaPlayer),                      
                playerVars:{  
                    start:1,               
                    autoplay: 1,            
                    modestbranding:1,
                    widget_referrer:"Web Rectors i rectores",
                    rel: 0,
                    color:'white',
                    iv_load_policy:3
                    
                }
               }
            });

         }
     }
      
    onReady = () =>{
       
        this.setState({ready:true})

    }

    render(){
           
        //Check viewport size
        const isBigScreen = (size) => size > 960; 

        //Classes
        const { classes } = this.props;

        //Current Video
        const current = _.find(this.props.videos.videos,{'id':this.props.match.params.id});
                
        if(isBigScreen(window.innerWidth)){

            return(<Grid container spacing={24} direction="row" justify="space-between" alignItems="flex-start" alignContent="flex-start" className={classes.graellaRector}>
                <div className={classes.toolbar}></div>                     
                    <div ref={this.containerReproductor} className="reproductor">
                        <div className={classes.toolbar}></div>    
                            {!this.state.ready &&<Grid className={classes.carregador}><CircularProgress size={80} /></Grid>}
                            <Fade in={this.state.ready} timeout={{enter:1000}}> 
                                <div>
                                 <YouTube onPlay={this.onReady} ref={this.reproductor} onStateChange={this.onStateChange} videoId={current.yt} opts={this.state.playerOptions} onReady={this._onReady}></YouTube>
                                </div>
                            </Fade>  
                        <Searcher w={this.state.width}/>
                        <Arxiu pausaVideoGeneral = {this.pause}  in={this.state.ready}/>                        
                    </div>                            
                    <div className="histories">
                    <div className={classes.toolbar}></div>    
                        <Typography variant="h3" color="primary" align="center">
                            Temes d'aquest mandat
                        </Typography>
                        {this.eventsFactory(this.props.histories.filtrades)}
                    </div>
                </Grid>)

        }else{

            return(<Grid container spacing={24} direction="column" justify="space-between" alignItems="flex-start" alignContent="flex-start" className={classes.graellaRector}>
                <div className={classes.toolbar}></div>     
                    <div ref={this.containerReproductor} className="reproductor">
                    <div className={classes.toolbar}></div>    
                        <YouTube ref={this.reproductor} videoId={current.yt} opts={this.state.playerOptions} onReady={this._onReady}></YouTube>
                        <Searcher w={this.state.width}/>
                    </div>            
                    <div className="histories">
                        <Typography variant="h3" color="primary" align="center">
                            Temes d'aquest mandat
                        </Typography>
                        {this.eventsFactory(this.props.histories.filtrades)}
                    </div>
                    <Arxiu pausaVideoGeneral = {this.pause}  in={this.state.ready}/>
                </Grid>)

        }
        
    }
}


function mapStateToProps(state){
    const {videos,histories} = state;
    return {videos,histories};
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Cos)))