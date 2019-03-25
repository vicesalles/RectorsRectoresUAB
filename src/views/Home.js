import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Accions

import {setCurrentRector} from '../state/actions/';

class Home extends Component{

    handleClick = (v) =>{

        this.props.dispatch(setCurrentRector(v))

    }

    factory = (rectors) =>{

        return rectors.map(r=>{
            return <div key={r.url}>
                    <p>{r.nom} {r.cognoms}</p>
                    <p>{r.mandat}</p>
                    <Link onClick={()=>this.handleClick(r.url)}  to={`/r/${r.url}`} >Visita</Link>
                    </div>
        })

    }

    render(){
        return (<div>
            <p>50è Aniversari de la Universitat Autònoma de Barcelona</p>
            <Link to="/r/z">I like it</Link>
            {this.factory(this.props.rectors)}
            </div>)
    }

}

function mapStateToProps(state){
    const {rectors} = state;   
    return rectors;
}

export default connect(mapStateToProps)(Home);