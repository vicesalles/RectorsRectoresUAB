import React,{Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

//Components
import {AppBar,Toolbar,Typography,Grid} from '@material-ui/core/';
import CartaRector from '../components/Home/CartaRector';
import HistoriesGeneral from '../components/HistoriesGeneral/HistoriesGeneral';
import Searcher from '../components/Searcher/Searcher';
import Footer from '../components/Footer/Footer';
import CookieConsent from "react-cookie-consent";

//Accions
import {globalHistories} from '../state/actions';

//Estil
const styles = theme => ({
    
      cap:{
          marginLeft:25
      },
      menuButton: {
        marginLeft: -18,
        marginRight: 10,
      },
      graellaRectors:{   
        paddingBottom:0
      },
      bigAvatar: {
        margin: 10,
        width: 90,
        height: 90,
      },
      logo:{       
        paddingRight:16
      },
      histories:{
        flex:1,
        marginTop:0
      },
      cercador:{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop:30,
          marginLeft: "2.5%",
          width:"95%",
          
      },
      titolApp:{
        fontSize:24,
        fontWeight:"bold",
      },
      enllacCockies:{
        textDecoration:"none",
        color:"white",
        fontWeight:"bold",
        fontFamily: theme.typography.fontFamily,
        "&:hover":{
          color:theme.palette.primary.main
        }
      },
      textCookies:{
        fontFamily: theme.typography.fontFamily
      },
      toolbar: theme.mixins.toolbar,
      ancora:{
        marginLeft: "2.5%",
        marginRight: "2.5%",
        width:"90%",
        paddingTop:64,
        textAlign:"justify",       
        fontSize:18,
        fontFamily: theme.typography.fontFamily,
        color:"gray"
      }

     
  });

class Home extends Component{

    state={
        title:"Rectors i rectores de la UAB"
    }

    //Crea les Cartes dels Rectors
    factory = (rectors) =>{

        return rectors.map((r,i)=>{            
            return <CartaRector key={r.nom} animacio={(i+1)*500} rector={r}/>
        })

    }

    componentDidMount(){
        //Estableix es histories
        this.props.dispatch(globalHistories());
        //If mobile change title
      if(window.innerWidth<=600){
        this.setState({title:"Rectors i rectores"})
      }
    }

    render(){
        const { classes } = this.props;
        return (<Grid className="cos" container>
                    <AppBar position="fixed">
                        <Toolbar variant="regular">   
                            <Link to="./"><img alt="Rectors i rectores de la UAB" src={`./img/logos/uab.png`} className={classes.logo}/></Link>
                            <Typography className={classes.titolApp} variant="h5" color="inherit" align="left">
                               {this.state.title}
                            </Typography>                     
                        </Toolbar>
                    </AppBar>                                              
                    <Grid container direction="column" justify="center" alignItems="center" alignContent="center" className={classes.cercador} position="fixed">
                        <div className={classes.toolbar}></div>      
                        <Searcher isGlobal={true}/>
                    </Grid>
                    <Grid container className={classes.histories}                    
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >                       
                        <HistoriesGeneral/>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="flex-start" alignContent="flex-start" className={classes.graellaRectors}>
                        {this.factory(this.props.rectors)}
                        <Grid className={classes.ancora}>
                      <Typography variant="p">
                      Amb motiu de la commemoració del cinquantè aniversari de la Universitat Autònoma de Barcelona, l'Àrea de Comunicació i Promoció ha realitzat aquest documental web que recull entrevistes a les persones que han ocupat el càrrec de rector o de rectora de la Universitat per tal que ens relatin la història de la institució a través de les seves experiències com a màxims representants institucionals. Els seus testimonis representen un valuós document sobre l’evolució de la UAB al llarg dels seus cinquanta anys d’existència. 
                      </Typography>
                      <Typography variant="p">
                        &nbsp;
                      </Typography>
                      <Typography variant="p">
                        
                        Bellaterra, juny de 2019
                      </Typography>
                    </Grid>
                    </Grid>   
                   
                    <Footer/>
                    <CookieConsent
                      location="bottom"
                      buttonText="D'acord"                      
                      style={{ background: "#2B373B", fontFamily:"Roboto" }}
                      buttonStyle={{ color: "#4e503b", fontSize: "13px" }} 
                  >
                      Aquesta aplicació utilitza cookies.{" "}
                      <span style={{ fontSize: "10px" }}>
                      <a className={classes.enllacCockies} href="https://www.uab.cat/web/coneix-la-uab/itineraris/proteccio-de-dades-1345668257177.html" target="_blank">[Més informació]</a>
                      </span>
                  </CookieConsent>
                </Grid>)
    }

}

function mapStateToProps(state){
    const {rectors} = state;   
    return rectors;
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Home)));