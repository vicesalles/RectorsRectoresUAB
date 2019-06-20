import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {withRouter,Link} from 'react-router-dom';

//Material ui components
import {ListItem,ListItemText,ListItemAvatar,Avatar,Typography} from '@material-ui/core';

function Historia(props){
  
  const { classes,historia } = props;

  return (

      <ListItem button component={Link} className={classes.item} to={`./r/${historia.url}/${historia.sec}`} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={historia.nom} src={`./img/s/${historia.url}.jpg`} />
        </ListItemAvatar>
        <ListItemText
          primary= {<React.Fragment>
              <Typography component="span" className={classes.principal} color="textPrimary">
                {historia.txt}
              </Typography>
            </React.Fragment>}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
              {historia.nom}
              </Typography>
              {` ${historia.anys}`}
            </React.Fragment>
          }
        />
      </ListItem>
     
  );
}

// Estil
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',    
  },
  principal: {
    display: 'inline',    
    fontWeight:"bold",
    fontSize:18
  },
  item:{
    marginTop:5,
    paddingTop:5,
    paddingBottom:5
  }
});


export default withRouter(withStyles(styles)(Historia));