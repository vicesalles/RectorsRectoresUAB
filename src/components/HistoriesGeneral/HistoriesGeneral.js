import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

//Components
import List from '@material-ui/core/List';
import Historia from './Historia';

//Estil

const styles = theme => ({
    root: {    
      width: '100%',
      maxWidth: 560,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });


class HistoriesGeneral extends Component {

    //Fàbrica d'histories
    /**
     * @description Crea la llista de components d'Història a publicar 
     * @param {array} hs 
     */
    fabricaHistories = (hs) =>{

        return hs.map((h,i)=><Historia key={i} historia={h}/>)

    }

    render(){
        
        const { classes } = this.props;
        
        return (
            <List 
            spacing={0}
            direction="column"            
            justify="center"
            className={classes.root} 
            >
                {this.fabricaHistories(this.props.filtrades)}            
            </List>
        );

    }

}

function mapStateToProps(state){

    const {histories} = state;
    return histories

}

export default connect(mapStateToProps)(withStyles(styles)(HistoriesGeneral))
