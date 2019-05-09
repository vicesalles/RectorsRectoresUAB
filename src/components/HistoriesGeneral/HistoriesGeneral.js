import React,{Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

//Components
import List from '@material-ui/core/List';
import Historia from './Historia';

//Estil

const styles = theme => ({
    root: {    
      display: "flex",  
      width: '100%',
      maxWidth: 560,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });

class HistoriesGeneral extends Component {

    render(){

        const { classes } = this.props;
        return (
            <List 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root} 
            >
                <Historia/>
            </List>
        );

    }

}

function mapStateToProps(state){

    const {histories} = state;
    return histories

}

export default connect(mapStateToProps)(withStyles(styles)(HistoriesGeneral))
