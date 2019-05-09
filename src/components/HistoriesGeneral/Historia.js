import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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

function Historia(props) {
  const { classes } = props;
  return (
    
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/img/s/ferrer.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ocupació del Rectorat"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
               Lluís Ferrer
              </Typography>
              {" — 2002-2009"}
            </React.Fragment>
          }
        />
      </ListItem>
     
  );
}


export default withStyles(styles)(Historia);