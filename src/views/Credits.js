import React from 'react';
import {Link} from 'react-router-dom';

//Components
import AppBar from '@material-ui/core/AppBar';

//Pàgina de Crèdits
export default function Credits(){
    return(<div id="credits">
        <AppBar/>
        <p>Una producció de la Unitat d'Audiovisuals i Multimèdia.</p>
        <ul>
            <li>Direcció: Vicenç Sallés</li>           
            <li>Entrevistes: Lucas Santos</li>            
            <li>Edició: Xavi Torner</li>
            <li>Ajudants de realització: Ana, Juanra</li>
        </ul>
        <h2>Sobre aquest projecte</h2>
        <p>Aquest projecte neix com a documental audiovisual. La idea era que
            els rectors i rectores de la nostra Universitat ens expliquessin,
            en primera persona, els seus respectius mandats.
        </p>
        <p>Entrevista rere entrevista, vam anar constatant el valor històric i documental
            de cadascun d'aquells vídeos.
        </p>
        <p>Mínima manipulació i facilitar l'exploració dels continguts per mitjà de rètols i paraules clau.</p>
        <Link to="/">Inici</Link>

        </div>)
}

