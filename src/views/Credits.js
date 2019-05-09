import React from 'react';
import {Link} from 'react-router-dom';

//Pàgina de Crèdits
export default function Credits(){
    return(<div id="credits">

        <p>Una producció de la Unitat d'Audiovisuals i Multimèdia.</p>
        <ul>
            <li>Producció: Juan Carlos Romero</li>
            <li>Realització: Vicenç Sallés</li>           
            <li>Entrevistes: Lucas Santos</li>            
            <li>Edició: Xavi Torner</li>
            <li>Ajudants de realització: Ana, Juanra</li>
        </ul>

        <Link to="/">Inici</Link>

        </div>)
}

