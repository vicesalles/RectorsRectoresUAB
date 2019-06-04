import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Fab} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';


import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,   
    WhatsappShareButton, 
    TelegramShareButton,
    RedditShareButton,    
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon, 
    RedditIcon,
    EmailIcon,
  } from 'react-share';



const estilShare = theme =>({
    botoShare:{
        position:"fixed",
        bottom: 15,
        right: 15,
        backgroundColor: theme.palette.primary.main
    },
    closeButton:{
        height:32,
        width:32,
        color: "#fff"
    },
    fab: {
       zIndex:99,
      }
}) 

class Share extends Component {
    state={
        currentUrl:"http://vicesalles.me",
        currentTitle:"Rectors i rectores de la UAB",
        desplegat:false
    }

    clickHandler = () =>{

        const desplegat = !this.state.desplegat;

        this.setState({desplegat})

    }

    componentDidMount(){
        //Setting
        console.log(this.props);
        const currentUrl = `http://localhost:3000/#${this.props.location.pathname}`
        this.setState({currentUrl});        

    }
    

    render(){

        const {classes} = this.props;

        if(this.state.desplegat){
            return(<Grid className={classes.botoShare}>
                <CloseIcon onClick={this.clickHandler} className={classes.closeButton}/>
                <WhatsappShareButton children={<WhatsappIcon/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} url={this.state.currentUrl}/>
                <TelegramShareButton children={<TelegramIcon/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} url={this.state.currentUrl}/>  
                <TwitterShareButton children={<TwitterIcon/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} hashtags={['50anysUAB','UAB']} url={this.state.currentUrl}/>  
                <FacebookShareButton children={<FacebookIcon/>} onShareWindowClose={this.clickHandler} quote={this.state.currentTitle} url={this.state.currentUrl}/> 
                <LinkedinShareButton children={<LinkedinIcon/>} onShareWindowClose={this.clickHandler} url={this.state.currentUrl}/> 
                <RedditShareButton children={<RedditIcon/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} url={this.state.currentUrl}/> 
                <EmailShareButton children={<EmailIcon/>} onShareWindowClose={this.clickHandler} subject={this.state.currentTitle} url={this.state.currentUrl}/>   
                      
            </Grid>)
        }else{
          
              return(
                
                <Fab onClick={this.clickHandler} color="primary" aria-label="Compartir" className={classes.botoShare}>
                    <SendIcon/>
                </Fab>
                  
                )
        }

       
    }
}



export default withRouter(withStyles(estilShare)(Share));