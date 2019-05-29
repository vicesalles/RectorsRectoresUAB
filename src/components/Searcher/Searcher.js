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
    marginTop: 16,
  },
  mainSearcher:{
    fontSize:24
  }
 
});

class Searcher extends Component{

    state = {
        cercador: ""
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

    render(){
        
      const {classes} = this.props;
        const wi = this.props.w ? this.props.w : "100%";

        if(this.props.isGlobal){
          return(<div className="Searcher">
            <TextField
                id="outlined-full-width"
                label="Cercador"                
                placeholder="Explora els mandats..."               
                fullWidth
                color="gray"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}dsfs
                style={{backgroundColor:'white'}} 
                InputProps={{ style: { fontSize: 40 } }}
                            
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
                color="gray"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}
                style={{backgroundColor:'white', width:wi}}   
                            
                InputLabelProps={{
                    shrink: true,
                }}
        />
            </div>)

        }

        
    }
}


export default withRouter(connect()(withStyles(styles)(Searcher)));