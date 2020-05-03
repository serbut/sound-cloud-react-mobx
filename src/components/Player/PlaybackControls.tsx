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
  const { queue, track, isPlaying, repeat } = playerStore;
  const { shuffle } = queue;

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
          onClick={() => playerStore.queue.toggleShuffle()}
        >
          <Shuffle />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          disabled={!queue.prevTrack}
          onClick={() => playerStore.playTrack(queue.prevTrack)}
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
          onClick={() => playerStore.playTrack(queue.nextTrack)}
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
