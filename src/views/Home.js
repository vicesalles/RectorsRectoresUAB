import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component{

    render(){
        return (<div>
            <p>50è Aniversari de la Universitat Autònoma de Barcelona</p>
            <Link to="/r/z">I like it</Link>
            </div>)
    }

}

export default Home;