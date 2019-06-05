import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


//Components
import {TextField,Paper, InputBase} from '@material-ui/core/';

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
  },
  caixaCercador:{
    backgroundColor:"white",
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft: 5,
    marginLeft:5,
    paddingRight: 5,
    borderRadius:10
  }
 
});

class Searcher extends Component{

    state = {
        cercador: "",
        searchTextSize: 32
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
        const {classes} = this.props;

        if(this.props.isGlobal){
          return(<Paper className="Searcher">
            <InputBase
                id="outlined-full-width"                              
                placeholder="Cerca moments... ex: Recerca"               
                fullWidth
                color="white"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}
                className= {classes.caixaCercador}
                style={{fontSize: this.state.searchTextSize}} 
                InputProps={{ style: { fontSize: this.state.searchTextSize, backgroundColor:"white" } }}
                            
             
        />
            </Paper>)
        }else{
          return(<div className="Searcher">
            <TextField 
                id="outlined-full-width"
                label="Cercador d'aquest mandat"                
                placeholder="Cercar un moment..."               
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