import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//Estil Material
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Vistes
import Home from './views/Home';
import Rector from './views/Rector';

const theme = createMuiTheme({
    palette:{
      primary:{
        main:"#40ae33"
      }
    }
});

class App extends Component {
  render() {
    return (
      <div className="App">     
         
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/r/:id/:secs?" component={Rector}/>
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state){  
  return state;
}

export default withRouter(connect(mapStateToProps)(App));
