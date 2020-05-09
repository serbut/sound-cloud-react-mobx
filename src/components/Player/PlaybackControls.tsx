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
  const { playerStore, playQueueStore } = useContext(AppContext);
  const { track, isPlaying, repeat } = playerStore;
  const { shuffle } = playQueueStore;

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
          onClick={() => playQueueStore.toggleShuffle()}
        >
          <Shuffle />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          disabled={!playQueueStore.prevTrack}
          onClick={() => playerStore.playTrack(playQueueStore.prevTrack)}
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
          disabled={!playQueueStore.nextTrack}
          onClick={() => playerStore.playTrack(playQueueStore.nextTrack)}
        >
          <SkipNext />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          color={repeat ? 'primary' : 'default'}
          onClick={() => playerStore.toggleRepeat()}
        >
          <Repeat />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default observer(PlaybackControls);
