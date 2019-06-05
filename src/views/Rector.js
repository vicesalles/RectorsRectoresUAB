import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

//Components
import Capcalera from '../components/Rector/Capcalera';
import Cos from '../components/Rector/Cos';
import Footer from '../components/Footer/Footer';

// Estil
const estil = {
     
};

class Rector extends Component{

    render(){ 
         return(
            <div className="cos">
                <Capcalera/>
                <Cos/>     
                <Footer/>   
            </div>
        )
    } 


}

export default withRouter((withStyles(estil)(Rector)))