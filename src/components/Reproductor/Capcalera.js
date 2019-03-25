import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Capcalera extends Component{
    render(){
        return(<div>
                <h1 className="nom_rector">{this.props.currentRector ? `${this.props.currentRector.nom} ${this.props.currentRector.cognoms}`:"Nom del rector"}</h1>
              </div>)
    }
}

function mapStateToProps(state){
   
    const {currentRector} = state.rectors;
    console.log('rector',state);
    return {currentRector};

}

export default withRouter(connect(mapStateToProps)(Capcalera));