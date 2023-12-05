import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

//Estil Material
import { MuiThemeProvider, createTheme  } from '@material-ui/core/styles';

//Vistes
import Home from './views/Home';
import Rector from './views/Rector';
import Credits from './views/Credits';

//Share
import Share from './components/Share/Share';

//Main Theme
const theme = createTheme({
    palette:{
      primary:{
        main:"#40ae33"
      }
    },
    typography: {
      useNextVariants: true,
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
            <Route exact path="/credits" component={Credits}/>
          </Switch>
          <Share/>
        </MuiThemeProvider>        
   
      </div>
    );
  }
}

function mapStateToProps(state){  
  return state;
}

export default withRouter(connect(mapStateToProps)(App));
