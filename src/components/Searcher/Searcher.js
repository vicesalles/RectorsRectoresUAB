import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



//Accions
import {searchCurrentVideoText} from '../../state/actions';

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

        this.props.dispatch(searchCurrentVideoText(text))
       
        
      };

    render(){
        
        return(<div className="Searcher">
            <TextField
                id="outlined-full-width"
                label="Cercador"                
                placeholder="Cercar un tema..."               
                fullWidth
                color="gray"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}
                style={{backgroundColor:'white'}}               
                InputLabelProps={{
                    shrink: true,
          }}
        />
            </div>)
    }
}


export default withRouter(connect()(withStyles(styles)(Searcher)));