import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import YouTube from 'react-youtube';

//Components
import Capcalera from '../components/Reproductor/Capcalera';

class Rector extends Component{

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
        console.log('reproductor',this.reproductor);
    }

    render(){
        //Current Video
        const current = this.props.videos[0];
        return(
        <div className="rector">
            <Capcalera/>
            <div className="reproductor">
            <YouTube ref={this.reproductor} videoId={current.yt} opts={this.playerOptions} onReady={this._onReady}/>
            </div>
            <div className="histories">
                {this.eventsFactory(current.events)}
            </div>
        </div>
        )
    }

  


}

function mapStateToProps(state){
    const {videos} = state;
    return videos;
}

export default withRouter(connect(mapStateToProps)(Rector))