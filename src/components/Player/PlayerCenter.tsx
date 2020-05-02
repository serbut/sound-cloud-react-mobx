import { Grid } from '@material-ui/core';
import React from 'react';
import PlaybackControls from './PlaybackControls';
import TimeControl from './TimeControl';

const PlayerCenter = () => {
  return (
    <Grid container item xs={4} alignContent="center">
      <PlaybackControls />
      <TimeControl />
    </Grid>
  );
};

export default PlayerCenter;
