import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import DesktopHeader from './Capcaleres/DesktopHeader';
import MobileHeader from './Capcaleres/MobileHeader';

const styles = {
    root: {
      flexGrow: 1,
    },
    cap:{
        marginLeft:25
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      wikiBu: {        
        width: 15,
        height: 15,
      },
      mandat:{
          fontFamily:"Hubot Sans, sans-serif"
      }
  };




class Capcalera extends Component{

    aintBigScreen = (size) => size <= 960; 

    render(){        
        //Checks if proper Rector is ready
        if(this.props.currentRector){

            //Checks viewport size   
            if(this.aintBigScreen(window.innerWidth)){

                return(<MobileHeader currentRector={this.props.currentRector}/>)

            }else{

                return(<DesktopHeader currentRector={this.props.currentRector}/>)

            }

                     
            

        }else{
            return(<div>Carregant...</div>)
        }

    }
}

function mapStateToProps(state){   
    const {currentRector} = state.rectors;    
    return {currentRector};
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Capcalera)));