import React from 'react';

//Estil
import { withStyles } from '@material-ui/core/styles';

//Components
import { AppBar, Grid, Typography, Toolbar, IconButton } from '@material-ui/core';

//Icona 
import HomeIcon from '@material-ui/icons/Home';


//Pàgina de Crèdits
function Credits(props) {
    const { classes } = props;
    return (
        <Grid id="credits">
            <AppBar>
                <Toolbar variant="dense">
                    <IconButton href="./">
                        <HomeIcon />
                    </IconButton>                   
                </Toolbar>
            </AppBar>
            <Toolbar variant="dense" hidden={true}> </Toolbar>
            <Grid container className={classes.creditsMainGridContainer} direction="column">
            <Grid container className={classes.creditsMainGrid} direction="column">
                <Grid item className={classes.creditsSubGrid} >  
                    <Typography className={classes.h1} variant="h1" color="inherit" align="left">
                        Sobre aquest projecte
                    </Typography>                  
                    
                    <Typography component="p" className={classes.about} align="left">
                        Amb motiu de la commemoració del cinquantè aniversari de la Universitat Autònoma de Barcelona, l'any 2019, l'Àrea de Comunicació i Promoció, va impulsar l'enregistrament de les entrevistes que podeu explorar en aquest espai.                                           
                    </Typography>
                    <Typography component="p" className={classes.about} align="left">
                        Es tractava de recollir el testimoni de totes les persones que han ocupat el càrrec de rector o de rectora de la Universitat. Volíem explorar els 50 anys d'història de la nostra Universitat a través dels seus records.                                           
                    </Typography>

                    <Typography component="p" className={classes.about} align="left">
                        Guiats pel <a href="https://www.youtube.com/watch?v=1hVwAQOu83Y" style={{color:"black"}} rel="noopener noreferrer" className={classes.enllac} target="_blank">llibre del 50è aniversari</a>, entrevista rere entrevista, vam anar constatant el valor històric i
                        documental de cadascun dels testimonis. Com se suposava que havíem d'editar aquests discursos? Quin valor podíem aportar-hi? 
                    </Typography>
                    <Typography component="p" className={classes.about} color="inherit" align="left">
                        Mínima manipulació de les fonts i facilitar-ne l'exploració. Aquest és el criteri d'aproximació als continguts generats durant el cicle d'entrevistes. 
                        El màxim valor que podíem aportar era facilitar l'exploració dels continguts, pràcticament, en brut. Així neix el documental web que teniu al davant.
                    </Typography>
                </Grid>
                <Grid item className={classes.creditsSubGrid} align="left">                              
                    <Typography component="p"  color="inherit" align="left">
                        <b>Direcció</b> Vicenç Sallés
                    </Typography>
                    <Typography component="p"  color="inherit" align="left">
                    <b>Entrevistes</b> Lucas V. Santos
                    </Typography>
                    <Typography component="p"  color="inherit" align="left">
                    <b>Edició</b> Xavi Torner
                    </Typography>
                    <Typography component="p"  color="inherit" align="left">
                    <b>Ajudants de realització</b> Ana Lozano, Juanra
                    </Typography>
                    <Typography variant="h2" color="inherit" className={classes.titolSeccioCredits}>                    
                        Una producció de la Unitat d'Audiovisuals i Multimèdia
                    </Typography>    
                    <div justify="center" align="center" >   
                    <img alt="Universitat Autònoma de Barcelona 50è Aniversari" src="./img/logos/uab50.png"></img>
                    </div>
                </Grid>
            </Grid>
            </Grid>

        </Grid>
    )
}

const estilCredits = theme => ({
    
    creditsMainGridContainer: {
        maxWidth: 900,
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft: "4em",
        paddingRight:"4em",    
        justifyContent:"center",    
        flex:1
    },
    creditsMainGrid: {        
        paddingTop:"2em",
        paddingLeft: "2em",
        paddingRight:"2em",    
        justifyContent:"center",    
        flex:2
    },
    h1:{
        fontSize:24,
        fontWeight:"bold",
        fontFamily:"Hubot Sans, sans-serif",
        color:"#008539"
    },
    h2:{
        fontSize:16
    },
    p:{
        fontSize:14
    },
    creditsSubGrid:{
        paddingTop:"2em",
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        color: "black"

    },
    about:{
        fontSize:18,
        paddingTop:18,
        color:"black"
    },
    titolSobreProjecte:{
        paddingBottom:24,
        color: theme.palette.primary.main,
        fontSize: 24
    },
    titolSeccioCredits:{
        paddingTop:48,
        paddingBottom:12,
        color: theme.palette.primary.main,
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center"
    },
    enllac:{
        fontWeight:"bold",
        color:"black",
        "&:hover":{
            color: theme.palette.primary.main
        }
    }


})


export default withStyles(estilCredits)(Credits)