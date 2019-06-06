import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

//Components
import List from '@material-ui/core/List';
import Historia from './Historia';

class HistoriesGeneral extends Component {

    //Fàbrica d'histories
    /**
     * @description Crea la llista de components d'Història a publicar 
     * @param {array} hs 
     */
    fabricaHistories = (hs) =>{

        return hs.map((h,i)=><Historia key={`${i}-historia`} historia={h}/>)

    }

    render(){
        
        const { classes,filtrades } = this.props;        

        // Mira si l'usuari ha fet alguna cerca
        if(filtrades.length===0){            
            return(<div className={classes.buit}></div>)

        }else{

            return (
                <List 
                spacing={4}
                direction="column"            
                justify="center"
                className={classes.root} 
                >
                    {this.fabricaHistories(filtrades)}            
                </List>
            );

        }
        

       

    }

}

//Estil
const styles = theme => ({
    root: {    
      width: '90%',     
      backgroundColor: theme.palette.background.paper,
    },
    buit:{
        display:"none",
        height:0,
        paddingTop:0,
        paddingBottom:0
    },
    inline: {
      display: 'inline',
    },
  });

function mapStateToProps(state){

    const {histories} = state;
    return histories

}

export default connect(mapStateToProps)(withStyles(styles)(HistoriesGeneral))
