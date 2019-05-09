import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import YouTube from 'react-youtube';
import _ from 'lodash';

//Components
import Capcalera from '../components/Reproductor/Capcalera';
import Searcher from '../components/Searcher/Searcher';

//Accions
import {setCurrentRector} from '../state/actions/';
import Footer from '../components/Footer/Footer';

class Rector extends Component{

    state= {
        current:""
    }

    //Ref for the player
    reproductor = React.createRef();
    
    //Player Options
    playerOptions = {
        width:window.innerWidth/1.5,
        height:(window.innerWidth*9/16)/1.5,
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
        //Current Video
        const current = _.find(this.props.videos.videos,{'id':this.props.match.params.id});
        return(
        <div className="rector">
            <Capcalera/>
            <div className="reproductor">
            <YouTube ref={this.reproductor} videoId={current.yt} opts={this.playerOptions} onReady={this._onReady}/>
            <Searcher/>
            </div>            
            <div className="histories">
                {this.eventsFactory(this.props.histories.filtrades)}
            </div>
            <Footer/>
        </div>
        )
    } 


}

function mapStateToProps(state){
    const {videos,histories} = state;
    return {videos,histories};
}

export default withRouter(connect(mapStateToProps)(Rector))