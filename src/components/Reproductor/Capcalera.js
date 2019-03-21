import React,{Component} from 'react';
import {connect} from 'react-redux';

class Capcalera extends Component{
    render(){
        return(<div>
                <h1 className="nom_rector">Nom del rector</h1>
              </div>)
    }
}

export default connect()(Capcalera);