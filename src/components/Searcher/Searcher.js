import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


//Components
import TextField from '@material-ui/core/TextField';

//Accions
import {searchText} from '../../state/actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,    
    
  },
  dense: {
    marginTop: 61,
  },
  mainSearcher:{
    fontSize:24
  }
 
});

class Searcher extends Component{

    state = {
        cercador: "",
        searchTextSize: 40
      };
    
      handleChange = (event) => {
        const text = event.target.value;
        
        this.setState({
          cercador: text
        });

        if(this.props.isGlobal){
          this.props.dispatch(searchText(text,true))
        }else{
          this.props.dispatch(searchText(text))
        }      
       
        
      };

    componentDidMount(){

      //If mobile make text smaller
      if(window.innerWidth<=600){
        this.setState({searchTextSize:24})
      }

    }

    render(){
        
        const wi = this.props.w ? this.props.w : "100%";

        if(this.props.isGlobal){
          return(<div className="Searcher">
            <TextField
                id="outlined-full-width"
                label="Cercador"                          
                placeholder="Explora els mandats..."               
                fullWidth
                color="white"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}
                style={{backgroundColor:'white'}} 
                InputProps={{ style: { fontSize: this.state.searchTextSize, backgroundColor:"white" } }}
                            
                InputLabelProps={{
                    shrink: true,
                }}
        />
            </div>)
        }else{
          return(<div className="Searcher">
            <TextField 
                id="outlined-full-width"
                label="Cercador d'aquest mandat"                
                placeholder="Cercar un tema..."               
                fullWidth
                color="white"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}
                style={{backgroundColor:'white', width:wi}}   
                InputProps={{ style: { backgroundColor:"white" } }}
                InputLabelProps={{
                    shrink: true,
                }}
        />
            </div>)

        }

        
    }
}


export default withRouter(connect()(withStyles(styles)(Searcher)));