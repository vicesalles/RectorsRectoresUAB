import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import _ from 'lodash';

//Components
import Capcalera from '../components/Reproductor/Capcalera';
import Searcher from '../components/Searcher/Searcher';
import Grid from '@material-ui/core/Grid';
import {CardMedia} from '@material-ui/core/CardMedia';

//Accions
import {setCurrentRector} from '../state/actions/';
import Footer from '../components/Footer/Footer';


// Estil

const styles = {
    
    cap:{
        marginLeft:25
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
    graellaRector:{   
      flex:4,    
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
        marginLeft: "2.5%",
        width:"95%",
        
    }

   
};

class Rector extends Component{

    state= {
        current:""
    }

    //REFS

    //Ref for the player's container
    containerReproductor = React.createRef();

    //Ref for the player
    reproductor = React.createRef();

    playerOptions = {             
        playerVars:{
            autoplay: 1,
            modestbranding:1,
            rel: 0,
            color:'white',
            iv_load_policy:3
        }
    }

    //Navigate to a given second of the video
    navigateTo = (s) => {
        this.reproductor.current.internalPlayer.seekTo(s);    
    }

    //Returns the 16:9 height for a given width
    setzeNou = (amplada) =>{
        return amplada*9/16
    }
    
    //Generates an event list for the current video
    eventsFactory = (evs) => {
        return evs.map((ev,i)=>{
            return(<button className="esdevenimentBu" key={i} onClick={()=>this.navigateTo(ev.sec)}>{ev.txt}</button>)
        })
    }

    componentDidMount(){       

        console.log('Amplada container',this.containerReproductor.current.clientWidth);
       const ampladaPare = this.containerReproductor.current.clientWidth;
        //Setting the player size
         //Player Options
        this.playerOptions = {
            width: ampladaPare,        
            height: this.setzeNou(ampladaPare),
            playerVars:{
                autoplay: 1,
                modestbranding:1,
                rel: 0,
                color:'white',
                iv_load_policy:3
            }
        }
        const id = this.props.match.params.id;
        const secs = this.props.match.params.secs;
        this.props.dispatch(setCurrentRector(id));
        const current = _.find(this.props.videos,{id});
        this.setState({current})        
        if(secs!==0 && secs!==undefined){
            this.navigateTo(secs);
        }
    }

    render(){

        //Classes
        const { classes } = this.props;

        //Current Video
        const current = _.find(this.props.videos.videos,{'id':this.props.match.params.id});
        return(
        <div className="rector">
            <Capcalera/>
            <Grid container spacing={24} direction="row" justify="space-between" alignItems="flex-start" alignContent="flex-start" className={classes.graellaRector}>
                <div ref={this.containerReproductor} className="reproductor">
                    <YouTube ref={this.reproductor} videoId={current.yt} opts={this.playerOptions} onReady={this._onReady}></YouTube>
                    <Searcher w={window.innerWidth/1.5}/>
                </div>            
                <div className="histories">
                    {this.eventsFactory(this.props.histories.filtrades)}
                </div>
            </Grid>
           
            <Footer/>
        </div>
        )
    } 


}

function mapStateToProps(state){
    const {videos,histories} = state;
    return {videos,histories};
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Rector)))