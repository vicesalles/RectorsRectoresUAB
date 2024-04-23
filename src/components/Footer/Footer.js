import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(<div id="peu">            
            <div>                
            <div style={{flex:1,flexDirection:"row"}}>
             <Link to="/r/serra/"><p>- Antoni Serra</p></Link>
             <Link to="/r/pascual/"><p>- Ramon Pascual</p></Link>
             <Link to="/r/valles/"><p>- Josep M. Vallès</p></Link>
             <Link to="/r/sola/"><p>- Carles Solà</p></Link>
             <Link to="/r/ferrer/"><p>- Lluís Ferrer</p></Link>
             <Link to="/r/ripoll/"><p>- Ana Ripoll</p></Link>
             <Link to="/r/sancho/"><p>- Ferran Sancho</p></Link>
             <Link to="/r/arboix/"><p>- Margarita Arboix -</p></Link>
            </div>
                <Link to="/credits"><img alt="Universitat Autònoma de Barcelona 50è Aniversari" src="./img/logos/logotip-uab-versio-3-verd.png"></img>  </Link> 
                <a style={{'color':'gray'}} href="./sitemap.xml"><p>Mapa del lloc web (Sitemap)</p></a>
            </div>              
    </div>)
}

export default Footer;