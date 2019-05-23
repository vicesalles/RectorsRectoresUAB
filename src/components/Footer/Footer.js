import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(<div id="peu"> 
            <div>                
                <Link to="/credits"><img alt="Universitat Autònoma de Barcelona 50è Aniversari" src="/img/logos/uab50.png"></img>  </Link>    
            </div>     
            
            
    </div>)
}

export default Footer;