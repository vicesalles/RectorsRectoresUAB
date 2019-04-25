import React,{Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
        this.setState({
          cercador: event.target.value,
        });
        console.log(event.target.value)
      };

    render(){
        const { classes } = this.props;
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
                startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon/>
                    </InputAdornment>
                  }
                InputLabelProps={{
                    shrink: true,
          }}
        />
            </div>)
    }
}


export default withRouter(connect()(withStyles(styles)(Searcher)));