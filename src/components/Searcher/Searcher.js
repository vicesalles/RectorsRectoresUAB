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
  dense: {
    marginTop: 61,
  },
  mainSearcher:{
    fontSize:24
  },
  caixaCercador:{
    backgroundColor:"white",
    width:"95%",
    paddingTop: 15,
    paddingBottom:15,     
    borderRadius:10
  },
  labelsForm:{
    align:"left",
    marginRight:7,
    fontFamily:"Hubot Sans, sans-serif"
  }
 
});

class Searcher extends Component{

    state = {
        cercador: "",
        searchTextSize: 18
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
             <label for="outlined-full-width" className= {classes.labelsForm}>Cercador</label>
            <InputBase
                id="outlined-full-width"                              
                placeholder="Cerca moments... ex: Recerca"               
                fullWidth
                color="secondary"                
                variant="filled"
                autoFocus
                label="Cerca a Rectors i Rectores de la UAB"
                onChange={(event)=>{this.handleChange(event)}}
                className= {classes.caixaCercador}
                style={{fontSize: this.state.searchTextSize}}  
        />
            </Paper>)
        }else{
          return(<div className="Searcher">            
            <TextField 
                id="outlined-full-width"                                
                placeholder="Cercar un moment..."               
                fullWidth
                color="secondary"
                margin="normal"
                variant="filled"
                autoFocus
                onChange={(event)=>{this.handleChange(event)}}
                style={{backgroundColor:'white'}}   
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