import { Grid, IconButton, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';

const useStyles = makeStyles({
  root: {
    width: 125,
  },
});

const getVolumeIcon = (muted: boolean, volume: number) => {
  if (volume >= 0.8) {
    return <VolumeUp />;
  }
  if (volume >= 0.4) {
    return <VolumeDown />;
  }
  if (volume > 0) {
    return <VolumeMute />;
  }
  return <VolumeOff />;
};

const VolumeContol = () => {
  const classes = useStyles();
  const { playerStore } = useContext(AppContext);
  const { muted, volume } = playerStore;

  const handleChange = (event: any, newValue: number | number[]) => {
    playerStore.setVolume((newValue as number) / 100);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton size="small" onClick={() => playerStore.toggleMuted()}>
            {getVolumeIcon(muted, volume)}
          </IconButton>
        </Grid>
        <Grid item xs>
          <Slider
            value={volume * 100}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default observer(VolumeContol);
