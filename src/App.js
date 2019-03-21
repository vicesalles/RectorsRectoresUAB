import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//Vistes
import Home from './views/Home';
import Rector from './views/Rector';


class App extends Component {
  render() {
    return (
      <div className="App">     
         
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/r/:id" component={Rector}/>
        </Switch>
      
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('state',state);
  return state;
}

export default withRouter(connect(mapStateToProps)(App));
