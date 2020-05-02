import { AppBar, Box, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import PlayerCenter from './PlayerCenter';
import PlayerLeft from './PlayerLeft';
import PlayerRight from './PlayerRight';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

const Player = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Box p={2}>
        <Grid container spacing={1}>
          <PlayerLeft />
          <PlayerCenter />
          <PlayerRight />
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Player;
