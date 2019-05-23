import React from 'react';
import {Link} from 'react-router-dom';

//Components
import {AppBar, Grid, Typography, Toolbar, IconButton} from '@material-ui/core';

//Icona 
import HomeIcon from '@material-ui/icons/Home';

//Pàgina de Crèdits
export default function Credits() {
    return (
        <Grid id="credits">
            <AppBar>
                    <Toolbar variant="dense">  
                        <IconButton href="/">
                            <HomeIcon/>             
                        </IconButton>                   
                      
                        <Grid>                           
                            <Typography component="p" color="inherit" align="left">
                               Credits
                            </Typography>
                        </Grid>      
                </Toolbar>
            </AppBar>
            <Grid>
                <Grid>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut mauris erat.
                        Sed at viverra justo. In eleifend ante vitae fringilla condimentum. Duis
                        tincidunt, neque et commodo lobortis, urna justo imperdiet massa, in porttitor
                        ex metus hendrerit erat. Vivamus ac purus ac ipsum consectetur dictum a vitae
                        sapien. Vestibulum vitae suscipit neque. In vitae sapien maximus, ultrices
                        ligula non, tincidunt nunc.
                    </p>
                    <p>Cras sit amet hendrerit diam. In sagittis leo risus, a ullamcorper velit
                        pulvinar eu. Duis id mauris consectetur arcu tempus elementum. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Sed tincidunt enim ultrices libero
                        mattis, ultricies efficitur ante tristique. Integer sit amet orci vel nibh
                        mattis lacinia vitae et diam. Maecenas ex tortor, eleifend sit amet tincidunt
                        nec, commodo sit amet enim. Quisque vehicula pellentesque lectus eget faucibus.
                        Vivamus vitae sapien ac urna mattis tempus non sit amet enim. Aliquam efficitur
                        congue felis sit amet venenatis. Duis tincidunt aliquam odio, sed fermentum
                        sapien sagittis et. Nulla eget feugiat nulla. Proin eros diam, molestie eget
                        orci at, varius congue nulla. Mauris pharetra diam a sapien dictum, ut hendrerit
                        diam finibus.
                    </p>

                    <p>Donec tempus tellus nibh, quis iaculis lorem tincidunt sit amet. Suspendisse
                        venenatis, neque nec viverra ultricies, velit tellus volutpat nisl, a auctor est
                        felis non metus. In fermentum gravida finibus. Nulla porta est sed purus aliquet
                        lacinia. Praesent varius diam sit amet nulla aliquet efficitur. Ut eu nisi vitae
                        ex convallis sollicitudin in ac neque. Nullam maximus tempus nulla, sed maximus
                        ligula vulputate id. Pellentesque velit elit, fringilla sed luctus ac, euismod
                        non nulla. Maecenas elementum, velit tempus porttitor condimentum, magna augue
                        finibus est, et accumsan mauris mauris at odio.
                    </p>

                </Grid>
                <Grid>
                    <p>Una producció de la Unitat d'Audiovisuals i Multimèdia.</p>
                    <ul>
                        <li>Direcció: Vicenç Sallés</li>
                        <li>Entrevistes: Lucas Santos</li>
                        <li>Edició: Xavi Torner</li>
                        <li>Ajudants de realització: Ana, Juanra</li>
                    </ul>
                    <h2>Sobre aquest projecte</h2>
                    <p>Aquest projecte neix com a documental audiovisual. La idea era que els
                        rectors i rectores de la nostra Universitat ens expliquessin, en primera
                        persona, els seus respectius mandats.
                    </p>
                    <p>Entrevista rere entrevista, vam anar constatant el valor històric i
                        documental de cadascun d'aquells vídeos.
                    </p>
                    <p>Mínima manipulació i facilitar l'exploració dels continguts per mitjà de
                        rètols i paraules clau.</p>
                </Grid>
            </Grid>

            <Link to="/">Inici</Link>

        </Grid>
    )
}
