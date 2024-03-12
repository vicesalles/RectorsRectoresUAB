import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Fab} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';


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

class Share extends Component {
    state={
        currentUrl:"https://www.uab.cat/rectorsirectores/#/",
        currentTitle:"Rectors i rectores de la UAB",
        desplegat:false
    }

    clickHandler = () =>{

        const desplegat = !this.state.desplegat;
        this.setState({desplegat})

    }

    componentDidMount(){        
        //Setting current URL        
        const currentUrl = window.location.href;
        this.setState({currentUrl});    
            

    }
    

    render(){

        const {classes} = this.props;

        if(this.state.desplegat){
            return(<Grid className={classes.botoShare}>                
                <WhatsappShareButton children={<WhatsappIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} url={this.state.currentUrl}/>
                <TelegramShareButton children={<TelegramIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} url={this.state.currentUrl}/>  
                <TwitterShareButton children={<TwitterIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} hashtags={['RectorsRectores','UAB']} url={this.state.currentUrl}/>  
                <FacebookShareButton children={<FacebookIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} quote={this.state.currentTitle} url={this.state.currentUrl}/> 
                <LinkedinShareButton children={<LinkedinIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} url={this.state.currentUrl}/> 
                <RedditShareButton children={<RedditIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} title={this.state.currentTitle} url={this.state.currentUrl}/> 
                <EmailShareButton children={<EmailIcon iconBgStyle={{fill:"#40ae33"}}/>} onShareWindowClose={this.clickHandler} subject={this.state.currentTitle} url={this.state.currentUrl}/>   
                <CloseIcon onClick={this.clickHandler} className={classes.closeButton}/>      
            </Grid>)
        }else{
          
              return(
                
                <Fab onClick={this.clickHandler} color="primary" aria-label="Compartir" className={classes.botoShare}>
                    <ShareIcon/>
                </Fab>
                  
                )
        }

       
    }
}

// ESTIL
const estilShare = theme =>({
    botoShare:{
        position:"fixed",
        bottom: 15,
        right: 15,
        backgroundColor: theme.palette.primary.main,
        color:"#FFFFFF",
        zIndex:99,
    },
    closeButton:{
        height:32,
        width:32,
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        color: "#fff"
    },
    fab: {
       zIndex:99,
      }
}) 


export default withRouter(withStyles(estilShare)(Share));