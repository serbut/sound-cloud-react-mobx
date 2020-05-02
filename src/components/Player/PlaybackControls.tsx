import { Grid, IconButton } from '@material-ui/core';
import {
  Pause,
  PlayArrow,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';

const PlaybackControls = () => {
  const { playerStore } = useContext(AppContext);
  const { shuffle, queue, track, isPlaying, loop } = playerStore;

  return (
    <Grid
      container
      item
      xs={12}
      spacing={1}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <IconButton
          size="small"
          color={shuffle ? 'primary' : 'default'}
          onClick={() => playerStore.toggleShuffle()}
        >
          <Shuffle />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          disabled={!queue.prevTrack}
          onClick={() => playerStore.playPrev()}
        >
          <SkipPrevious />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          color="primary"
          disabled={!track}
          onClick={() => playerStore.playTrack()}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          disabled={!queue.nextTrack}
          onClick={() => playerStore.playNext()}
        >
          <SkipNext />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          color={loop ? 'primary' : 'default'}
          onClick={() => playerStore.toggleLoop()}
        >
          <Repeat />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default observer(PlaybackControls);
